import{S as m,N as p,K as E,A as S,P as B,a as u,b as q,i as M}from"./assets/vendor-CvYJyY29.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const C=[{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:"img/feedbacks-images/women-one.jpg"},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:"img/feedbacks-images/man-one.jpg"},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:"img/feedbacks-images/women-two.jpg"},{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:"img/feedbacks-images/women-two.jpg"},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:"img/feedbacks-images/man-one.jpg"},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:"img/feedbacks-images/women-one.jpg"}];function A(){const e=document.querySelector(".feedbackSwiper .swiper-wrapper");C.forEach(t=>{const a=document.createElement("li");a.classList.add("swiper-slide"),a.innerHTML=`
      <div class="feedback-card">
        <p class="comment">${t.text}</p>
        <div class="client-info">
          <img src="/${t.avatar}" alt="${t.alt}">
          <div class="client-text">
            <h3>${t.author}</h3>
            <p class="client-title">${t.title}</p>
          </div>
        </div>
      </div>
    `,e.appendChild(a)})}function $(){const e=document.querySelectorAll(".control-btn"),t=new m(".feedbackSwiper",{modules:[p,E,S],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:"#feedbackNext",prevEl:"#feedbackPrev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{slideChange(i){a(i),c(i)},afterInit(i){a(i),c(i)}}});function a(i){const l=document.getElementById("feedbackPrev"),k=document.getElementById("feedbackNext");l.disabled=i.isBeginning,k.disabled=i.isEnd}function c(i){e.forEach((l,k)=>{l.classList.toggle("active",k===i.realIndex)})}e.forEach(i=>{i.addEventListener("click",()=>{const l=parseInt(i.getAttribute("data-index"),10);t.slideTo(l)})});const n=document.getElementById("feedbackPrev"),s=document.getElementById("feedbackNext");return n.addEventListener("click",()=>{t.slidePrev(),n.blur()}),s.addEventListener("click",()=>{t.slideNext(),s.blur()}),t}A();$();m.use([p,B]);document.addEventListener("DOMContentLoaded",()=>{const e=new m(".swiper",{slidesPerView:1,spaceBetween:30,loop:!1,observer:!0,observeParents:!0,watchOverflow:!0,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});window.addEventListener("resize",()=>{e.update()})});const b=["https://books-backend.p.goit.global/books/category-list","https://books-backend.p.goit.global/books/top-books","https://books-backend.p.goit.global/books/category?category=","https://books-backend.p.goit.global/books/"];async function P(){return(await u.get(b[0])).data}async function N(){return(await u.get(b[1])).data}async function I(e){return(await u.get(b[2]+e)).data}async function j(e){return(await u.get(b[3]+e)).data}const r={book_category_list:document.querySelector(".book-categories-list"),book_category_list_wrap:document.querySelector(".book-categories-list-wrapper"),book_category_button:document.querySelector(".book-categories-list-container"),book_menu_text:document.querySelector(".book-select-menu"),books_list:document.querySelector(".book-list"),book_counter:document.querySelector(".book-counter"),book_show_more_button:document.querySelector(".book-button-show-more"),modal_book:document.querySelector(".modal-book"),modal_book_close_button:document.querySelector(".modal-book-close-button"),modal_book_info:document.querySelector(".modal-book-full-info"),modal_book_buy_button:document.querySelector(".modal-book-buy-button"),modal_book_add_card_button:document.querySelector(".modal-book-cart-button")},o={current_books_count:0,max_books_count:0,current_books_category_is_all:!0,book_list:[],book_list_with_category:[],books_per_page:4};function T(e){const t=e.map(a=>`
        <li class="book-category">${a.list_name}</li>
        `).join("");r.book_category_list.insertAdjacentHTML("beforeend",t)}function d(e,t,a){let c="";for(let n=t;n<a;n++){let s=e[n];c+=`
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
        `}r.books_list.insertAdjacentHTML("beforeend",c)}function _(){r.book_counter.textContent=`Showing ${o.current_books_count} of ${o.max_books_count}`}function O(){r.books_list.innerHTML=""}function U(){r.modal_book.classList.add("modal--is-open")}function g(){r.modal_book.classList.remove("modal--is-open"),document.body.style.overflow=""}function W(e){r.modal_book_info.innerHTML=`
        <img src="${e.book_image}" alt="${e.title}" class="modal-book-img"">
            <div>
                <div class="modal-book-title">${e.title}</div>
                <div class="modal-book-author">${e.author}</div>
                <div class="modal-book-price">$${e.price}</div>
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
                            <p class="ac-text">${e.description}</p>
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
    `}function y(){r.book_show_more_button.style.display=="none"&&(r.book_show_more_button.style.display="block"),o.current_books_count==o.max_books_count&&(r.book_show_more_button.style.display="none")}function f(){r.book_category_list_wrap.style.display==="block"?r.book_category_list_wrap.style.display="none":r.book_category_list_wrap.style.display="block"}async function H(e){e.target.classList.contains("book-category")&&(e.stopPropagation(),e.target.textContent!=r.book_menu_text.textContent.trim()&&(r.book_menu_text.textContent=e.target.textContent,e.target.textContent=="All categories"?o.current_books_category_is_all=!0:o.current_books_category_is_all=!1,O(),o.current_books_count=window.innerWidth<=767?10:24,o.current_books_category_is_all?(d(o.book_list,0,o.current_books_count),o.current_books_count=Math.min(o.book_list.length,window.innerWidth<=767?10:24),o.max_books_count=o.book_list.length):(o.book_list_with_category=await I(e.target.textContent),o.current_books_count=Math.min(o.book_list_with_category.length,window.innerWidth<=767?10:24),d(o.book_list_with_category,0,o.current_books_count),o.max_books_count=o.book_list_with_category.length),_(),y(),window.innerWidth<1440&&f()))}function v(){M.success({title:"NICEEE",message:"Successfully paid from your card"})}function h(){console.log("Item added: "+document.querySelector(".modal-book-counter").textContent+"0 times, good luck")}async function V(e){if(!e.target.classList.contains("book-btn"))return;let t=await j(e.target.closest("li").dataset.id);W(t),new q(".accordion-container",{showMultiple:!0}),J(),U(),document.body.style.overflow="hidden"}function J(){document.querySelector(".modal-book-buy-button").addEventListener("click",v),document.querySelector(".modal-book-cart-button").addEventListener("click",h),document.querySelector(".button-increase").addEventListener("click",x),document.querySelector(".button-decrease").addEventListener("click",L),document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",w)})}function D(){document.querySelector(".modal-book-buy-button").removeEventListener("click",v),document.querySelector(".modal-book-cart-button").removeEventListener("click",h),document.querySelector(".button-increase").removeEventListener("click",x),document.querySelector(".button-decrease").removeEventListener("click",L),document.querySelectorAll(".ac-trigger").forEach(e=>{e.removeEventListener("click",w)})}function w(e){e.target.closest(".ac").classList.contains("is-active")?e.target.querySelector("use").setAttribute("href","/img/sprite.svg#icon-up-type-one"):e.target.querySelector("use").setAttribute("href","/img/sprite.svg#icon-down-type-one")}function x(){document.querySelector(".modal-book-counter").textContent=Number(document.querySelector(".modal-book-counter").textContent)+1}function L(){document.querySelector(".modal-book-counter").textContent=Math.max(Number(document.querySelector(".modal-book-counter").textContent)-1,1)}function K(){D(),g()}r.modal_book.addEventListener("click",e=>{e.target===r.modal_book&&g()});document.addEventListener("keydown",e=>{e.key==="Escape"&&g()});function R(){o.current_books_category_is_all?d(o.book_list,o.current_books_count,o.current_books_count+Math.min(4,o.max_books_count-o.current_books_count)):d(o.book_list_with_category,o.current_books_count,o.current_books_count+Math.min(4,o.max_books_count-o.current_books_count)),o.current_books_count+=Math.min(4,o.max_books_count-o.current_books_count),_(),y()}async function F(){let e=await P();e=e.filter(t=>{var a;return(a=t.list_name)==null?void 0:a.trim()}),e.unshift({list_name:"All categories"}),T(e)}async function G(){let e=await N();o.book_list=e.flatMap(t=>t.books),d(o.book_list,0,window.innerWidth<=767?10:24),o.current_books_count=Math.min(o.book_list.length,window.innerWidth<=767?10:24),o.max_books_count=o.book_list.length,_()}G();F();r.book_category_button.addEventListener("click",f);r.book_category_list.addEventListener("click",H);r.books_list.addEventListener("click",V);r.modal_book_close_button.addEventListener("click",K);r.book_show_more_button.addEventListener("click",R);
//# sourceMappingURL=index.js.map
