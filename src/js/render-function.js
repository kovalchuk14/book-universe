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

export function renderBookList(list, from, to) {
    // const content
    let content = "";
    for (let i = from; i < to; i++) {
        let book = list[i];
        content += `
            <li class="book-card" data-id=${book._id}>
                <img src="${book.book_image}" alt="${book.title}" class="book-img">
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
    }
    refs.books_list.insertAdjacentHTML("beforeend", content);
}


export function updateBookCounter() {
    refs.book_counter.textContent = `Showing ${STORAGE_KEYS.current_books_count} of ${STORAGE_KEYS.max_books_count}`;
}

export function clearBookList() {
    refs.books_list.innerHTML = "";
}

export function openModal() {
    refs.modal_book.classList.add("modal--is-open");
}

export function closeModal() {
    refs.modal_book.classList.remove("modal--is-open");
    document.body.style.overflow = '';
}

export function renderModalBook(book) {
    refs.modal_book_info.innerHTML = `
        <img src="${book.book_image}" alt="${book.title}" class="modal-book-img"">
            <div>
                <div class="modal-book-title">${book.title}</div>
                <div class="modal-book-author">${book.author}</div>
                <div class="modal-book-price">$${book.price}</div>
                <div class="modal-book-counter-container">
                    <button type="button" class="modal-book-counter-button button-decrease">-</button>
                    <div class="modal-book-counter">1</div>
                    <button type="button" class="modal-book-counter-button button-increase">+</button>
                </div>
                <div class="modal-book-button-container">
                    <button class="modal-btn modal-book-cart-button" type="button">Add to Cart</button>
                    <button class="main-btn modal-book-buy-button" type="submit">Buy Now</button>
                </div>
                <div class="accordion-container modal-book-accordion-container">
                    <div class="ac">
                        <h3 class="ac-header">
                            <button type="button" class="ac-trigger">Details
                            <svg class="accordion-icon" width="24" height="24">
                            <use xlink:href="/img/sprite.svg#icon-down-type-one"></use>
                            </svg>
                            </button>
                        </h3>
                        <div class="ac-panel">
                            <p class="ac-text">${book.description}</p>
                        </div>
                    </div>

                    <div class="ac">
                        <h3 class="ac-header">
                            <button type="button" class="ac-trigger">Shipping
                            <svg class="accordion-icon" width="24" height="24">
                            <use xlink:href="/img/sprite.svg#icon-down-type-one"></use>
                            </svg>
                            </button>
                        </h3>
                        <div class="ac-panel">
                            <p class="ac-text">
                                We ship across the United States within 2–5 business days.
                                All orders are processed through USPS or a reliable courier 
                                service. Enjoy free standard shipping on orders over $50.
                            </p>
                        </div>
                    </div>

                    <div class="ac">
                        <h3 class="ac-header">
                            <button type="button" class="ac-trigger">Returns
                            <svg class="accordion-icon" width="24" height="24">
                            <use xlink:href="/img/sprite.svg#icon-down-type-one"></use>
                            </svg>
                            </button>
                        </h3>
                        <div class="ac-panel">
                            <p class="ac-text">
                                You can return an item within 14 days of receiving your order, 
                                provided it hasn’t been used and is in its original condition. 
                                To start a return, please contact our support team — we’ll guide 
                                you through the process quickly and hassle-free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    `;
}

export function updateShowButton() {
    if (refs.book_show_more_button.style.display == "none") {
        refs.book_show_more_button.style.display = "block";
    }
    if (STORAGE_KEYS.current_books_count == STORAGE_KEYS.max_books_count) {
        refs.book_show_more_button.style.display = "none";
    }
}