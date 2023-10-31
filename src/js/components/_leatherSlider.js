import Swiper, { Autoplay, Lazy } from 'swiper';

const sliderOptions = {
  loop: true,
  lazy: true,
  modules: [Autoplay, Lazy],
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      spaceBetween: 50,
      slidesPerView: 2,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 4,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 5,
    },
    1180: {
      spaceBetween: 70,
      slidesPerView: 6,
    },
  },
};

const leatherSlider = new Swiper('.leather__slider', sliderOptions);
