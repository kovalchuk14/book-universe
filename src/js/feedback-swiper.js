import Swiper from "swiper";
import { Navigation, Keyboard, A11y } from "swiper/modules";

export function initFeedbackSwiper() {
  const swiper = new Swiper(".feedbackSwiper", {
    modules: [Navigation, Keyboard, A11y],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: false,
    navigation: {
      nextEl: "#feedbackNext",
      prevEl: "#feedbackPrev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
    on: {
      slideChange(swiperInstance) {
        updateButtonState(swiperInstance);
      },
      afterInit(swiperInstance) {
        updateButtonState(swiperInstance);
      },
    },
  });

  function updateButtonState(swiperInstance) {
    const btnPrev = document.getElementById("feedbackPrev");
    const btnNext = document.getElementById("feedbackNext");

    btnPrev.disabled = swiperInstance.isBeginning;
    btnNext.disabled = swiperInstance.isEnd;
  }

  function updateControlButtons(swiperInstance) {
    const controlButtons = document.querySelectorAll(".control-btn");
    controlButtons.forEach((btn, index) => {
      btn.classList.toggle("active", index === swiperInstance.activeIndex);
    });
  }

  // навішування обробників на кнопки
  const controlButtons = document.querySelectorAll(".control-btn");
  controlButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = parseInt(button.getAttribute("data-index"), 10);
      swiper.slideTo(index);
    });
  });

  return swiper;
}