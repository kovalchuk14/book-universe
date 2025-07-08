import{S,N as B,K as T,A as I,P as O,a as f,b as U,i as V}from"./assets/vendor-CvYJyY29.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".events-btn"),o=document.getElementById("contact-modal-backdrop"),i=document.getElementById("contact-close-modal-btn"),c=document.getElementById("contact-event-title"),n=document.getElementById("contact-register-form"),s=n.querySelectorAll("input, textarea");let a=0;e.forEach(d=>{d.addEventListener("click",u=>{const b=u.currentTarget.dataset.event;c.textContent=b,o.classList.add("is-visible"),a=window.pageYOffset,document.documentElement.classList.add("modal-open"),document.body.classList.add("modal-open"),document.body.style.top=`-${a}px`})}),i.addEventListener("click",l),o.addEventListener("click",d=>{d.target===o&&l()}),document.addEventListener("keydown",d=>{d.key==="Escape"&&o.classList.contains("is-visible")&&l()});function l(){o.classList.remove("is-visible"),document.documentElement.classList.remove("modal-open"),document.body.classList.remove("modal-open"),document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.overflow="",window.scrollTo(0,a),n.reset(),s.forEach(d=>{d.classList.remove("error");const u=d.nextElementSibling;u&&u.classList.contains("error-text")&&(u.style.display="none")})}n.addEventListener("submit",m);function m(d){d.preventDefault();let u=!0;s.forEach(b=>{const k=b.nextElementSibling,g=b.value.trim();let _=!0;b.name==="name"&&(g===""?(_=!1,k.textContent="Please enter your name"):/\d/.test(g)?(_=!1,k.textContent="Name cannot contain numbers"):g.length>50&&(_=!1,k.textContent="Name must be up to 50 characters")),b.name==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)&&(_=!1,k.textContent="Please enter a valid email"),_?(b.classList.remove("error"),k.style.display="none"):(b.classList.add("error"),u=!1,k.style.display="block")}),u&&(console.log("Форма валідна!"),n.reset(),l())}});const L="/book-universe/assets/women-one-BnSHht3A.jpg",E="/book-universe/assets/man-one-BGYlt4N7.jpg",x="/book-universe/assets/women-two-D6Gk07ZQ.jpg",W=[{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:L},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:E},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:x},{text:"Great selection, fast delivery, and beautifully packaged books. My go-to store for weekend reads!",author:"Jane Doe",title:"Book Lover, Reader",alt:"User Avatar",avatar:x},{text:"Customer service was super helpful, and my order arrived earlier than expected. Highly recommend!",author:"John Smith",title:"Editor, BookMag",alt:"User Avatar",avatar:E},{text:"Love the curated picks and clear descriptions. Makes it easy to find my next favorite book. I like it!",author:"Emily Johnson",title:"Author, Novelist",alt:"User Avatar",avatar:L}];function H(){const e=document.querySelector(".feedbackSwiper .swiper-wrapper");W.forEach(o=>{const i=document.createElement("li");i.classList.add("swiper-slide"),i.innerHTML=`
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
    `,e.appendChild(i)})}function j(){const e=document.querySelectorAll(".control-btn"),o=new S(".feedbackSwiper",{modules:[B,T,I],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:"#feedbackNext",prevEl:"#feedbackPrev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:{enabled:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{slideChange(a){i(a),c(a)},afterInit(a){i(a),c(a)}}});function i(a){const l=document.getElementById("feedbackPrev"),m=document.getElementById("feedbackNext");l.disabled=a.isBeginning,m.disabled=a.isEnd}function c(a){e.forEach((l,m)=>{l.classList.toggle("active",m===a.realIndex)})}e.forEach(a=>{a.addEventListener("click",()=>{const l=parseInt(a.getAttribute("data-index"),10);o.slideTo(l)})});const n=document.getElementById("feedbackPrev"),s=document.getElementById("feedbackNext");return n.addEventListener("click",()=>{o.slidePrev(),n.blur()}),s.addEventListener("click",()=>{o.slideNext(),s.blur()}),o}H();j();document.addEventListener("DOMContentLoaded",()=>{new S(".swiper",{modules:[B,O],slidesPerView:1,spaceBetween:30,loop:!1,observer:!0,observeParents:!0,watchOverflow:!0,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})});const v=["https://books-backend.p.goit.global/books/category-list","https://books-backend.p.goit.global/books/top-books","https://books-backend.p.goit.global/books/category?category=","https://books-backend.p.goit.global/books/"];async function D(){return(await f.get(v[0])).data}async function J(){return(await f.get(v[1])).data}async function G(e){return(await f.get(v[2]+e)).data}async function K(e){return(await f.get(v[3]+e)).data}const r={book_category_list:document.querySelector(".book-categories-list"),book_category_list_wrap:document.querySelector(".book-categories-list-wrapper"),book_category_button:document.querySelector(".book-categories-list-container"),book_menu_text:document.querySelector(".book-select-menu"),books_list:document.querySelector(".book-list"),book_counter:document.querySelector(".book-counter"),book_show_more_button:document.querySelector(".book-button-show-more"),modal_book:document.querySelector(".modal-book"),modal_book_close_button:document.querySelector(".modal-book-close-button"),modal_book_info:document.querySelector(".modal-book-full-info"),modal_book_buy_button:document.querySelector(".modal-book-buy-button"),modal_book_add_card_button:document.querySelector(".modal-book-cart-button")},t={current_books_count:0,max_books_count:0,current_books_category_is_all:!0,book_list:[],book_list_with_category:[],books_per_page:4},y="/book-universe/assets/sprite-C3UW0zoa.svg";function R(e){const o=e.map(i=>`
        <li class="book-category">${i.list_name}</li>
        `).join("");r.book_category_list.insertAdjacentHTML("beforeend",o)}function p(e,o,i){let c="";for(let n=o;n<i;n++){let s=e[n];c+=`
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
        `}r.books_list.insertAdjacentHTML("beforeend",c)}function h(){r.book_counter.textContent=`Showing ${t.current_books_count} of ${t.max_books_count}`}function Y(){r.books_list.innerHTML=""}function F(){r.modal_book.classList.add("modal--is-open")}function w(){r.modal_book.classList.remove("modal--is-open"),document.body.style.overflow=""}function z(e){r.modal_book_info.innerHTML=`
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
                            <use href="${y}#icon-down-type-one"></use>
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
                            <use href="${y}#icon-down-type-one"></use>
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
                            <use href="${y}#icon-down-type-one"></use>
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
    `}function q(){r.book_show_more_button.style.display=="none"&&(r.book_show_more_button.style.display="block"),t.current_books_count==t.max_books_count&&(r.book_show_more_button.style.display="none")}function C(){r.book_category_list_wrap.style.display==="block"?r.book_category_list_wrap.style.display="none":r.book_category_list_wrap.style.display="block"}async function Q(e){e.target.classList.contains("book-category")&&(e.stopPropagation(),e.target.textContent!=r.book_menu_text.textContent.trim()&&(r.book_menu_text.textContent=e.target.textContent,e.target.textContent=="All categories"?t.current_books_category_is_all=!0:t.current_books_category_is_all=!1,Y(),t.current_books_count=window.innerWidth<=767?10:24,t.current_books_category_is_all?(p(t.book_list,0,t.current_books_count),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length):(t.book_list_with_category=await G(e.target.textContent),t.current_books_count=Math.min(t.book_list_with_category.length,window.innerWidth<=767?10:24),p(t.book_list_with_category,0,t.current_books_count),t.max_books_count=t.book_list_with_category.length),h(),q(),window.innerWidth<1440&&C()))}function M(){V.success({title:"NICEEE",message:"Successfully paid from your card"})}function $(){console.log("Item added: "+document.querySelector(".modal-book-counter").textContent+"0 times, good luck")}async function Z(e){if(!e.target.classList.contains("book-btn"))return;let o=await K(e.target.closest("li").dataset.id);z(o),new U(".accordion-container",{showMultiple:!0}),X(),F(),document.body.style.overflow="hidden"}function X(){document.querySelector(".modal-book-buy-button").addEventListener("click",M),document.querySelector(".modal-book-cart-button").addEventListener("click",$),document.querySelector(".button-increase").addEventListener("click",P),document.querySelector(".button-decrease").addEventListener("click",N),document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",A)})}function ee(){document.querySelector(".modal-book-buy-button").removeEventListener("click",M),document.querySelector(".modal-book-cart-button").removeEventListener("click",$),document.querySelector(".button-increase").removeEventListener("click",P),document.querySelector(".button-decrease").removeEventListener("click",N),document.querySelectorAll(".ac-trigger").forEach(e=>{e.removeEventListener("click",A)})}function A(e){e.target.closest(".ac").classList.contains("is-active")?e.target.querySelector("use").setAttribute("href",`${y}#icon-up-type-one`):e.target.querySelector("use").setAttribute("href",`${y}#icon-down-type-one`)}function P(){document.querySelector(".modal-book-counter").textContent=Number(document.querySelector(".modal-book-counter").textContent)+1}function N(){document.querySelector(".modal-book-counter").textContent=Math.max(Number(document.querySelector(".modal-book-counter").textContent)-1,1)}function te(){ee(),w()}r.modal_book.addEventListener("click",e=>{e.target===r.modal_book&&w()});document.addEventListener("keydown",e=>{e.key==="Escape"&&w()});function oe(){t.current_books_category_is_all?p(t.book_list,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)):p(t.book_list_with_category,t.current_books_count,t.current_books_count+Math.min(4,t.max_books_count-t.current_books_count)),t.current_books_count+=Math.min(4,t.max_books_count-t.current_books_count),h(),q()}async function ne(){let e=await D();e=e.filter(o=>{var i;return(i=o.list_name)==null?void 0:i.trim()}),e.unshift({list_name:"All categories"}),R(e)}async function se(){let e=await J();t.book_list=e.flatMap(o=>o.books),p(t.book_list,0,window.innerWidth<=767?10:24),t.current_books_count=Math.min(t.book_list.length,window.innerWidth<=767?10:24),t.max_books_count=t.book_list.length,h()}se();ne();r.book_category_button.addEventListener("click",C);r.book_category_list.addEventListener("click",Q);r.books_list.addEventListener("click",Z);r.modal_book_close_button.addEventListener("click",te);r.book_show_more_button.addEventListener("click",oe);
//# sourceMappingURL=index.js.map
