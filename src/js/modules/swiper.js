import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);


function heroSwiper() {
  let swiper = new Swiper(".hero__swiper", {
    // spaceBetween: 24,
    direction: 'vertical',
    // slidesPerview: 'auto',
    loop: true,
  });
}

heroSwiper();


