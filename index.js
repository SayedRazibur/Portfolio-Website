// =========================================================
//                 Mobile Nav Section Star                   
// =========================================================

const navbar= document.querySelector(".navbar")
const ham_btn= document.querySelector(".ham-btn")

ham_btn.addEventListener("click",()=>{
    navbar.classList.toggle("active")
    ham_btn.classList.toggle("active-ham-btn")
})



// =========================================================
//                 Portfolio Section Star                   
// =========================================================

// Portfolio tabbed component
 const p_btns=document.querySelector(".p-btns");
 const p_btn=document.querySelectorAll(".p-btn");
 const img_overlay=document.querySelectorAll(".img-overlay");

 p_btns.addEventListener("click",(a)=>{
    const p_btn_clicked= a.target;
    p_btn.forEach((b)=> b.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");
    
    const btn_data_num = p_btn_clicked.dataset.btnNum;
    img_overlay.forEach((c)=>c.classList.add("portfolio-image-not-active"));

    const active_img_overlay = document.querySelectorAll(`.p-btn--${btn_data_num}`);
   active_img_overlay.forEach((d)=>d.classList.remove("portfolio-image-not-active"));
});


// ========================================
//             Scroll to Top
// ========================================
const footerElm = document.querySelector(".footer-section");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

// I am adding the button element inside the div element
scrollElement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// add to the bottom of the page
footerElm.after(scrollElement);

// deleting the dom element
const hero_section = document.querySelector(".hero-section");
const scrollTop = () => {
    hero_section.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);

// ========================================
//  animated counter number
// ========================================
const workSection = document.querySelector(".work-data-section");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);

    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 100;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }
        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});
workSecObserver.observe(workSection);


// Slider Section

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
        delay: 2000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1900: {
          slidesPerView: 4,
          spaceBetween: 50,}
        }
  });