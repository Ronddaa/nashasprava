import Swiper from 'swiper/bundle'; 

'use strict'

const swiperAuction = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },

  grabCursor: true,

  mousewheel: {
    sensitivity: 1,
    eventTarget: '.swiper-slider'
  },

  autoHeight: true,

  spaceBetween: 20,

});

function checkWidthWindow() {
  // Получаем ширину экрана
  const screenWidth = window.innerWidth;

  // Условие для проверки ширины экрана
  if (screenWidth <= 1157) {
    // Изменяем параметры Swiper для 1 слайда
    swiperAuction.params.slidesPerView = 1;
  } else {
    // Изменяем параметры Swiper для 2 слайдов
    swiperAuction.params.slidesPerView = 2;
  }

  // Обновляем Swiper после изменения параметров
  swiperAuction.update();
}

// Вызываем функцию при загрузке страницы
checkWidthWindow();

// Слушаем событие изменения размеров окна
window.addEventListener('resize', checkWidthWindow);

// Burger Menu - Open / Close

document.getElementById("is-open-burger").addEventListener("click",function () {
    document.getElementById("layout-burger-menu").classList.add("is-open")
})

document.getElementById("close-burger-menu").addEventListener("click",function () {
    document.getElementById("layout-burger-menu").classList.remove("is-open")
})

// modalWindow - Open / Close

document.getElementById('main-consultation-btn-hero').addEventListener('click', function () {
  document.getElementById('wrapperModalWindowID').classList.add('is-open')
})

document.getElementById('wrapperModalWindowID').addEventListener('click', function () {
  document.getElementById('wrapperModalWindowID').classList.remove('is-open')
})