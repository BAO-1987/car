import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

const sliderOptions = {
  slidesPerView: 1,
  modules: [Navigation, Pagination, Scrollbar],
  spaceBetween: 30,
   effect: "flip",
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  breakpoints: {
    475: {
      spaceBetween: 15,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1180: {
      slidesPerView: 4,
    },
  },
};

const shortsSlider = new Swiper('.card__slider', sliderOptions);
