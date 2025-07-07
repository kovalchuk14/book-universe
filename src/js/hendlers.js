import { refs } from "./refs";
import { clearBookList, renderBookListByCategory, updateBookCounter, openModal, closeModal, renderModalBook, } from "./render-function";
import { getBooksListByCategory, getBookById } from "./api";
import { STORAGE_KEYS } from "./constants";
import Accordion from "accordion-js";

export function switchBookCategories() {
    if (refs.book_category_list.style.display === 'block') {
        refs.book_category_list.style.display = 'none';
    } else {
        refs.book_category_list.style.display = 'block';
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
    refs.book_menu_text.textContent = event.target.textContent;
    clearBookList();
    let books = await getBooksListByCategory(event.target.textContent);
    STORAGE_KEYS.current_books_count = books.length;
    updateBookCounter();
    renderBookListByCategory(books);
    if (window.innerWidth < 1440) switchBookCategories();
}

export function buyBook() {
    console.log("THANK YOU SO MUCH");
}

export function addToCartBook() {
    console.log("THANK YOU SO MUCH");
}

export async function openBook(event) {
    if (!event.target.classList.contains("book-btn")) return;
    let book = await getBookById(event.target.closest("li").dataset.id);
    renderModalBook(book);
    new Accordion(".accordion-container", {
        showMultiple: true,
    });
    refs.modal_book_buy_button.addEventListener("click", () => {
        console.log("1");
    });
    refs.modal_book_add_card_button.addEventListener("click", addToCartBook);
    openModal();
    document.body.style.overflow = 'hidden';
}

export function closeBook() {
    refs.modal_book_buy_button.removeEventListener("submit", buyBook);
    refs.modal_book_add_card_button.removeEventListener("click", addToCartBook);
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


