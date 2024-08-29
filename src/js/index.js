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
      // else {
      //   entry.target.classList.remove("animate__fadeInRight");
      // }
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
  let currentTranslate = 0;

  /** 배너 이미지 다음으로 넘김 */
  function changeImgRight() {
    let currentTransform = imgContainer.style.transform;

    const regex = /translate\((-?\d+)\s*vw\)/;
    const match = regex.exec(currentTransform);

    if (match) {
      currentTranslate = match[1];
    }

    // 마지막 슬라이드면 처음 슬라이드로 돌아감
    if (currentTranslate < -300) {
      imgContainer.style.transform = `translate(0vw)`;
      titleContainer.style.transform = `translate(0vw)`;
      updateDots(0); // 첫 번째 도트 활성화
      updateProgressbar(0);
    } else {
      imgContainer.style.transform = `translate(${currentTranslate - 100}vw)`;
      titleContainer.style.transform = `translate(${currentTranslate - 100}vw)
      `;
      updateDots((currentTranslate - 100) / -100); // 현재 슬라이드에 맞게 도트 업데이트
      updateProgressbar((currentTranslate - 100) / -100);
    }

    // 현재 슬라이드의 로고에 애니메이션 클래스 추가
    logos[(currentTranslate - 100) / -100].classList.add("animate__fadeInUp");
    buttons[(currentTranslate - 100) / -100].classList.add("animate__fadeInUp");

    // 일정 시간 후 애니메이션 클래스 제거
    setTimeout(() => {
      logos[(currentTranslate - 100) / -100].classList.remove(
        "animate__fadeInUp"
      );
      buttons[(currentTranslate - 100) / -100].classList.remove(
        "animate__fadeInUp"
      );
    }, 1000); // 애니메이션 지속 시간 (1초) 이후 제거
  } //changeImgRight

  /** 배너 이미지 이전으로 넘김 */
  function changeImgLeft() {
    let currentTransform = imgContainer.style.transform;

    const regex = /translate\((-?\d+)\s*vw\)/;
    const match = regex.exec(currentTransform);

    // let currentTranslate = 0;

    // 현재 위치 구하기(가로축))
    if (match) {
      currentTranslate = match[1];
    }

    console.log(currentTranslate);

    if (currentTranslate == 0) {
      imgContainer.style.transform = `translate(-400vw)`;
      titleContainer.style.transform = `translate(-400vw)`;
      updateDots(4); // 마지막 도트 활성화
      updateProgressbar(4);
    } else {
      imgContainer.style.transform = `translate(${
        parseInt(currentTranslate) + 100
      }vw)`;
      titleContainer.style.transform = `translate(${
        parseInt(currentTranslate) + 100
      }vw)`;
      updateDots(parseInt(currentTranslate) / -100 - 1); // 현재 슬라이드에 맞게 도트 업데이트
      updateProgressbar(parseInt(currentTranslate) / -100 - 1); // 현재 슬라이드에 맞게 도트 업데이트
    }

    // 현재 슬라이드의 로고에 애니메이션 추가
    logos[parseInt(currentTranslate) / -100 - 1].classList.add(
      "animate__fadeInUp"
    );
    buttons[parseInt(currentTranslate) / -100 - 1].classList.add(
      "animate__fadeInUp"
    );
    // logos[1].classList.add("animate__animated");

    // 일정 시간 후 애니메이션 제거(제거 안하면 한바퀴 돌았을 때 애니메이션 동작 안함)
    setTimeout(() => {
      logos[parseInt(currentTranslate) / -100 - 1].classList.remove(
        "animate__fadeInUp"
      );
      buttons[parseInt(currentTranslate) / -100 - 1].classList.remove(
        "animate__fadeInUp"
      );
    }, 1000); // 애니메이션 지속 시간 (1초) 이후 제거
  } // changeImgLeft
});
