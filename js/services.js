let button = document.querySelector('.content-section__button--position--up');

let ul = document.querySelector('.brand__list');
let text = document.querySelector('.content-section__text-button');
let img = document.querySelector('.content-section__img-button');


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


button.addEventListener('click', function() {
    if (button.classList.contains('content-section__button--position--up')) {
        ul.style.overflowY = 'visible';
        ul.style.height = 'fit-content';
        text.textContent = 'Скрыть';
        img.src="img/expand_down.svg";
    } else {
        ul.style.overflowY = 'hidden';
        ul.style.height = '192px';
        text.textContent = 'Показать все';
        img.src="img/expand.svg"; 
    }
    button.classList.toggle('content-section__button--position--up');
    button.classList.toggle('content-section__button--position--down');
})

