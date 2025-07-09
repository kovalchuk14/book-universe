import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';


// Захоплюємо кнопки та елементи
const prevBtn     = document.getElementById('PrevSlide');
const nextBtn     = document.getElementById('NextSlide');
const scrollBtns  = document.querySelectorAll('.hero-btn');

// Ініціалізуємо Swiper 
const swiper = new Swiper('.hero-slider', {
  modules: [ Navigation, Keyboard ],
  slidesPerView: 1,
  spaceBetween: 24,
  loop: false,
  navigation: {
    prevEl: prevBtn,
    nextEl: nextBtn,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  }
});

// Функція оновлення стану кнопок
function updateNavState() {
  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}

// Вислуховуємо події Swiper
swiper.on('init',           updateNavState);
swiper.on('slideChange',    updateNavState);
swiper.on('reachBeginning', updateNavState);
swiper.on('reachEnd',       updateNavState);

// Примусово оновлюємо стан одразу після ініціалізації
updateNavState();

// Плавний скрол для кнопки 'Shop Now!'
scrollBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(btn.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});