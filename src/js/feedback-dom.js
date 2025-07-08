import { feedbacks } from "./feedback-data.js";

export function renderFeedbacks() {
  const swiperWrapper = document.querySelector(".feedbackSwiper .swiper-wrapper");

  feedbacks.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("swiper-slide");

    li.innerHTML = `
      <div class="feedback-card">
        <p class="comment">${item.text}</p>
        <div class="client-info">
          <img src="./${item.avatar}" alt="${item.alt}">
          <div class="client-text">
            <h3>${item.author}</h3>
            <p class="client-title">${item.title}</p>
          </div>
        </div>
      </div>
    `;

    swiperWrapper.appendChild(li);
  });
}