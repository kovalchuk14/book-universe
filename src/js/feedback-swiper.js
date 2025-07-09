import Swiper from "swiper";
import { Navigation, Keyboard, A11y } from "swiper/modules";

export function initFeedbackSwiper() {
  const controlButtons = document.querySelectorAll(".control-btn");

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
        updateControlButtons(swiperInstance);
      },
      afterInit(swiperInstance) {
        updateButtonState(swiperInstance);
        updateControlButtons(swiperInstance);
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
    controlButtons.forEach((btn, index) => {
      btn.classList.toggle("active", index === swiperInstance.realIndex);
    });
  }

  // додати події кліку на маленькі кнопки
  controlButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = parseInt(button.getAttribute("data-index"), 10);
      swiper.slideTo(index);
    });
  });

  // додати події для Prev/Next з оновленням кнопок
  const btnPrev = document.getElementById("feedbackPrev");
  const btnNext = document.getElementById("feedbackNext");

  btnPrev.addEventListener("click", () => {
    swiper.slidePrev();
    btnPrev.blur();
  });

  btnNext.addEventListener("click", () => {
    swiper.slideNext();
    btnNext.blur();
  });

  return swiper;
}
