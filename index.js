import{S as x,N as S,K as N,A as I,P as T,a as g,b as O,i as U}from"./assets/vendor-CvYJyY29.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".open-modal-btn"),o=document.getElementById("contact-modal-backdrop"),i=document.getElementById("contact-close-modal-btn"),l=document.getElementById("contact-event-title"),n=document.getElementById("contact-register-form"),s=n.querySelectorAll("input, textarea");e.forEach(c=>{c.addEventListener("click",d=>{const u=d.currentTarget.dataset.event;l.textContent=u,o.classList.add("is-visible"),document.body.classList.add("no-scroll")})}),i.addEventListener("click",r),o.addEventListener("click",c=>{c.target===o&&r()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&o.classList.contains("is-visible")&&r()});function r(){o.classList.remove("is-visible"),document.body.classList.remove("no-scroll"),n.reset(),s.forEach(c=>{c.classList.remove("error");const d=c.nextElementSibling;d&&d.classList.contains("error-text")&&(d.style.display="none")})}n.addEventListener("submit",b);function b(c){c.preventDefault();let d=!0;s.forEach(u=>{const k=u.nextElementSibling,p=u.value.trim();let m=!0;u.name==="name"&&(p===""?(m=!1,k.textContent="Please enter your name"):/\d/.test(p)?(m=!1,k.textContent="Name cannot contain numbers"):p.length>50&&(m=!1,k.textContent="Name must be up to 50 characters")),u.name==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p)&&(m=!1,k.textContent="Please enter a valid email"),m?(u.classList.remove("error"),k.style.display="none"):(u.classList.add("error"),d=!1,k.style.display="block")}),d&&(console.log("Форма валідна!"),n.reset(),r())}});const w="/book-universe/assets/women-one-BnSHht3A.jpg",L="/book-universe/assets/man-one-BGYlt4N7.jpg",E="/book-universe/assets/women-two-D6Gk07ZQ.jpg",V=[{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:w},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:L},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:E},{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:E},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:L},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:w}];function W(){const e=document.querySelector(".feedbackSwiper .swiper-wrapper");V.forEach(o=>{const i=document.createElement("li");i.classList.add("swiper-slide"),i.innerHTML=`
      <div class="feedback-card">
        <p class="comment">${o.text}</p>
        <div class="client-info">
          <img src="/${o.avatar}" alt="${o.alt}">
          <div class="client-text">
            <h3>${o.author}</h3>
            <p class="client-title">${o.title}</p>
          </div>
        </div>
      </div>
    `,e.appendChild(i)})}function H(){const e=document.querySelectorAll(".control-btn"),o=new x(".feedbackSwiper",{modules:[S,N,I],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:"#feedbackNext",prevEl:"#feedbackPrev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{slideChange(r){i(r),l(r)},afterInit(r){i(r),l(r)}}});function i(r){const b=document.getElementById("feedbackPrev"),c=document.getElementById("feedbackNext");b.disabled=r.isBeginning,c.disabled=r.isEnd}function l(r){e.forEach((b,c)=>{b.classList.toggle("active",c===r.realIndex)})}e.forEach(r=>{r.addEventListener("click",()=>{const b=parseInt(r.getAttribute("data-index"),10);o.slideTo(b)})});const n=document.getElementById("feedbackPrev"),s=document.getElementById("feedbackNext");return n.addEventListener("click",()=>{o.slidePrev(),n.blur()}),s.addEventListener("click",()=>{o.slideNext(),s.blur()}),o}W();H();document.addEventListener("DOMContentLoaded",()=>{new x(".swiper",{modules:[S,T],slidesPerView:1,spaceBetween:30,loop:!1,observer:!0,observeParents:!0,watchOverflow:!0,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})});const f=["https://books-backend.p.goit.global/books/category-list","https://books-backend.p.goit.global/books/top-books","https://books-backend.p.goit.global/books/category?category=","https://books-backend.p.goit.global/books/"];async function j(){return(await g.get(f[0])).data}async function D(){return(await g.get(f[1])).data}async function J(e){return(await g.get(f[2]+e)).data}async function G(e){return(await g.get(f[3]+e)).data}const a={book_category_list:document.querySelector(".book-categories-list"),book_category_list_wrap:document.querySelector(".book-categories-list-wrapper"),book_category_button:document.querySelector(".book-categories-list-container"),book_menu_text:document.querySelector(".book-select-menu"),books_list:document.querySelector(".book-list"),book_counter:document.querySelector(".book-counter"),book_show_more_button:document.querySelector(".book-button-show-more"),modal_book:document.querySelector(".modal-book"),modal_book_close_button:document.querySelector(".modal-book-close-button"),modal_book_info:document.querySelector(".modal-book-full-info"),modal_book_buy_button:document.querySelector(".modal-book-buy-button"),modal_book_add_card_button:document.querySelector(".modal-book-cart-button")},t={current_books_count:0,max_books_count:0,current_books_category_is_all:!0,book_list:[],book_list_with_category:[],books_per_page:4},_="/book-universe/assets/sprite-C3UW0zoa.svg";function K(e){const o=e.map(i=>`
        <li class="book-category">${i.list_name}</li>
        `).join("");a.book_category_list.insertAdjacentHTML("beforeend",o)}function y(e,o,i){let l="";for(let n=o;n<i;n++){let s=e[n];l+=`
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
        `}a.books_list.insertAdjacentHTML("beforeend",l)}function v(){a.book_counter.textContent=`Showing ${t.current_books_count} of ${t.max_books_count}`}function R(){a.books_list.innerHTML=""}function F(){a.modal_book.classList.add("modal--is-open")}function h(){a.modal_book.classList.remove("modal--is-open"),document.body.style.overflow=""}function Y(e){a.modal_book_info.innerHTML=`
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
                            <use href="${_}#icon-down-type-one"></use>
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
                            <use href="${_}#icon-down-type-one"></use>
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
                            <use href="${_}#icon-down-type-one"></use>
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
    `}function B(){a.book_show_more_button.style.display=="none"&&(a.book_show_more_button.style.display="block"),t.current_books_count==t.max_books_count&&(a.book_show_more_button.style.display="none")}function q(){a.book_category_list_wrap.style.display==="block"?a.book_category_list_wrap.style.display="none":a.book_category_list_wrap.style.display="block"}async function z(e){e.target.classList.contains("book-category")&&(e.stopPropagation(),e.target.textContent!=a.book_menu_text.textContent.trim()&&(a.book_menu_text.textContent=e.target.textContent,e.target.textContent=="All categories"?t.current_books_category_is_all=!0:t.current_books_category_is_all=!1,R(),t.current_books_count=window.innerWidth<=767?10:24,t.current_books_category_is_all?(y(t.book_list,0,t.current_books_count),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length):(t.book_list_with_category=await J(e.target.textContent),t.current_books_count=Math.min(t.book_list_with_category.length,window.innerWidth<=767?10:24),y(t.book_list_with_category,0,t.current_books_count),t.max_books_count=t.book_list_with_category.length),v(),B(),window.innerWidth<1440&&q()))}function C(){U.success({title:"NICEEE",message:"Successfully paid from your card"})}function M(){console.log("Item added: "+document.querySelector(".modal-book-counter").textContent+"0 times, good luck")}async function Q(e){if(!e.target.classList.contains("book-btn"))return;let o=await G(e.target.closest("li").dataset.id);Y(o),new O(".accordion-container",{showMultiple:!0}),Z(),F(),document.body.style.overflow="hidden"}function Z(){document.querySelector(".modal-book-buy-button").addEventListener("click",C),document.querySelector(".modal-book-cart-button").addEventListener("click",M),document.querySelector(".button-increase").addEventListener("click",A),document.querySelector(".button-decrease").addEventListener("click",P),document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",$)})}function X(){document.querySelector(".modal-book-buy-button").removeEventListener("click",C),document.querySelector(".modal-book-cart-button").removeEventListener("click",M),document.querySelector(".button-increase").removeEventListener("click",A),document.querySelector(".button-decrease").removeEventListener("click",P),document.querySelectorAll(".ac-trigger").forEach(e=>{e.removeEventListener("click",$)})}function $(e){e.target.closest(".ac").classList.contains("is-active")?e.target.querySelector("use").setAttribute("href",`${_}#icon-up-type-one`):e.target.querySelector("use").setAttribute("href",`${_}#icon-down-type-one`)}function A(){document.querySelector(".modal-book-counter").textContent=Number(document.querySelector(".modal-book-counter").textContent)+1}function P(){document.querySelector(".modal-book-counter").textContent=Math.max(Number(document.querySelector(".modal-book-counter").textContent)-1,1)}function ee(){X(),h()}a.modal_book.addEventListener("click",e=>{e.target===a.modal_book&&h()});document.addEventListener("keydown",e=>{e.key==="Escape"&&h()});function te(){t.current_books_category_is_all?y(t.book_list,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)):y(t.book_list_with_category,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)),t.current_books_count+=Math.min(4,t.max_books_count-t.current_books_count),v(),B()}async function oe(){let e=await j();e=e.filter(o=>{var i;return(i=o.list_name)==null?void 0:i.trim()}),e.unshift({list_name:"All categories"}),K(e)}async function ne(){let e=await D();t.book_list=e.flatMap(o=>o.books),y(t.book_list,0,window.innerWidth<=767?10:24),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length,v()}ne();oe();a.book_category_button.addEventListener("click",q);a.book_category_list.addEventListener("click",z);a.books_list.addEventListener("click",Q);a.modal_book_close_button.addEventListener("click",ee);a.book_show_more_button.addEventListener("click",te);
//# sourceMappingURL=index.js.map
