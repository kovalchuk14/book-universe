import { refs } from "./refs";
import { clearBookList, updateBookCounter, openModal, closeModal, renderModalBook, renderBookList, updateShowButton } from "./render-function";
import { getBooksListByCategory, getBookById } from "./api";
import { STORAGE_KEYS } from "./constants";
import Accordion from "accordion-js";
import iziToast from "izitoast";
import spritePath from "/img/sprite.svg";

export function switchBookCategories() {
    if (refs.book_category_list_wrap.style.display === 'block') {
        refs.book_category_list_wrap.style.display = 'none';
    } else {
        refs.book_category_list_wrap.style.display = 'block';
    }
}

export async function chooseBookCategory(event) {
    if (!event.target.classList.contains("book-category")) {
        return;
    }
    event.stopPropagation();
    if (event.target.textContent == refs.book_menu_text.textContent.trim()) {
        return;
    }
    document.querySelectorAll(".book-category").forEach(el => {
        el.style.color = "var(--main-color)";
      });   
    event.target.style.color = "var(--strong-orange)";
    refs.book_menu_text.textContent = event.target.textContent;
    if (event.target.textContent == "All categories") {
        STORAGE_KEYS.current_books_category_is_all = true;
    } else {
        STORAGE_KEYS.current_books_category_is_all = false;
    }

    clearBookList();
    STORAGE_KEYS.current_books_count = (window.innerWidth <= 767) ? 10 : 24;
    if (STORAGE_KEYS.current_books_category_is_all) {
        renderBookList(STORAGE_KEYS.book_list, 0, STORAGE_KEYS.current_books_count);
        STORAGE_KEYS.current_books_count = Math.min(STORAGE_KEYS.book_list.length, (window.innerWidth <= 767) ? 10 : 24);
        STORAGE_KEYS.max_books_count = STORAGE_KEYS.book_list.length;
    } else {
        STORAGE_KEYS.book_list_with_category = await getBooksListByCategory(event.target.textContent);
        STORAGE_KEYS.current_books_count = Math.min(STORAGE_KEYS.book_list_with_category.length, (window.innerWidth <= 767) ? 10 : 24);
        renderBookList(STORAGE_KEYS.book_list_with_category, 0, STORAGE_KEYS.current_books_count);
        STORAGE_KEYS.max_books_count = STORAGE_KEYS.book_list_with_category.length;
    }
    updateBookCounter();
    updateShowButton();
    if (window.innerWidth < 1440) switchBookCategories();
}

export function buyBook() {
    iziToast.success({
        title: 'NICEEE',
        message: 'Successfully paid from your card',
    });
}

export function addToCartBook() {

    console.log("Item added: " + document.querySelector(".modal-book-counter").textContent + "0 times, good luck");
}

export async function openBook(event) {
    if (!event.target.classList.contains("book-btn")) return;
    let book = await getBookById(event.target.closest("li").dataset.id);
    renderModalBook(book);
    new Accordion(".accordion-container", {
        showMultiple: true,
    });

    initButtons();
    openModal();
    document.body.style.overflow = 'hidden';
}

function initButtons() {
    document.querySelector(".modal-book-buy-button").addEventListener("click", buyBook);
    document.querySelector(".modal-book-cart-button").addEventListener("click", addToCartBook);
    document.querySelector(".button-increase").addEventListener("click", increaseModalBook);
    document.querySelector(".button-decrease").addEventListener("click", decreaseModalBook);
    document.querySelectorAll('.ac-trigger').forEach(trigger => {
        trigger.addEventListener("click", switchBookIcon);
    });
}

function deleteButtons() {
    document.querySelector(".modal-book-buy-button").removeEventListener("click", buyBook);
    document.querySelector(".modal-book-cart-button").removeEventListener("click", addToCartBook);
    document.querySelector(".button-increase").removeEventListener("click", increaseModalBook);
    document.querySelector(".button-decrease").removeEventListener("click", decreaseModalBook);
    document.querySelectorAll('.ac-trigger').forEach(trigger => {
        trigger.removeEventListener("click", switchBookIcon);
    });
}

function switchBookIcon(event) {
    if (event.target.closest('.ac').classList.contains('is-active')) {
        event.target.querySelector("use").setAttribute('href', `${spritePath}#icon-up-type-one`);
    } else {
        event.target.querySelector("use").setAttribute('href', `${spritePath}#icon-down-type-one`);
    }
}

function increaseModalBook() {
    document.querySelector(".modal-book-counter").textContent = Number(document.querySelector(".modal-book-counter").textContent) + 1;
}

function decreaseModalBook() {
    document.querySelector(".modal-book-counter").textContent = Math.max((Number(document.querySelector(".modal-book-counter").textContent) - 1), 1);
}

export function closeBook() {
    deleteButtons();
    closeModal();
}

refs.modal_book.addEventListener('click', e => {
    if (e.target === refs.modal_book) {
        closeModal();
    }
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
    }
});


export function showMoreBooks() {
    if (STORAGE_KEYS.current_books_category_is_all) {
        renderBookList(STORAGE_KEYS.book_list, STORAGE_KEYS.current_books_count, STORAGE_KEYS.current_books_count + Math.min(4, STORAGE_KEYS.max_books_count - STORAGE_KEYS.current_books_count));
    } else {
        renderBookList(STORAGE_KEYS.book_list_with_category, STORAGE_KEYS.current_books_count, STORAGE_KEYS.current_books_count + Math.min(4, STORAGE_KEYS.max_books_count - STORAGE_KEYS.current_books_count));
    }
    STORAGE_KEYS.current_books_count += Math.min(4, STORAGE_KEYS.max_books_count - STORAGE_KEYS.current_books_count);
    updateBookCounter();
    updateShowButton();
}



