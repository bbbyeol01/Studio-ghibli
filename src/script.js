document.addEventListener("DOMContentLoaded", function () {
  const imgContainer = document.querySelector(".imgContainer");
  const changeBtnLeft = document.querySelector(".changeBtn-left");
  const changeBtnRight = document.querySelector(".changeBtn-right");

  const titleContainer = document.querySelector(".titleContainer");

  const dots = document.querySelectorAll(".dot"); // 페이지네이션 도트 선택

  const logo = document.querySelector(".logo");

  const logos = document.querySelectorAll(".titleImg");
  const buttons = document.querySelectorAll(".goDetail");

  const progressbars = document.querySelectorAll(".progressDot");

  const introduceContainer = document.querySelector(".introduceContainer");
  const bestSceneContainer = document.querySelector(".bestSceneContainer");

  const goTop = document.querySelector(".goTop");
  const goTopImg = document.querySelector(".goTopImg");

  const bannerImgs = document.querySelectorAll(".bannerImg");

  const titles = document.querySelectorAll(".title");

  const newsList = document.querySelectorAll(".news-list");

  const newsItems = document.querySelectorAll(".news-item");

  goTop.addEventListener("mouseover", function () {
    goTop.style.backgroundColor = "white";
    goTopImg.src = "../images/icon/iconmonstr-angel-up-thin-240-black.png";
  });

  goTop.addEventListener("mouseout", function () {
    goTop.style.backgroundColor = "transparent";
    goTopImg.src = "../images/icon/iconmonstr-angel-up-thin-240.png";
  });

  goTop.addEventListener("click", function () {
    // location.href = "#";
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 옵션
    });
  });

  /** 자세히 보기  */
  buttons.forEach((e) => {
    e.addEventListener("click", function () {
      location.href = "detail.html";
    });
  });

  /** 로고 누르면 홈으로  */
  logo.addEventListener("click", function () {
    location.href = "index.html";
  });

  /** 스크롤 내렸을 때 지브리 소개 애니메이션 적용 => IntersectionObserver로 변경 */
  // document.addEventListener("scroll", function () {
  //   const introducePosition = introduceContainer.getBoundingClientRect();

  //   // Viewport 안에 요소가 들어왔는지 확인
  //   if (
  //     introducePosition.top + 100 < window.innerHeight &&
  //     introducePosition.bottom >= 0
  //   ) {
  //     introduceContainer.classList.add(
  //       "animate__animated",
  //       "animate__fadeInRight"
  //     );
  //   } else {
  //     introduceContainer.classList.remove("animate__fadeInRight");
  //     introduceContainer.classList.add("animate__animated");
  //   }
  // });

  // const isb = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         // 요소가 화면에 보이면
  //         entry.target.classList.add("animate");
  //       } else {
  //         entry.target.classList.remove("animate");
  //       }
  //     });
  //   },
  //   {
  //     threshold: 0.1, // 요소가 10% 이상 보일 때 트리거
  //   }
  // );

  // bannerImgs.forEach((img) => isb.observe(img));

  /** 스크롤 내렸을 때 지브리 소개 애니메이션 적용 */
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animate__fadeInRight");
      } else {
        entry.target.classList.remove("animate__fadeInRight");
      }
    });
  });

  intersectionObserver.observe(introduceContainer);

  const isb = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("animate__slideOutRight");
        entry.target.classList.add("animate__slideInLeft");
      } else {
        entry.target.classList.remove("animate__slideInLeft");
        entry.target.classList.add("animate__slideOutRight");
      }
    });
  });

  titles.forEach((title) => {
    isb.observe(title);
  });

  newsItems.forEach((item) => {
    isb.observe(item);
  });

  // isb.observe(newsList);

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
});
