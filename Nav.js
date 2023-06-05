// window.addEventListener('scroll', function () {
//     const header = document.querySelector('header');
//     header.classList.toggle("sticky", window.scrollY > 0)
// });

// js for faqs hide and show

// const faqs = document.querySelectorAll('.faq');

// faqs.forEach(faq => {
//     faq.addEventListener('click', () => {
//         faq.classList.toggle('open');

//         //Change icon
//         const icon = faq.querySelector('.faq_icon i');
//         if (icon.className === 'uil uil-plus') {
//             icon.className = "uil uil-minus";
//         } else {
//             icon.className = "uil uil-plus";
//         }
//     })
// })

// JavaScript for testimonials
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },

//     // When windows width is 600px
//     breakpoints: {
//         750: {
//             slidesPerView: 2
//         }
//     }
// });