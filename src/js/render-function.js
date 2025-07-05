import { refs } from "./refs"
import { STORAGE_KEYS } from "./constants";

export function renderBookCategoriesList(list) {
    const content = list.map((category) => {
        return `
        <li class="book-category">${category.list_name}</li>
        `
    }).join("");
    refs.book_category_list.insertAdjacentHTML("beforeend", content);
}

export function renderBookList(list) {
    // const content
    let content = "";
    for (let i = 0, j = 0, k = 0; i < STORAGE_KEYS.current_books_count; i++) {
        let book = list[j].books[k];
        content += `
            <li class="book-card" data-id=${book._id}>
                <img src="${book.book_image}" alt="${book.description}" class="book-img">
                <div class="book-info">
                    <div>
                        <div class="book-title">${book.title}</div>
                        <div class="book-author">${book.author}</div>
                    </div>
                    <div class="book-price">${book.price}$</div>
                </div>
                <button class="main-btn book-btn">Learn More</button>
            </li>
        `;
        k++;
        if (k == list[j].books.length) {
            k = 0;
            j++;
        }
        if (j == list.length) break;
    }
    refs.books_list.insertAdjacentHTML("beforeend", content);
}


export function renderBookListByCategory(list) {
    const content = list.map((book) => {
        return `
        <li class="book-card" data-id=${book._id}>
            <img src="${book.book_image}" alt="${book.description}" class="book-img">
            <div class="book-info">
                <div>
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                </div>
                <div class="book-price">${book.price}$</div>
            </div>
            <button class="main-btn  book-btn">Learn More</button>
        </li>
    `
    }).join("");
    refs.books_list.insertAdjacentHTML("beforeend", content);
}

export function updateBookCounter() {
    refs.book_counter.textContent = `Showing ${STORAGE_KEYS.current_books_count} of 100`;
}

export function clearBookList() {
    refs.books_list.innerHTML = "";
}