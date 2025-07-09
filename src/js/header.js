document.addEventListener("DOMContentLoaded", () => {
  const openMenuBtn = document.getElementById("open-menu");
  const closeMenuBtn = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  // Відкрити меню
  openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.classList.add("lock-scroll");
  });

  // Закрити меню
  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("lock-scroll");
  });

  // Навігація по якірних посиланнях і закриття меню
  mobileLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // Закриваємо меню в будь-якому випадку
      mobileMenu.classList.remove("open");
      document.body.classList.remove("lock-scroll");

      // Якщо знайдено секцію — плавно скролимо
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      } else {
        // Якщо ні — просто змінюємо хеш у адресі
        window.location.hash = targetId;
      }
    });
  });
});
