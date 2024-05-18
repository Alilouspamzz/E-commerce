window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("scrolDown");
  } else {
    nav.classList.remove("scrolDown");
  }
});
