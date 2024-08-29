document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");

  const goTop = document.querySelector(".goTop");
  const goTopImg = document.querySelector(".goTopImg");

  const titles = document.querySelectorAll(".title");
  const newsItems = document.querySelectorAll(".news-item");

 

  const searchInput = document.querySelector(".search");

  const aboutBtn = document.querySelector(".about");

  const contactBtn = document.querySelector(".contact");

  /** 검색하면 구글로 검색 */
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const query = searchInput.value.trim(); // 공백 제거
      if (query !== "") {
        // 검색어가 비어있지 않을 때만 검색
        googleSearch(query);
      }
    }
  });

  function googleSearch(query) {
    // 구글 검색 url
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    location.href = googleSearchUrl;
  }

  /** 맨 위로 가기 */
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

  /** 맨 아래로(footer) */
  aboutBtn.addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });

  contactBtn.addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
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
