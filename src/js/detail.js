document.addEventListener("DOMContentLoaded", function () {
  /** 상품 더보기 버튼 */
  moreBtn.addEventListener("mouseover", () => {
    moreBtn.style.backgroundColor = "white";
    moreBtn.style.color = "black";
  });

  moreBtn.addEventListener("mouseout", () => {
    moreBtn.style.background = "none";
    moreBtn.style.color = "white";
  });

  moreBtn.addEventListener("click", () => {
    location.href = "https://www.dotorisup.com/category/435475";
  });
});
