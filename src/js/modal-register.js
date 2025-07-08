document.addEventListener('DOMContentLoaded', () => {
  const openModalBtns = document.querySelectorAll('.events-btn');
  const backdrop = document.getElementById('contact-modal-backdrop');
  const closeModalBtn = document.getElementById('contact-close-modal-btn');
  const eventTitleEl = document.getElementById('contact-event-title');
  const form = document.getElementById('contact-register-form');
  const inputs = form.querySelectorAll('input, textarea');

  let scrollPosition = 0; // змінна для збереження позиції

  // Відкриття модалки з передачею назви події
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const eventName = e.currentTarget.dataset.event;
      eventTitleEl.textContent = eventName;
      backdrop.classList.add('is-visible');

      // зберігаємо позицію і фіксуємо body
      scrollPosition = window.pageYOffset;
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
      document.body.style.top = `-${scrollPosition}px`;
    });
  });

  // Закриття модалки кнопкою
  closeModalBtn.addEventListener('click', closeModal);

  // Закриття модалки по кліку на бекдроп
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  // Закриття по Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-visible')) {
      closeModal();
    }
  });

  function closeModal() {
    backdrop.classList.remove('is-visible');

    // повертаємо позицію body
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollPosition);

    form.reset();

    // Очистити помилки
    inputs.forEach(input => {
      input.classList.remove('error');
      const errorText = input.nextElementSibling;
      if (errorText && errorText.classList.contains('error-text')) {
        errorText.style.display = 'none';
      }
    });
  }

  form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    let isValid = true;

    inputs.forEach(input => {
      const errorText = input.nextElementSibling;
      const value = input.value.trim();
      let inputValid = true;

      if (input.name === 'name') {
        if (value === '') {
          inputValid = false;
          errorText.textContent = 'Please enter your name';
        } else if (/\d/.test(value)) {
          inputValid = false;
          errorText.textContent = 'Name cannot contain numbers';
        } else if (value.length > 50) {
          inputValid = false;
          errorText.textContent = 'Name must be up to 50 characters';
        }
      }

      if (input.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        inputValid = false;
        errorText.textContent = 'Please enter a valid email';
      }

      if (!inputValid) {
        input.classList.add('error');
        isValid = false;
        errorText.style.display = 'block';
      } else {
        input.classList.remove('error');
        errorText.style.display = 'none';
      }
    });

    if (isValid) {
      console.log('Форма валідна!');
      form.reset();
      closeModal();
    }
  }
});