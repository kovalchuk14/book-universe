import { refs } from "./refs";
import { clearBookList, renderBookListByCategory, updateBookCounter } from "./render-function";
import { getBooksListByCategory } from "./api";
import { STORAGE_KEYS } from "./constants";

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