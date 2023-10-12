function burger() {
    const burger = document.querySelector(".icon-menu ");
    const burgerMenu = document.querySelector(".menu");
  
    const body = document.querySelector("body");
    if (burger) {
      burger.addEventListener("click", () => {
        burgerMenu.classList.toggle("_active");
        burger.classList.toggle("_active");
        body.classList.toggle("_lock");
      });
    }
  }
  
  burger();