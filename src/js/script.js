document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");

  const goTop = document.querySelector(".goTop");
  const goTopImg = document.querySelector(".goTopImg");

  const titles = document.querySelectorAll(".title");
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

  /** 로고 누르면 홈으로  */
  logo.addEventListener("click", function () {
    location.href = "index.html";
  });

  const isb = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  });

  titles.forEach((title) => {
    isb.observe(title);
  });

  newsItems.forEach((item) => {
    isb.observe(item);
  });
});
