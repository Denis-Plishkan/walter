
function heroThreeDropdown() {
  const dropdowns = document.querySelectorAll(".hero__page-three-wrap");
  let activeDropdown = null;

  dropdowns.forEach((dropdown) => {
    const text = dropdown.querySelector(".hero__page-three-text");
    const title = dropdown.querySelector(".hero__page-three-title");
    const img = dropdown.querySelector("img");
    const button = dropdown.querySelector(".three__button-top");

    if (window.innerWidth < 998) {
      dropdown.addEventListener("click", (e) => {
        e.preventDefault();

        if (activeDropdown !== dropdown) {
          if (activeDropdown) {
            const activeText = activeDropdown.querySelector(".hero__page-three-text");
            const activeButton = activeDropdown.querySelector(".three__button-top");
            const activeImg = activeDropdown.querySelector("img");
            const activeTitle = activeDropdown.querySelector(".hero__page-three-title");

            activeText.style.display = "none";
            activeButton.style.display = "none";
            activeImg.classList.remove("active");
            activeTitle.classList.remove("active");
            activeText.classList.remove("active");
          }

          text.style.display = "block";
          button.classList.add("active");
          img.classList.add("active");
          title.classList.add("active");
          text.classList.add("active");

          activeDropdown = dropdown;
        } else {
          text.style.display = "none";
          img.classList.remove("active");
          title.classList.remove("active");
          text.classList.remove("active");
          activeDropdown = null;
          button.classList.remove("active");
        }
      });
    }
  });
}

heroThreeDropdown();
