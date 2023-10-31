import Swiper, {
  Navigation,
  Parallax
} from 'swiper';

const serviceParallax = new Swiper('.services__slider', {
  modules: [Navigation, Parallax],
  speed: 200,
  slidesPerView: 4,
  parallax: true,
  allowTouchMove: false,
  touchRatio: 1,
  navigation: {
    nextEl: '.btn-nav--next',
    prevEl: '.btn-nav--prev',
  },

  a11y: {
    prevSlideMessage: 'Попередній слайд',
    nextSlideMessage: 'Наступний слайд',
  },

});