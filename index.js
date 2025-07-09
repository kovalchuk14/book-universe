import{S as w,N as E,K as A,i as $,A as W,P as j,a as f,b as J}from"./assets/vendor-Bwnwe6pH.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const P=document.getElementById("PrevSlide"),I=document.getElementById("NextSlide"),G=document.querySelectorAll(".hero-btn"),k=new w(".hero-slider",{modules:[E,A],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{prevEl:P,nextEl:I},keyboard:{enabled:!0,onlyInViewport:!0}});function p(){P.disabled=k.isBeginning,I.disabled=k.isEnd}k.on("init",p);k.on("slideChange",p);k.on("reachBeginning",p);k.on("reachEnd",p);p();G.forEach(function(e){e.addEventListener("click",function(o){o.preventDefault();const r=document.querySelector(e.dataset.scroll);r&&r.scrollIntoView({behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".events-btn"),o=document.getElementById("contact-modal-backdrop"),r=document.getElementById("contact-close-modal-btn"),l=document.getElementById("contact-event-title"),n=document.getElementById("contact-register-form"),s=n.querySelectorAll("input, textarea");e.forEach(i=>{i.addEventListener("click",u=>{const b=u.currentTarget.dataset.event;l.textContent=b,o.classList.add("is-visible"),document.body.style.overflow="hidden"})}),r.addEventListener("click",a),o.addEventListener("click",i=>{i.target===o&&a()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&o.classList.contains("is-visible")&&a()});function a(){o.classList.remove("is-visible"),document.body.style.overflow="",n.reset(),s.forEach(i=>{i.classList.remove("error");const u=i.nextElementSibling;u&&u.classList.contains("error-text")&&(u.style.display="none")})}n.addEventListener("submit",d);function d(i){i.preventDefault();let u=!0;s.forEach(b=>{const m=b.nextElementSibling,v=b.value.trim();let y=!0;b.name==="name"&&(v===""?(y=!1,m.textContent="Please enter your name"):/\d/.test(v)?(y=!1,m.textContent="Name cannot contain numbers"):v.length>50&&(y=!1,m.textContent="Name must be up to 50 characters")),b.name==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)&&(y=!1,m.textContent="Please enter a valid email"),y?(b.classList.remove("error"),m.style.display="none"):(b.classList.add("error"),u=!1,m.style.display="block")}),u&&$.success({title:"NICEEE",message:"Successfully registered"})}});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("open-menu"),o=document.getElementById("close-menu"),r=document.getElementById("mobile-menu"),l=document.querySelectorAll(".mobile-nav-link");e.addEventListener("click",()=>{r.classList.add("open"),document.body.classList.add("lock-scroll")}),o.addEventListener("click",()=>{r.classList.remove("open"),document.body.classList.remove("lock-scroll")}),l.forEach(n=>{n.addEventListener("click",s=>{s.preventDefault();const a=n.getAttribute("href"),d=document.querySelector(a);r.classList.remove("open"),document.body.classList.remove("lock-scroll"),d?d.scrollIntoView({behavior:"smooth"}):window.location.hash=a})})});const q="/book-universe/assets/women-one-BnSHht3A.jpg",C="/book-universe/assets/man-one-BGYlt4N7.jpg",M="/book-universe/assets/women-two-D6Gk07ZQ.jpg",K=[{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:q},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:C},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:M},{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:M},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:C},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:q}];function R(){const e=document.querySelector(".feedbackSwiper .swiper-wrapper");K.forEach(o=>{const r=document.createElement("li");r.classList.add("swiper-slide"),r.classList.add("feedbacks-swiper-slide"),r.innerHTML=`
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
    `,e.appendChild(r)})}function F(){const e=document.querySelectorAll(".control-btn"),o=new w(".feedbackSwiper",{modules:[E,A,W],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:"#feedbackNext",prevEl:"#feedbackPrev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{slideChange(a){r(a),l(a)},afterInit(a){r(a),l(a)}}});function r(a){const d=document.getElementById("feedbackPrev"),i=document.getElementById("feedbackNext");d.disabled=a.isBeginning,i.disabled=a.isEnd}function l(a){e.forEach((d,i)=>{d.classList.toggle("active",i===a.realIndex)})}e.forEach(a=>{a.addEventListener("click",()=>{const d=parseInt(a.getAttribute("data-index"),10);o.slideTo(d)})});const n=document.getElementById("feedbackPrev"),s=document.getElementById("feedbackNext");return n.addEventListener("click",()=>{o.slidePrev(),n.blur()}),s.addEventListener("click",()=>{o.slideNext(),s.blur()}),o}R();F();document.addEventListener("DOMContentLoaded",()=>{new w(".swiper",{modules:[E,j],slidesPerView:1,spaceBetween:30,loop:!1,observer:!0,observeParents:!0,watchOverflow:!0,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})});const h=["https://books-backend.p.goit.global/books/category-list","https://books-backend.p.goit.global/books/top-books","https://books-backend.p.goit.global/books/category?category=","https://books-backend.p.goit.global/books/"];async function Y(){return(await f.get(h[0])).data}async function Z(){return(await f.get(h[1])).data}async function z(e){return(await f.get(h[2]+e)).data}async function Q(e){return(await f.get(h[3]+e)).data}const c={book_category_list:document.querySelector(".book-categories-list"),book_category_list_wrap:document.querySelector(".book-categories-list-wrapper"),book_category_button:document.querySelector(".book-categories-list-container"),book_menu_text:document.querySelector(".book-select-menu"),books_list:document.querySelector(".book-list"),book_counter:document.querySelector(".book-counter"),book_show_more_button:document.querySelector(".book-button-show-more"),modal_book:document.querySelector(".modal-book"),modal_book_close_button:document.querySelector(".modal-book-close-button"),modal_book_info:document.querySelector(".modal-book-full-info"),modal_book_buy_button:document.querySelector(".modal-book-buy-button"),modal_book_add_card_button:document.querySelector(".modal-book-cart-button")},t={current_books_count:0,max_books_count:0,current_books_category_is_all:!0,book_list:[],book_list_with_category:[],books_per_page:4},_="/book-universe/assets/sprite-By3KBZBp.svg";function X(e){const o=e.map(r=>`
        <li class="book-category">${r.list_name}</li>
        `).join("");c.book_category_list.insertAdjacentHTML("beforeend",o)}function g(e,o,r){let l="";for(let n=o;n<r;n++){let s=e[n];l+=`
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
        `}c.books_list.insertAdjacentHTML("beforeend",l)}function L(){c.book_counter.textContent=`Showing ${t.current_books_count} of ${t.max_books_count}`}function ee(){c.books_list.innerHTML=""}function te(){c.modal_book.classList.add("modal--is-open")}function x(){c.modal_book.classList.remove("modal--is-open"),document.body.style.overflow=""}function oe(e){c.modal_book_info.innerHTML=`
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
    `}function N(){c.book_show_more_button.style.display=="none"&&(c.book_show_more_button.style.display="block"),t.current_books_count==t.max_books_count&&(c.book_show_more_button.style.display="none")}function T(){c.book_category_list_wrap.style.display==="block"?c.book_category_list_wrap.style.display="none":c.book_category_list_wrap.style.display="block"}async function ne(e){e.target.classList.contains("book-category")&&(e.stopPropagation(),e.target.textContent!=c.book_menu_text.textContent.trim()&&(document.querySelectorAll(".book-category").forEach(o=>{o.style.color="var(--main-color)"}),e.target.style.color="var(--strong-orange)",c.book_menu_text.textContent=e.target.textContent,e.target.textContent=="All categories"?t.current_books_category_is_all=!0:t.current_books_category_is_all=!1,ee(),t.current_books_count=window.innerWidth<=767?10:24,t.current_books_category_is_all?(g(t.book_list,0,t.current_books_count),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length):(S(),t.book_list_with_category=await z(e.target.textContent),t.current_books_count=Math.min(t.book_list_with_category.length,window.innerWidth<=767?10:24),g(t.book_list_with_category,0,t.current_books_count),B(),t.max_books_count=t.book_list_with_category.length),L(),N(),window.innerWidth<1440&&T()))}function V(){$.success({title:"NICEEE",message:"Successfully paid from your card"})}function O(){console.log("Item added: "+document.querySelector(".modal-book-counter").textContent+"0 times, good luck")}async function se(e){if(!e.target.classList.contains("book-btn"))return;S();let o=await Q(e.target.closest("li").dataset.id);oe(o),B(),new J(".accordion-container",{showMultiple:!0}),re(),te(),document.body.style.overflow="hidden"}function re(){document.querySelector(".modal-book-buy-button").addEventListener("click",V),document.querySelector(".modal-book-cart-button").addEventListener("click",O),document.querySelector(".button-increase").addEventListener("click",H),document.querySelector(".button-decrease").addEventListener("click",U),document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",D)})}function ae(){document.querySelector(".modal-book-buy-button").removeEventListener("click",V),document.querySelector(".modal-book-cart-button").removeEventListener("click",O),document.querySelector(".button-increase").removeEventListener("click",H),document.querySelector(".button-decrease").removeEventListener("click",U),document.querySelectorAll(".ac-trigger").forEach(e=>{e.removeEventListener("click",D)})}function D(e){e.target.closest(".ac").classList.contains("is-active")?e.target.querySelector("use").setAttribute("href",`${_}#icon-up-type-one`):e.target.querySelector("use").setAttribute("href",`${_}#icon-down-type-one`)}function H(){document.querySelector(".modal-book-counter").textContent=Number(document.querySelector(".modal-book-counter").textContent)+1}function U(){document.querySelector(".modal-book-counter").textContent=Math.max(Number(document.querySelector(".modal-book-counter").textContent)-1,1)}function ce(){ae(),x()}c.modal_book.addEventListener("click",e=>{e.target===c.modal_book&&x()});document.addEventListener("keydown",e=>{e.key==="Escape"&&x()});function ie(){t.current_books_category_is_all?g(t.book_list,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)):g(t.book_list_with_category,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)),t.current_books_count+=Math.min(4,t.max_books_count-t.current_books_count),L(),N()}function S(){document.querySelector(".loader").style.display="block"}function B(){document.querySelector(".loader").style.display="none"}async function le(){S();let e=await Y();e=e.filter(o=>{var r;return(r=o.list_name)==null?void 0:r.trim()}),e.unshift({list_name:"All categories"}),X(e),B()}async function de(){let e=await Z();t.book_list=e.flatMap(o=>o.books),g(t.book_list,0,window.innerWidth<=767?10:24),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length,L()}de();le();c.book_category_button.addEventListener("click",T);c.book_category_list.addEventListener("click",ne);c.books_list.addEventListener("click",se);c.modal_book_close_button.addEventListener("click",ce);c.book_show_more_button.addEventListener("click",ie);
//# sourceMappingURL=index.js.map
