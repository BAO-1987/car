import Swiper, {
  Lazy,
  Navigation,
  Pagination,
  Thumbs
} from 'swiper';

const singleImages = document.querySelector('.portfolio__slider');

if (singleImages) {
  const singleSlider = new Swiper('.portfolio__nav', {
    modules: [Pagination],
    slidesPerView: 6,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    // pagination: {
    //   el: '.progress__scrollbar',
    //   type: 'progressbar',
    // },

  });
  const singleSlidesNav = new Swiper(singleImages, {
    slidesPerView: 1,
    allowTouchMove: false,
    grabCursor: false,
    modules: [Navigation, Thumbs, Lazy, Pagination],
    navigation: {
      nextEl: '.btn-nav--next',
      prevEl: '.btn-nav--prev',
    },
    pagination: {
      el: '.progress__scrollbar',
      type: 'progressbar',
    },
    thumbs: {
      swiper: singleSlider,
    },
  });
}


// import Swiper, {
//   Lazy,
//   Navigation,
//   Pagination,
//   Thumbs
// } from 'swiper';

// const galleryThumbs = new Swiper('.portfolio__nav', {
//   modules: [Pagination, Lazy],
//   spaceBetween: 15,
//   slidesPerView: 2,
//   lazy: true,
//   loop: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
//   pagination: {
//     el: '.progress__line',
//     type: 'progressbar',
//   },
//   breakpoints: {
//     475: {
//       slidesPerView: 3,
//     },
//     768: {
//       spaceBetween: 30,
//       slidesPerView: 4,
//     },
//     1180: {
//       slidesPerView: 6,
//     },
//   },
// });

// const galleryTop = new Swiper('.gallery__preview', {
//   modules: [Navigation, Thumbs, Lazy],
//   spaceBetween: 10,
//   lazy: true,
//   allowTouchMove: false,
//   touchRatio: 1,
//   loop: true,
//   navigation: {
//     nextEl: '.btn-nav--next',
//     prevEl: '.btn-nav--prev',
//   },
//   thumbs: {
//     swiper: galleryThumbs,
//   },
// });