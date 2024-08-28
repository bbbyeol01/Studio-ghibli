document.addEventListener("DOMContentLoaded", function () {
  swiper.autoplay.start();
});

const swiper = new Swiper(".bestSceneSwiper", {
  /**팝업 형태로 swiper를 사용했을 때, 페이지를 로딩한 직후에는 작동하지 않고
   * 어떤 액션이 있어야 작동하게 된다.
   * 그렇기 때문에 observer 옵션을 추가해 주면 된다
   * observer 옵션을 true로 설정하게 되면 스타일을 변경하거나(예: 숨기기/표시)
   * 하위 요소를 수정(슬라이드 추가/제거)할 때마다 스위퍼가 업데이트(초기화)된다 */
  observer: true, // 변경 감지
  observeParents: true,

  initialSlide: 2, // 시작 슬라이드 변경
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 4000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  speed: 1000,
  loop: true,
  effect: "coverflow",

  spaceBetween: 20,
  centeredSlides: true, //센터모드

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
