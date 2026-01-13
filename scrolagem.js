window.addEventListener("scroll", function () {
  const iconwwp = document.querySelector(".iconewwp ");

  if (window.scrollY > 0 && window.scrollY < 150) {
    iconwwp.style.opacity = "0";
  } else if (window.scrollY >= 150) {
    iconwwp.style.opacity = "1";
  }
});
