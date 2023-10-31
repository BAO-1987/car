import Swiper, {
  EffectFade,
  Autoplay,
  Pagination,
  Scrollbar,
  Lazy,
} from 'swiper';

const sliderOptions = {
  slidesPerView: 1,
  modules: [Autoplay, Pagination, Scrollbar, EffectFade, Lazy],
  lazy: true,
  dragable: true,
  grabCursor: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".reviews__scrollbar",
    type: "progressbar",
  },
};

const reviewsSlider = new Swiper('.reviews__slider', sliderOptions);