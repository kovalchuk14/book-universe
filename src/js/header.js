document.addEventListener("DOMContentLoaded", () => {
  const openMenuBtn = document.getElementById("open-menu");
  const closeMenuBtn = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.classList.add("lock-scroll");
  });

  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("lock-scroll");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("lock-scroll");
    });
  });
});