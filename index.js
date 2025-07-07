import{a as l,A as v,i as w}from"./assets/vendor-BOUMGWLJ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function c(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=c(n);fetch(n.href,s)}})();const u=["https://books-backend.p.goit.global/books/category-list","https://books-backend.p.goit.global/books/top-books","https://books-backend.p.goit.global/books/category?category=","https://books-backend.p.goit.global/books/"];async function L(){return(await l.get(u[0])).data}async function S(){return(await l.get(u[1])).data}async function x(o){return(await l.get(u[2]+o)).data}async function q(o){return(await l.get(u[3]+o)).data}const e={book_category_list:document.querySelector(".book-categories-list"),book_category_list_wrap:document.querySelector(".book-categories-list-wrapper"),book_category_button:document.querySelector(".book-categories-list-container"),book_menu_text:document.querySelector(".book-select-menu"),books_list:document.querySelector(".book-list"),book_counter:document.querySelector(".book-counter"),book_show_more_button:document.querySelector(".book-button-show-more"),modal_book:document.querySelector(".modal-book"),modal_book_close_button:document.querySelector(".modal-book-close-button"),modal_book_info:document.querySelector(".modal-book-full-info"),modal_book_buy_button:document.querySelector(".modal-book-buy-button"),modal_book_add_card_button:document.querySelector(".modal-book-cart-button")},t={current_books_count:0,max_books_count:0,current_books_category_is_all:!0,book_list:[],book_list_with_category:[],books_per_page:4};function E(o){const r=o.map(c=>`
        <li class="book-category">${c.list_name}</li>
        `).join("");e.book_category_list.insertAdjacentHTML("beforeend",r)}function a(o,r,c){let i="";for(let n=r;n<c;n++){let s=o[n];i+=`
            <li class="book-card" data-id=${s._id}>
                <img src="${s.book_image}" alt="${s.title}" class="book-img">
                <div class="book-info">
                    <div>
                        <div class="book-title">${s.title}</div>
                        <div class="book-author">${s.author}</div>
                    </div>
                    <div class="book-price">${s.price}$</div>
                </div>
                <button class="main-btn book-btn">Learn More</button>
            </li>
        `}e.books_list.insertAdjacentHTML("beforeend",i)}function b(){e.book_counter.textContent=`Showing ${t.current_books_count} of ${t.max_books_count}`}function B(){e.books_list.innerHTML=""}function C(){e.modal_book.classList.add("modal--is-open")}function k(){e.modal_book.classList.remove("modal--is-open"),document.body.style.overflow=""}function M(o){e.modal_book_info.innerHTML=`
        <img src="${o.book_image}" alt="${o.title}" class="modal-book-img"">
            <div>
                <div class="modal-book-title">${o.title}</div>
                <div class="modal-book-author">${o.author}</div>
                <div class="modal-book-price">$${o.price}</div>
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
                            <p class="ac-text">${o.description}</p>
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
    `}function _(){e.book_show_more_button.style.display=="none"&&(e.book_show_more_button.style.display="block"),t.current_books_count==t.max_books_count&&(e.book_show_more_button.style.display="none")}function m(){e.book_category_list_wrap.style.display==="block"?e.book_category_list_wrap.style.display="none":e.book_category_list_wrap.style.display="block"}async function $(o){o.target.classList.contains("book-category")&&(o.stopPropagation(),o.target.textContent!=e.book_menu_text.textContent.trim()&&(e.book_menu_text.textContent=o.target.textContent,o.target.textContent=="All categories"?t.current_books_category_is_all=!0:t.current_books_category_is_all=!1,B(),t.current_books_count=window.innerWidth<=767?10:24,t.current_books_category_is_all?(a(t.book_list,0,t.current_books_count),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length):(t.book_list_with_category=await x(o.target.textContent),t.current_books_count=Math.min(t.book_list_with_category.length,window.innerWidth<=767?10:24),a(t.book_list_with_category,0,t.current_books_count),t.max_books_count=t.book_list_with_category.length),b(),_(),window.innerWidth<1440&&m()))}function g(){w.success({title:"NICEEE",message:"Successfully paid from your card"})}function y(){console.log("Item added: "+document.querySelector(".modal-book-counter").textContent+"0 times, good luck")}async function A(o){if(!o.target.classList.contains("book-btn"))return;let r=await q(o.target.closest("li").dataset.id);M(r),new v(".accordion-container",{showMultiple:!0}),T(),C(),document.body.style.overflow="hidden"}function T(){document.querySelector(".modal-book-buy-button").addEventListener("click",g),document.querySelector(".modal-book-cart-button").addEventListener("click",y),document.querySelector(".button-increase").addEventListener("click",f),document.querySelector(".button-decrease").addEventListener("click",h),document.querySelectorAll(".ac-trigger").forEach(o=>{o.addEventListener("click",p)})}function N(){document.querySelector(".modal-book-buy-button").removeEventListener("click",g),document.querySelector(".modal-book-cart-button").removeEventListener("click",y),document.querySelector(".button-increase").removeEventListener("click",f),document.querySelector(".button-decrease").removeEventListener("click",h),document.querySelectorAll(".ac-trigger").forEach(o=>{o.removeEventListener("click",p)})}function p(o){o.target.closest(".ac").classList.contains("is-active")?o.target.querySelector("use").setAttribute("xlink:href","/img/sprite.svg#icon-up-type-one"):o.target.querySelector("use").setAttribute("xlink:href","/img/sprite.svg#icon-down-type-one")}function f(){document.querySelector(".modal-book-counter").textContent=Number(document.querySelector(".modal-book-counter").textContent)+1}function h(){document.querySelector(".modal-book-counter").textContent=Math.max(Number(document.querySelector(".modal-book-counter").textContent)-1,1)}function O(){N(),k()}e.modal_book.addEventListener("click",o=>{o.target===e.modal_book&&k()});document.addEventListener("keydown",o=>{o.key==="Escape"&&k()});function P(){t.current_books_category_is_all?a(t.book_list,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)):a(t.book_list_with_category,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)),t.current_books_count+=Math.min(4,t.max_books_count-t.current_books_count),b(),_()}async function W(){let o=await L();o=o.filter(r=>{var c;return(c=r.list_name)==null?void 0:c.trim()}),o.unshift({list_name:"All categories"}),E(o)}async function I(){let o=await S();t.book_list=o.flatMap(r=>r.books),a(t.book_list,0,window.innerWidth<=767?10:24),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length,b()}I();W();e.book_category_button.addEventListener("click",m);e.book_category_list.addEventListener("click",$);e.books_list.addEventListener("click",A);e.modal_book_close_button.addEventListener("click",O);e.book_show_more_button.addEventListener("click",P);
//# sourceMappingURL=index.js.map
