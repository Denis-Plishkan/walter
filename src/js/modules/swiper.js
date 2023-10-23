import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

function heroSwiper() {
  let swiper = new Swiper(".hero__swiper", {
    direction: "vertical",
    slidesPerView: "auto",
    pagination: {
      el: ".hero__swiper-pagination-round",
    },
  });

  const swiperRounds = document.querySelectorAll(
    ".hero__swiper-pagination-round"
  );
  swiper.on("slideChange", () => {
    swiperRounds.forEach((swiperRound, index) => {
      if (index === swiper.realIndex) {
        swiperRound.classList.add("active");
      } else {
        swiperRound.classList.remove("active");
      }
    });
  });
}

heroSwiper();

