const hamburgerBtn = document.querySelector(".btn");
const navHamburger = document.querySelector(".hamburger-nav");
const backToTopBtn = document.querySelector("#back-top");

hamburgerBtn.addEventListener("click", () => {
  navHamburger.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
})
