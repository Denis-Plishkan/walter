function circle() {
  const slider = document.querySelector(".slider");
  const circle = document.querySelector(".circle");
  const valueSpan = document.querySelector(".value-span");
  const start = document.querySelector("#start");
  const radius = circle.offsetWidth / 2;
  const steps = 100;
  let circleValue = 0;

  slider.style.left = radius + "px";
  slider.style.top = "0";

  slider.addEventListener("mousedown", startDrag);
  slider.addEventListener("touchstart", startDrag);

  function startDrag(e) {
    e.preventDefault();

    document.addEventListener("mousemove", moveSlider);
    document.addEventListener("touchmove", moveSlider);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);
  }

  function moveSlider(e) {
    const mouseX = e.clientX || e.touches[0].clientX;
    const mouseY = e.clientY || e.touches[0].clientY;

    const circleRect = circle.getBoundingClientRect();
    const angle = Math.atan2(
      mouseY - circleRect.top - radius,
      mouseX - circleRect.left - radius
    );
    const stepSize = (2 * Math.PI) / steps;

    const startAngle = -Math.PI / 2;

    let closestStep = Math.round((angle - startAngle) / stepSize);
    closestStep = (closestStep + steps) % steps;

    const newX = radius * Math.cos(startAngle + closestStep * stepSize);
    const newY = radius * Math.sin(startAngle + closestStep * stepSize);

    slider.style.left = newX + radius + "px";
    slider.style.top = newY + radius + "px";

    const percentage = (closestStep / steps) * 335;
    valueSpan.textContent = Math.round(percentage);

    percentage === 0
      ? start.classList.add("hide")
      : start.classList.remove("hide");

    circleValue = Math.round(percentage);

    updateCircle(percentage);
    circleUpdateState();
  }

  function stopDrag(e) {
    document.removeEventListener("mousemove", moveSlider);
    document.removeEventListener("touchmove", moveSlider);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchend", stopDrag);
  }

  function updateCircle(percentage) {
    const circlePath = document.getElementById("circle-path");
    const circumference = 2 * Math.PI * radius;
    const initialOffset = circumference - circumference * (percentage / -335);

    circlePath.style.strokeDasharray = circumference;
    circlePath.style.strokeDashoffset = initialOffset;
  }

  updateCircle(0);
}

circle();

function updateClass() {
  const cirlceSlide = document.getElementById("circleSlide");

  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseover", (e) => {
    cirlceSlide.classList.add("swiper-no-swiping");
  });
  slider.addEventListener("mouseout", (e) => {
    cirlceSlide.classList.remove("swiper-no-swiping");
  });
}

updateClass();

function circleUpdateClasses() {
  const selectors = document.querySelectorAll("#circle-wrapp");

  selectors.forEach((selector) => {
    selector.addEventListener("click", () => {
      selectors.forEach((otherSelector) => {
        if (otherSelector !== selector) {
          otherSelector.classList.remove("active");
        }
      });

      selector.classList.add("active");
      circleUpdateState();
    });
  });
}

circleUpdateClasses();

function circleUpdateState() {
  const circle = document.querySelector(".value-span");
  const circlePrice = document.querySelector(".circle__price");
  let totalPrice = 0;

  const circleWraps = document.querySelectorAll("#circle-wrapp");
  circleWraps.forEach((circleWrap) => {
    if (circleWrap.classList.contains("active")) {
      const text = circleWrap.querySelector(".circle__wrap-text");
      const textContent = text.textContent;
      if (textContent.trim() === "Elite") {
        totalPrice = 3640.625 * circle.textContent;
        circlePrice.textContent = `${totalPrice
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} UAH`;
      } else if (textContent.trim() === "Vip") {
        totalPrice = 5000 * circle.textContent;
        circlePrice.textContent = `${totalPrice
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} UAH`;
      } else if (textContent.trim() === "Extra") {
        totalPrice = 6000 * circle.textContent;
        circlePrice.textContent = `${totalPrice
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} UAH`;
      }
    }
  });
}
