export function initMobileMenu() {
  const burger = document.querySelector(".header__menu-toggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.querySelector(".mobile-menu__close");
  const navLinks = document.querySelectorAll(".header__nav-list a");

  if (!burger || !mobileMenu || !closeBtn) return;

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.classList.add("no-scroll");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("no-scroll");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  });
}
