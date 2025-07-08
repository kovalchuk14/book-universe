import { getBooksCategoriesList, getBooksList, getBooksListByCategory } from "./api";
import { renderBookCategoriesList, renderBookList, updateBookCounter } from "./render-function";
import { refs } from "./refs";
import { switchBookCategories, chooseBookCategory, openBook, closeBook, showMoreBooks, } from "./hendlers";
import { STORAGE_KEYS } from "./constants";
import "accordion-js/dist/accordion.min.css";
import "izitoast/dist/css/iziToast.min.css";


async function initCategoryList() {
    let list = await getBooksCategoriesList();
    list = list.filter(item => item.list_name?.trim());
    list.unshift({ list_name: "All categories" });
    renderBookCategoriesList(list);
}

async function initBooks() {
    let books = await getBooksList();
    STORAGE_KEYS.book_list = books.flatMap(category => category.books);
    renderBookList(STORAGE_KEYS.book_list, 0, (window.innerWidth <= 767) ? 10 : 24);
    STORAGE_KEYS.current_books_count = Math.min(STORAGE_KEYS.book_list.length, (window.innerWidth <= 767) ? 10 : 24);
    STORAGE_KEYS.max_books_count = STORAGE_KEYS.book_list.length;
    updateBookCounter();
}


initBooks();
initCategoryList();
refs.book_category_button.addEventListener("click", switchBookCategories);
refs.book_category_list.addEventListener("click", chooseBookCategory);
refs.books_list.addEventListener("click", openBook);
refs.modal_book_close_button.addEventListener("click", closeBook);
refs.book_show_more_button.addEventListener("click", showMoreBooks);
