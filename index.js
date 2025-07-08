import{S as k,N as w,P as L,a as l,A as S,i as q}from"./assets/vendor-7XVaD3su.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();k.use([w,L]);document.addEventListener("DOMContentLoaded",()=>{const o=new k(".swiper",{slidesPerView:1,spaceBetween:30,loop:!1,observer:!0,observeParents:!0,watchOverflow:!0,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});window.addEventListener("resize",()=>{o.update()})});const u=["https://books-backend.p.goit.global/books/category-list","https://books-backend.p.goit.global/books/top-books","https://books-backend.p.goit.global/books/category?category=","https://books-backend.p.goit.global/books/"];async function x(){return(await l.get(u[0])).data}async function E(){return(await l.get(u[1])).data}async function B(o){return(await l.get(u[2]+o)).data}async function C(o){return(await l.get(u[3]+o)).data}const e={book_category_list:document.querySelector(".book-categories-list"),book_category_list_wrap:document.querySelector(".book-categories-list-wrapper"),book_category_button:document.querySelector(".book-categories-list-container"),book_menu_text:document.querySelector(".book-select-menu"),books_list:document.querySelector(".book-list"),book_counter:document.querySelector(".book-counter"),book_show_more_button:document.querySelector(".book-button-show-more"),modal_book:document.querySelector(".modal-book"),modal_book_close_button:document.querySelector(".modal-book-close-button"),modal_book_info:document.querySelector(".modal-book-full-info"),modal_book_buy_button:document.querySelector(".modal-book-buy-button"),modal_book_add_card_button:document.querySelector(".modal-book-cart-button")},t={current_books_count:0,max_books_count:0,current_books_category_is_all:!0,book_list:[],book_list_with_category:[],books_per_page:4};function M(o){const r=o.map(i=>`
        <li class="book-category">${i.list_name}</li>
        `).join("");e.book_category_list.insertAdjacentHTML("beforeend",r)}function a(o,r,i){let c="";for(let n=r;n<i;n++){let s=o[n];c+=`
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
        `}e.books_list.insertAdjacentHTML("beforeend",c)}function b(){e.book_counter.textContent=`Showing ${t.current_books_count} of ${t.max_books_count}`}function $(){e.books_list.innerHTML=""}function A(){e.modal_book.classList.add("modal--is-open")}function _(){e.modal_book.classList.remove("modal--is-open"),document.body.style.overflow=""}function P(o){e.modal_book_info.innerHTML=`
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
                            <use href="/img/sprite.svg#icon-down-type-one"></use>
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
                            <use href="/img/sprite.svg#icon-down-type-one"></use>
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
                            <use href="/img/sprite.svg#icon-down-type-one"></use>
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
    `}function m(){e.book_show_more_button.style.display=="none"&&(e.book_show_more_button.style.display="block"),t.current_books_count==t.max_books_count&&(e.book_show_more_button.style.display="none")}function g(){e.book_category_list_wrap.style.display==="block"?e.book_category_list_wrap.style.display="none":e.book_category_list_wrap.style.display="block"}async function N(o){o.target.classList.contains("book-category")&&(o.stopPropagation(),o.target.textContent!=e.book_menu_text.textContent.trim()&&(e.book_menu_text.textContent=o.target.textContent,o.target.textContent=="All categories"?t.current_books_category_is_all=!0:t.current_books_category_is_all=!1,$(),t.current_books_count=window.innerWidth<=767?10:24,t.current_books_category_is_all?(a(t.book_list,0,t.current_books_count),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length):(t.book_list_with_category=await B(o.target.textContent),t.current_books_count=Math.min(t.book_list_with_category.length,window.innerWidth<=767?10:24),a(t.book_list_with_category,0,t.current_books_count),t.max_books_count=t.book_list_with_category.length),b(),m(),window.innerWidth<1440&&g()))}function y(){q.success({title:"NICEEE",message:"Successfully paid from your card"})}function p(){console.log("Item added: "+document.querySelector(".modal-book-counter").textContent+"0 times, good luck")}async function O(o){if(!o.target.classList.contains("book-btn"))return;let r=await C(o.target.closest("li").dataset.id);P(r),new S(".accordion-container",{showMultiple:!0}),T(),A(),document.body.style.overflow="hidden"}function T(){document.querySelector(".modal-book-buy-button").addEventListener("click",y),document.querySelector(".modal-book-cart-button").addEventListener("click",p),document.querySelector(".button-increase").addEventListener("click",h),document.querySelector(".button-decrease").addEventListener("click",v),document.querySelectorAll(".ac-trigger").forEach(o=>{o.addEventListener("click",f)})}function W(){document.querySelector(".modal-book-buy-button").removeEventListener("click",y),document.querySelector(".modal-book-cart-button").removeEventListener("click",p),document.querySelector(".button-increase").removeEventListener("click",h),document.querySelector(".button-decrease").removeEventListener("click",v),document.querySelectorAll(".ac-trigger").forEach(o=>{o.removeEventListener("click",f)})}function f(o){o.target.closest(".ac").classList.contains("is-active")?o.target.querySelector("use").setAttribute("href","/img/sprite.svg#icon-up-type-one"):o.target.querySelector("use").setAttribute("href","/img/sprite.svg#icon-down-type-one")}function h(){document.querySelector(".modal-book-counter").textContent=Number(document.querySelector(".modal-book-counter").textContent)+1}function v(){document.querySelector(".modal-book-counter").textContent=Math.max(Number(document.querySelector(".modal-book-counter").textContent)-1,1)}function I(){W(),_()}e.modal_book.addEventListener("click",o=>{o.target===e.modal_book&&_()});document.addEventListener("keydown",o=>{o.key==="Escape"&&_()});function j(){t.current_books_category_is_all?a(t.book_list,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)):a(t.book_list_with_category,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)),t.current_books_count+=Math.min(4,t.max_books_count-t.current_books_count),b(),m()}async function H(){let o=await x();o=o.filter(r=>{var i;return(i=r.list_name)==null?void 0:i.trim()}),o.unshift({list_name:"All categories"}),M(o)}async function V(){let o=await E();t.book_list=o.flatMap(r=>r.books),a(t.book_list,0,window.innerWidth<=767?10:24),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length,b()}V();H();e.book_category_button.addEventListener("click",g);e.book_category_list.addEventListener("click",N);e.books_list.addEventListener("click",O);e.modal_book_close_button.addEventListener("click",I);e.book_show_more_button.addEventListener("click",j);
//# sourceMappingURL=index.js.map
