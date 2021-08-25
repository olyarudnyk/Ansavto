const page = document.querySelector('.header-inner-carousel');
const arrows = document.querySelectorAll('.header-arrow');

for (const arrow of arrows) {
  arrow.addEventListener('click', function () {
    page.classList.toggle('header-inner-carousel-moved');
  })
}


const calcButtons = document.querySelectorAll('.calc-slider-btn');
const calcForms = document.querySelectorAll('.calc-leasing');

for (const button of calcButtons) {
  button.addEventListener('click', function() {
    for (const b of calcButtons) {
      if (button === b) {
        b.classList.add('active')
      } else {
        b.classList.remove('active')
      }
    }

    const buttonFormName = button.getAttribute('data-form')
    for (const form of calcForms) {
      const formName = form.getAttribute('data-form')
      if (buttonFormName === formName) {
        form.classList.add('active') 
      } else {
        form.classList.remove('active')
      }

    }

  })
}
