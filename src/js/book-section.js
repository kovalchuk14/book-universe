import { getBooksCategoriesList, getBooksList, getBooksListByCategory } from "./api";
import { renderBookCategoriesList, renderBookList, updateBookCounter } from "./render-function";
import { refs } from "./refs";
import { switchBookCategories, chooseBookCategory } from "./hendlers";
import { STORAGE_KEYS } from "./constants";


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
