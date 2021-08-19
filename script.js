const page = document.querySelector('.header-inner-carousel');
const arrows = document.querySelectorAll('.header-arrow');

for (const arrow of arrows) {
  arrow.addEventListener('click', function () {
    page.classList.toggle('header-inner-carousel-moved');
  })
}