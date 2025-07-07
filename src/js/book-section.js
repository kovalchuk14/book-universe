import { getBooksCategoriesList, getBooksList, getBooksListByCategory } from "./api";
import { renderBookCategoriesList, renderBookList, updateBookCounter } from "./render-function";
import { refs } from "./refs";
import { switchBookCategories, chooseBookCategory, openBook, closeBook, buyBook, addToCartBook } from "./hendlers";
import { STORAGE_KEYS } from "./constants";
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


async function initCategoryList() {
    let list = await getBooksCategoriesList();
    list.unshift({ list_name: "ALL" });
    renderBookCategoriesList(list);
}

async function initBooks() {
    let books = await getBooksList();
    if (window.innerWidth <= 767) {
        STORAGE_KEYS.current_books_count = 10;
    } else {
        STORAGE_KEYS.current_books_count = 24;
    }
    updateBookCounter();
    renderBookList(books);
}


initBooks();
initCategoryList();
refs.book_category_button.addEventListener("click", switchBookCategories);
refs.book_category_list.addEventListener("click", chooseBookCategory);
refs.books_list.addEventListener("click", openBook);
refs.modal_book_close_button.addEventListener("click", closeBook);
