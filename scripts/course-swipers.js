var swiper = new Swiper(".feedback__swiper-1", {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".feedback__btn-next-1",
    prevEl: ".feedback__btn-prev-1",
  },

  breakpoints: {

    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 35
    }
  },
});

var swiper = new Swiper(".feedback__swiper-2", {
  slidesPerView: 1,
  spaceBetween: 100,
  grabCursor: true,
  navigation: {
    nextEl: ".feedback__btn-next-2",
    prevEl: ".feedback__btn-prev-2",
  },
});

