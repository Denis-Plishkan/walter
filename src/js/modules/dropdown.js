function heroThreeDropdown() {
  const dropdowns = document.querySelectorAll(".hero__page-three-wrap");

  dropdowns.forEach((dropdown) => {
    const text = dropdown.querySelector(".hero__page-three-text");
    const title = dropdown.querySelector(".hero__page-three-title");
    const img = dropdown.querySelector("img");
    const button = dropdown.querySelector(".three__button-top");
    
    if (window.innerWidth < 998) {
      dropdown.addEventListener("click", (e) => {
        e.preventDefault();
        if (
          text.style.display === "none" ||
          (text.style.display === "" && button.style.display === "none" ||
          button.style.display === "")
        ) {
          text.style.display = "block";
          button.style.display = "flex";
          img.classList.add("active");
          title.classList.add("active");
        } else {
          text.style.display = "none";
          button.style.display = "none";
          img.classList.remove("active");
          title.classList.remove("active");
        }
      });
    }

   
  });
}

heroThreeDropdown();
