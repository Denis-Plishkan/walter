import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);


function thesisSwiper() {
  let swiper = new Swiper(".thesis__swiper", {
    spaceBetween: 24,
    slidesPerview: 'auto',
    loop: true,
    autoplay: {
      delay: 1500,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 260,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 248
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 0,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}

thesisSwiper();


