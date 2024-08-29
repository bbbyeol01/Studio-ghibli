document.addEventListener("DOMContentLoaded", function () {
  const imgContainer = document.querySelector(".imgContainer");
  const titleContainer = document.querySelector(".titleContainer");
  const dots = document.querySelectorAll(".dot"); // 페이지네이션 도트 선택
  const progressbars = document.querySelectorAll(".progressDot");
  const introduceContainer = document.querySelector(".introduceContainer");

  const changeBtnLeft = document.querySelector(".changeBtn-left");
  const changeBtnRight = document.querySelector(".changeBtn-right");

  const logos = document.querySelectorAll(".titleImg");
  const buttons = document.querySelectorAll(".goDetail");

  const bannerImgs = document.querySelectorAll(".bannerImg");

  /** 자세히 보기  */
  buttons.forEach((e) => {
    e.addEventListener("click", function () {
      location.href = "detail.html";
    });
  });

  /** 스크롤 내렸을 때 지브리 소개 애니메이션 적용 */
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // entry.target.classList.add("animate__fadeIn");
        entry.target.style.opacity = 1;
      }
    });
  });

  intersectionObserver.observe(introduceContainer);

  setTimeout(() => {
    logos[0].classList.remove("animate__fadeInUp");
    buttons[0].classList.remove("animate__fadeInUp");
  }, 1000); // 애니메이션 지속 시간 (1초) 이후 제거

  // 다음 배너 버튼 클릭
  changeBtnRight.addEventListener("click", function () {
    resetInterval();
    changeImgRight();
  });

  // 이전 배너 버튼 클릭
  changeBtnLeft.addEventListener("click", function () {
    resetInterval();
    changeImgLeft();
  });

  // 인터벌 함수 변수
  let slideInterval = setInterval(changeImgRight, 6000);

  /** 페이지네이션 도트 업데이트 */
  function updateDots(activeIndex) {
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  /** 페이지네이션 active 도트 진행바 */
  function updateProgressbar(activeIndex) {
    progressbars.forEach((progressbar, index) => {
      if (index === activeIndex) {
        progressbar.classList.add("start");
      } else {
        progressbar.classList.remove("start");
      }
    });
  }

  /** 인터벌 리셋 */
  function resetInterval() {
    // 현재 실행 중인 setInterval을 중지
    clearInterval(slideInterval);
    // 새로운 setInterval을 설정
    slideInterval = setInterval(changeImgRight, 6000);
  } //resetInterval

  // 현재 이미지 슬라이드 위치
  let currentIndex = 0;
  const bannerLength = bannerImgs.length;

  /** 배너 이미지 다음으로 넘김 */
  function changeImgRight() {
    currentIndex++;

    // 마지막 슬라이드면 처음 슬라이드로 돌아감
    if (currentIndex >= bannerLength) {
      currentIndex = 0;
    }
    imgContainer.style.transform = "translate(" + -currentIndex * 100 + "vw)";
    titleContainer.style.transform = "translate(" + -currentIndex * 100 + "vw)";
    updateDots(currentIndex); // 첫 번째 도트 활성화
    updateProgressbar(currentIndex);

    // 현재 슬라이드의 로고에 애니메이션 클래스 추가
    logos[currentIndex].classList.add("animate__fadeInUp");
    buttons[currentIndex].classList.add("animate__fadeInUp");

    // 일정 시간 후 애니메이션 클래스 제거
    setTimeout(() => {
      logos[currentIndex].classList.remove("animate__fadeInUp");
      buttons[currentIndex].classList.remove("animate__fadeInUp");
    }, 1000); // 애니메이션 지속 시간 (1초) 이후 제거
  } //changeImgRight

  /** 배너 이미지 이전으로 넘김 */
  function changeImgLeft() {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = bannerLength - 1;
    }

    imgContainer.style.transform = "translate(" + -currentIndex * 100 + "vw)";
    titleContainer.style.transform = "translate(" + -currentIndex * 100 + "vw)";
    updateDots(currentIndex); // 첫 번째 도트 활성화
    updateProgressbar(currentIndex);

    // 현재 슬라이드의 로고에 애니메이션 클래스 추가
    logos[currentIndex].classList.add("animate__fadeInUp");
    buttons[currentIndex].classList.add("animate__fadeInUp");

    // 일정 시간 후 애니메이션 클래스 제거
    setTimeout(() => {
      logos[currentIndex].classList.remove("animate__fadeInUp");
      buttons[currentIndex].classList.remove("animate__fadeInUp");
    }, 1000); // 애니메이션 지속 시간 (1초) 이후 제거
  } //changeImgRight
});
