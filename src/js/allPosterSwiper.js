document.addEventListener("DOMContentLoaded", function () {
  swiper2.autoplay.start();
  swiper3.autoplay.start();
});
const swiper2 = new Swiper(".allPosterSwiper", {
  observer: true, // 변경 감지
  observeParents: true,

  initialSlide: 3, // 시작 슬라이드 변경
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 0, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  speed: 4000,
  loop: true,

  spaceBetween: 0,
  centeredSlides: true, //센터모드

  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: "auto",
  breakpoints: {
    1024: {
      slidesPerView: 7,
    },
  },
});

const swiper3 = new Swiper(".allPosterSwiper2", {
  observer: true, // 변경 감지
  observeParents: true,

  initialSlide: 3, // 시작 슬라이드 변경
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 0, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  speed: 4000,
  loop: true,

  spaceBetween: 0,
  centeredSlides: true, //센터모드

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  // loopAdditionalSlides: 12,\
  breakpoints: {
    1024: {
      slidesPerView: 7,
    },
  },
});
