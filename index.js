import{S as E,N as L,K as C,A as H,P as U,a as h,b as W,i as j}from"./assets/vendor-CvYJyY29.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const A=document.getElementById("PrevSlide"),$=document.getElementById("NextSlide"),J=document.querySelectorAll(".hero-btn"),k=new E(".hero-slider",{modules:[L,C],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{prevEl:A,nextEl:$},keyboard:{enabled:!0,onlyInViewport:!0}});function v(){A.disabled=k.isBeginning,$.disabled=k.isEnd}k.on("init",v);k.on("slideChange",v);k.on("reachBeginning",v);k.on("reachEnd",v);v();J.forEach(function(e){e.addEventListener("click",function(o){o.preventDefault();const s=document.querySelector(e.dataset.scroll);s&&s.scrollIntoView({behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".events-btn"),o=document.getElementById("contact-modal-backdrop"),s=document.getElementById("contact-close-modal-btn"),c=document.getElementById("contact-event-title"),n=document.getElementById("contact-register-form"),r=n.querySelectorAll("input, textarea");let i=0;e.forEach(d=>{d.addEventListener("click",u=>{const b=u.currentTarget.dataset.event;c.textContent=b,o.classList.add("is-visible"),i=window.pageYOffset,document.documentElement.classList.add("modal-open"),document.body.classList.add("modal-open"),document.body.style.top=`-${i}px`})}),s.addEventListener("click",l),o.addEventListener("click",d=>{d.target===o&&l()}),document.addEventListener("keydown",d=>{d.key==="Escape"&&o.classList.contains("is-visible")&&l()});function l(){o.classList.remove("is-visible"),document.documentElement.classList.remove("modal-open"),document.body.classList.remove("modal-open"),document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.overflow="",window.scrollTo(0,i),n.reset(),r.forEach(d=>{d.classList.remove("error");const u=d.nextElementSibling;u&&u.classList.contains("error-text")&&(u.style.display="none")})}n.addEventListener("submit",y);function y(d){d.preventDefault();let u=!0;r.forEach(b=>{const m=b.nextElementSibling,f=b.value.trim();let p=!0;b.name==="name"&&(f===""?(p=!1,m.textContent="Please enter your name"):/\d/.test(f)?(p=!1,m.textContent="Name cannot contain numbers"):f.length>50&&(p=!1,m.textContent="Name must be up to 50 characters")),b.name==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f)&&(p=!1,m.textContent="Please enter a valid email"),p?(b.classList.remove("error"),m.style.display="none"):(b.classList.add("error"),u=!1,m.style.display="block")}),u&&(console.log("Форма валідна!"),n.reset(),l())}});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("open-menu"),o=document.getElementById("close-menu"),s=document.getElementById("mobile-menu"),c=document.querySelectorAll(".mobile-nav-link");e.addEventListener("click",()=>{s.classList.add("open"),document.body.classList.add("lock-scroll")}),o.addEventListener("click",()=>{s.classList.remove("open"),document.body.classList.remove("lock-scroll")}),c.forEach(n=>{n.addEventListener("click",()=>{s.classList.remove("open"),document.body.classList.remove("lock-scroll")})})});const S="/book-universe/assets/women-one-BnSHht3A.jpg",q="/book-universe/assets/man-one-BGYlt4N7.jpg",M="/book-universe/assets/women-two-D6Gk07ZQ.jpg",G=[{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:S},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:q},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:M},{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:M},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:q},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:S}];function K(){const e=document.querySelector(".feedbackSwiper .swiper-wrapper");G.forEach(o=>{const s=document.createElement("li");s.classList.add("swiper-slide"),s.classList.add("feedbacks-swiper-slide"),s.innerHTML=`
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
    `,e.appendChild(s)})}function R(){const e=document.querySelectorAll(".control-btn"),o=new E(".feedbackSwiper",{modules:[L,C,H],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:"#feedbackNext",prevEl:"#feedbackPrev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{slideChange(i){s(i),c(i)},afterInit(i){s(i),c(i)}}});function s(i){const l=document.getElementById("feedbackPrev"),y=document.getElementById("feedbackNext");l.disabled=i.isBeginning,y.disabled=i.isEnd}function c(i){e.forEach((l,y)=>{l.classList.toggle("active",y===i.realIndex)})}e.forEach(i=>{i.addEventListener("click",()=>{const l=parseInt(i.getAttribute("data-index"),10);o.slideTo(l)})});const n=document.getElementById("feedbackPrev"),r=document.getElementById("feedbackNext");return n.addEventListener("click",()=>{o.slidePrev(),n.blur()}),r.addEventListener("click",()=>{o.slideNext(),r.blur()}),o}K();R();document.addEventListener("DOMContentLoaded",()=>{new E(".swiper",{modules:[L,U],slidesPerView:1,spaceBetween:30,loop:!1,observer:!0,observeParents:!0,watchOverflow:!0,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})});const w=["https://books-backend.p.goit.global/books/category-list","https://books-backend.p.goit.global/books/top-books","https://books-backend.p.goit.global/books/category?category=","https://books-backend.p.goit.global/books/"];async function Y(){return(await h.get(w[0])).data}async function F(){return(await h.get(w[1])).data}async function Z(e){return(await h.get(w[2]+e)).data}async function z(e){return(await h.get(w[3]+e)).data}const a={book_category_list:document.querySelector(".book-categories-list"),book_category_list_wrap:document.querySelector(".book-categories-list-wrapper"),book_category_button:document.querySelector(".book-categories-list-container"),book_menu_text:document.querySelector(".book-select-menu"),books_list:document.querySelector(".book-list"),book_counter:document.querySelector(".book-counter"),book_show_more_button:document.querySelector(".book-button-show-more"),modal_book:document.querySelector(".modal-book"),modal_book_close_button:document.querySelector(".modal-book-close-button"),modal_book_info:document.querySelector(".modal-book-full-info"),modal_book_buy_button:document.querySelector(".modal-book-buy-button"),modal_book_add_card_button:document.querySelector(".modal-book-cart-button")},t={current_books_count:0,max_books_count:0,current_books_category_is_all:!0,book_list:[],book_list_with_category:[],books_per_page:4},_="/book-universe/assets/sprite-By3KBZBp.svg";function Q(e){const o=e.map(s=>`
        <li class="book-category">${s.list_name}</li>
        `).join("");a.book_category_list.insertAdjacentHTML("beforeend",o)}function g(e,o,s){let c="";for(let n=o;n<s;n++){let r=e[n];c+=`
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
        `}a.books_list.insertAdjacentHTML("beforeend",c)}function x(){a.book_counter.textContent=`Showing ${t.current_books_count} of ${t.max_books_count}`}function X(){a.books_list.innerHTML=""}function ee(){a.modal_book.classList.add("modal--is-open")}function B(){a.modal_book.classList.remove("modal--is-open"),document.body.style.overflow=""}function te(e){a.modal_book_info.innerHTML=`
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
    `}function P(){a.book_show_more_button.style.display=="none"&&(a.book_show_more_button.style.display="block"),t.current_books_count==t.max_books_count&&(a.book_show_more_button.style.display="none")}function I(){a.book_category_list_wrap.style.display==="block"?a.book_category_list_wrap.style.display="none":a.book_category_list_wrap.style.display="block"}async function oe(e){e.target.classList.contains("book-category")&&(e.stopPropagation(),e.target.textContent!=a.book_menu_text.textContent.trim()&&(a.book_menu_text.textContent=e.target.textContent,e.target.textContent=="All categories"?t.current_books_category_is_all=!0:t.current_books_category_is_all=!1,X(),t.current_books_count=window.innerWidth<=767?10:24,t.current_books_category_is_all?(g(t.book_list,0,t.current_books_count),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length):(t.book_list_with_category=await Z(e.target.textContent),t.current_books_count=Math.min(t.book_list_with_category.length,window.innerWidth<=767?10:24),g(t.book_list_with_category,0,t.current_books_count),t.max_books_count=t.book_list_with_category.length),x(),P(),window.innerWidth<1440&&I()))}function N(){j.success({title:"NICEEE",message:"Successfully paid from your card"})}function T(){console.log("Item added: "+document.querySelector(".modal-book-counter").textContent+"0 times, good luck")}async function ne(e){if(!e.target.classList.contains("book-btn"))return;let o=await z(e.target.closest("li").dataset.id);te(o),new W(".accordion-container",{showMultiple:!0}),se(),ee(),document.body.style.overflow="hidden"}function se(){document.querySelector(".modal-book-buy-button").addEventListener("click",N),document.querySelector(".modal-book-cart-button").addEventListener("click",T),document.querySelector(".button-increase").addEventListener("click",V),document.querySelector(".button-decrease").addEventListener("click",D),document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",O)})}function re(){document.querySelector(".modal-book-buy-button").removeEventListener("click",N),document.querySelector(".modal-book-cart-button").removeEventListener("click",T),document.querySelector(".button-increase").removeEventListener("click",V),document.querySelector(".button-decrease").removeEventListener("click",D),document.querySelectorAll(".ac-trigger").forEach(e=>{e.removeEventListener("click",O)})}function O(e){e.target.closest(".ac").classList.contains("is-active")?e.target.querySelector("use").setAttribute("href",`${_}#icon-up-type-one`):e.target.querySelector("use").setAttribute("href",`${_}#icon-down-type-one`)}function V(){document.querySelector(".modal-book-counter").textContent=Number(document.querySelector(".modal-book-counter").textContent)+1}function D(){document.querySelector(".modal-book-counter").textContent=Math.max(Number(document.querySelector(".modal-book-counter").textContent)-1,1)}function ae(){re(),B()}a.modal_book.addEventListener("click",e=>{e.target===a.modal_book&&B()});document.addEventListener("keydown",e=>{e.key==="Escape"&&B()});function ie(){t.current_books_category_is_all?g(t.book_list,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)):g(t.book_list_with_category,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)),t.current_books_count+=Math.min(4,t.max_books_count-t.current_books_count),x(),P()}async function ce(){let e=await Y();e=e.filter(o=>{var s;return(s=o.list_name)==null?void 0:s.trim()}),e.unshift({list_name:"All categories"}),Q(e)}async function le(){let e=await F();t.book_list=e.flatMap(o=>o.books),g(t.book_list,0,window.innerWidth<=767?10:24),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length,x()}le();ce();a.book_category_button.addEventListener("click",I);a.book_category_list.addEventListener("click",oe);a.books_list.addEventListener("click",ne);a.modal_book_close_button.addEventListener("click",ae);a.book_show_more_button.addEventListener("click",ie);
//# sourceMappingURL=index.js.map
