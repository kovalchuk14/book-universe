import{S as w,N as E,K as M,A as D,P as H,a as f,b as U,i as W}from"./assets/vendor-CvYJyY29.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const C=document.getElementById("PrevSlide"),A=document.getElementById("NextSlide"),j=document.querySelectorAll(".hero-btn"),m=new w(".hero-slider",{modules:[E,M],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{prevEl:C,nextEl:A},keyboard:{enabled:!0,onlyInViewport:!0}});function g(){C.disabled=m.isBeginning,A.disabled=m.isEnd}m.on("init",g);m.on("slideChange",g);m.on("reachBeginning",g);m.on("reachEnd",g);g();j.forEach(function(e){e.addEventListener("click",function(o){o.preventDefault();const s=document.querySelector(e.dataset.scroll);s&&s.scrollIntoView({behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".events-btn"),o=document.getElementById("contact-modal-backdrop"),s=document.getElementById("contact-close-modal-btn"),l=document.getElementById("contact-event-title"),n=document.getElementById("contact-register-form"),r=n.querySelectorAll("input, textarea");e.forEach(c=>{c.addEventListener("click",d=>{const u=d.currentTarget.dataset.event;l.textContent=u,o.classList.add("is-visible"),document.body.style.overflow="hidden"})}),s.addEventListener("click",a),o.addEventListener("click",c=>{c.target===o&&a()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&o.classList.contains("is-visible")&&a()});function a(){o.classList.remove("is-visible"),document.body.style.overflow="",n.reset(),r.forEach(c=>{c.classList.remove("error");const d=c.nextElementSibling;d&&d.classList.contains("error-text")&&(d.style.display="none")})}n.addEventListener("submit",b);function b(c){c.preventDefault();let d=!0;r.forEach(u=>{const k=u.nextElementSibling,v=u.value.trim();let y=!0;u.name==="name"&&(v===""?(y=!1,k.textContent="Please enter your name"):/\d/.test(v)?(y=!1,k.textContent="Name cannot contain numbers"):v.length>50&&(y=!1,k.textContent="Name must be up to 50 characters")),u.name==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)&&(y=!1,k.textContent="Please enter a valid email"),y?(u.classList.remove("error"),k.style.display="none"):(u.classList.add("error"),d=!1,k.style.display="block")}),d&&(console.log("Форма валідна!"),n.reset(),a())}});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("open-menu"),o=document.getElementById("close-menu"),s=document.getElementById("mobile-menu"),l=document.querySelectorAll(".mobile-nav-link");e.addEventListener("click",()=>{s.classList.add("open"),document.body.classList.add("lock-scroll")}),o.addEventListener("click",()=>{s.classList.remove("open"),document.body.classList.remove("lock-scroll")}),l.forEach(n=>{n.addEventListener("click",()=>{s.classList.remove("open"),document.body.classList.remove("lock-scroll")})})});const B="/book-universe/assets/women-one-BnSHht3A.jpg",S="/book-universe/assets/man-one-BGYlt4N7.jpg",q="/book-universe/assets/women-two-D6Gk07ZQ.jpg",J=[{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:B},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:S},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:q},{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:q},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:S},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:B}];function G(){const e=document.querySelector(".feedbackSwiper .swiper-wrapper");J.forEach(o=>{const s=document.createElement("li");s.classList.add("swiper-slide"),s.classList.add("feedbacks-swiper-slide"),s.innerHTML=`
      <div class="feedback-card">
        <p class="comment">${o.text}</p>
        <div class="client-info">
          <img src="${o.avatar}" alt="${o.alt}">
          <div class="client-text">
            <h3>${o.author}</h3>
            <p class="client-title">${o.title}</p>
          </div>
        </div>
      </div>
    `,e.appendChild(s)})}function K(){const e=document.querySelectorAll(".control-btn"),o=new w(".feedbackSwiper",{modules:[E,M,D],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:"#feedbackNext",prevEl:"#feedbackPrev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{slideChange(a){s(a),l(a)},afterInit(a){s(a),l(a)}}});function s(a){const b=document.getElementById("feedbackPrev"),c=document.getElementById("feedbackNext");b.disabled=a.isBeginning,c.disabled=a.isEnd}function l(a){e.forEach((b,c)=>{b.classList.toggle("active",c===a.realIndex)})}e.forEach(a=>{a.addEventListener("click",()=>{const b=parseInt(a.getAttribute("data-index"),10);o.slideTo(b)})});const n=document.getElementById("feedbackPrev"),r=document.getElementById("feedbackNext");return n.addEventListener("click",()=>{o.slidePrev(),n.blur()}),r.addEventListener("click",()=>{o.slideNext(),r.blur()}),o}G();K();document.addEventListener("DOMContentLoaded",()=>{new w(".swiper",{modules:[E,H],slidesPerView:1,spaceBetween:30,loop:!1,observer:!0,observeParents:!0,watchOverflow:!0,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})});const h=["https://books-backend.p.goit.global/books/category-list","https://books-backend.p.goit.global/books/top-books","https://books-backend.p.goit.global/books/category?category=","https://books-backend.p.goit.global/books/"];async function R(){return(await f.get(h[0])).data}async function F(){return(await f.get(h[1])).data}async function Y(e){return(await f.get(h[2]+e)).data}async function Z(e){return(await f.get(h[3]+e)).data}const i={book_category_list:document.querySelector(".book-categories-list"),book_category_list_wrap:document.querySelector(".book-categories-list-wrapper"),book_category_button:document.querySelector(".book-categories-list-container"),book_menu_text:document.querySelector(".book-select-menu"),books_list:document.querySelector(".book-list"),book_counter:document.querySelector(".book-counter"),book_show_more_button:document.querySelector(".book-button-show-more"),modal_book:document.querySelector(".modal-book"),modal_book_close_button:document.querySelector(".modal-book-close-button"),modal_book_info:document.querySelector(".modal-book-full-info"),modal_book_buy_button:document.querySelector(".modal-book-buy-button"),modal_book_add_card_button:document.querySelector(".modal-book-cart-button")},t={current_books_count:0,max_books_count:0,current_books_category_is_all:!0,book_list:[],book_list_with_category:[],books_per_page:4},_="/book-universe/assets/sprite-By3KBZBp.svg";function z(e){const o=e.map(s=>`
        <li class="book-category">${s.list_name}</li>
        `).join("");i.book_category_list.insertAdjacentHTML("beforeend",o)}function p(e,o,s){let l="";for(let n=o;n<s;n++){let r=e[n];l+=`
            <li class="book-card" data-id=${r._id}>
                <img src="${r.book_image}" alt="${r.title}" class="book-img">
                <div class="book-info">
                    <div>
                        <div class="book-title">${r.title}</div>
                        <div class="book-author">${r.author}</div>
                    </div>
                    <div class="book-price">${r.price}$</div>
                </div>
                <button class="main-btn book-btn">Learn More</button>
            </li>
        `}i.books_list.insertAdjacentHTML("beforeend",l)}function L(){i.book_counter.textContent=`Showing ${t.current_books_count} of ${t.max_books_count}`}function Q(){i.books_list.innerHTML=""}function X(){i.modal_book.classList.add("modal--is-open")}function x(){i.modal_book.classList.remove("modal--is-open"),document.body.style.overflow=""}function ee(e){i.modal_book_info.innerHTML=`
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
    `}function $(){i.book_show_more_button.style.display=="none"&&(i.book_show_more_button.style.display="block"),t.current_books_count==t.max_books_count&&(i.book_show_more_button.style.display="none")}function P(){i.book_category_list_wrap.style.display==="block"?i.book_category_list_wrap.style.display="none":i.book_category_list_wrap.style.display="block"}async function te(e){e.target.classList.contains("book-category")&&(e.stopPropagation(),e.target.textContent!=i.book_menu_text.textContent.trim()&&(i.book_menu_text.textContent=e.target.textContent,e.target.textContent=="All categories"?t.current_books_category_is_all=!0:t.current_books_category_is_all=!1,Q(),t.current_books_count=window.innerWidth<=767?10:24,t.current_books_category_is_all?(p(t.book_list,0,t.current_books_count),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length):(t.book_list_with_category=await Y(e.target.textContent),t.current_books_count=Math.min(t.book_list_with_category.length,window.innerWidth<=767?10:24),p(t.book_list_with_category,0,t.current_books_count),t.max_books_count=t.book_list_with_category.length),L(),$(),window.innerWidth<1440&&P()))}function I(){W.success({title:"NICEEE",message:"Successfully paid from your card"})}function N(){console.log("Item added: "+document.querySelector(".modal-book-counter").textContent+"0 times, good luck")}async function oe(e){if(!e.target.classList.contains("book-btn"))return;let o=await Z(e.target.closest("li").dataset.id);ee(o),new U(".accordion-container",{showMultiple:!0}),ne(),X(),document.body.style.overflow="hidden"}function ne(){document.querySelector(".modal-book-buy-button").addEventListener("click",I),document.querySelector(".modal-book-cart-button").addEventListener("click",N),document.querySelector(".button-increase").addEventListener("click",O),document.querySelector(".button-decrease").addEventListener("click",V),document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",T)})}function se(){document.querySelector(".modal-book-buy-button").removeEventListener("click",I),document.querySelector(".modal-book-cart-button").removeEventListener("click",N),document.querySelector(".button-increase").removeEventListener("click",O),document.querySelector(".button-decrease").removeEventListener("click",V),document.querySelectorAll(".ac-trigger").forEach(e=>{e.removeEventListener("click",T)})}function T(e){e.target.closest(".ac").classList.contains("is-active")?e.target.querySelector("use").setAttribute("href",`${_}#icon-up-type-one`):e.target.querySelector("use").setAttribute("href",`${_}#icon-down-type-one`)}function O(){document.querySelector(".modal-book-counter").textContent=Number(document.querySelector(".modal-book-counter").textContent)+1}function V(){document.querySelector(".modal-book-counter").textContent=Math.max(Number(document.querySelector(".modal-book-counter").textContent)-1,1)}function re(){se(),x()}i.modal_book.addEventListener("click",e=>{e.target===i.modal_book&&x()});document.addEventListener("keydown",e=>{e.key==="Escape"&&x()});function ae(){t.current_books_category_is_all?p(t.book_list,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)):p(t.book_list_with_category,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)),t.current_books_count+=Math.min(4,t.max_books_count-t.current_books_count),L(),$()}async function ie(){let e=await R();e=e.filter(o=>{var s;return(s=o.list_name)==null?void 0:s.trim()}),e.unshift({list_name:"All categories"}),z(e)}async function ce(){let e=await F();t.book_list=e.flatMap(o=>o.books),p(t.book_list,0,window.innerWidth<=767?10:24),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length,L()}ce();ie();i.book_category_button.addEventListener("click",P);i.book_category_list.addEventListener("click",te);i.books_list.addEventListener("click",oe);i.modal_book_close_button.addEventListener("click",re);i.book_show_more_button.addEventListener("click",ae);
//# sourceMappingURL=index.js.map
