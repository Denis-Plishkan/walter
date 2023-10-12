function freqDropdown() {
  const dropdowns = document.querySelectorAll(".freq__inner-ul");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      const dropdownMenu = dropdown.querySelector(".dropdown-toggle");
      const dropdownSvg = dropdown.querySelector("svg");
      const dropdownText = dropdown.querySelector("p");

      if (e.target !== dropdownText) {
        dropdownMenu.classList.toggle("active");
        dropdownSvg.classList.toggle("active");
      }
    });
  });
}

freqDropdown();

function askedDropdown() {
  const dropdowns = document.querySelectorAll(".asked__inner-ul");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      const dropdownMenu = dropdown.querySelector(".dropdown-toggle");
      const dropdownSvg = dropdown.querySelector("svg");
      const dropdownText = dropdown.querySelector("p");

      if (e.target !== dropdownText) {
        dropdownMenu.classList.toggle("active");
        dropdownSvg.classList.toggle("active");
      }
    });
  });
}

askedDropdown();

function headerDropdown() {
  const dropdown = document.querySelector(".header__dropdown");
  const items = dropdown.querySelectorAll(".dropdown-menu li");
  const labelText = dropdown.querySelector(".label-text");
  const label = dropdown.querySelector(".dropdown-label");
  const menu = dropdown.querySelector(".dropdown-menu");

  label.addEventListener("click", () => {
    menu.classList.toggle("active");
    label.classList.toggle("active");
  });

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      labelText.textContent = e.target.textContent;
      menu.classList.remove("active");
      label.classList.remove("active");
    });
  });
}

headerDropdown();


function footerDropdown() {
  const dropdown = document.querySelector(".footer__dropdown");
  const items = dropdown.querySelectorAll(".dropdownFooter-menu li");
  const labelText = dropdown.querySelector(".label-text");
  const label = dropdown.querySelector(".dropdownFooter-label");
  const menu = dropdown.querySelector(".dropdownFooter-menu");

  label.addEventListener("click", () => {
    menu.classList.toggle("active");
    label.classList.toggle("active");
  });

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      labelText.textContent = e.target.textContent;
      menu.classList.remove("active");
      label.classList.remove("active");
    });
  });
}

footerDropdown();
