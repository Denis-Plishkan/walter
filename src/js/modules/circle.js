function circle() {
  const slider = document.querySelector(".slider");
  const circle = document.querySelector(".circle");
  const valueSpan = document.querySelector(".value-span");
  const start = document.querySelector("#start");
  const radius = circle.offsetWidth / 2;
  const steps = 100;

  slider.style.left = radius + "px";
  slider.style.top = "0";

  // Обработчик события "mousedown" для десктопных устройств
  slider.addEventListener("mousedown", startDrag);

  // Обработчик события "touchstart" для мобильных устройств
  slider.addEventListener("touchstart", startDrag);

  function startDrag(e) {
    e.preventDefault();

    // Обработчик события "mousemove" для десктопных устройств
    document.addEventListener("mousemove", moveSlider);

    // Обработчик события "touchmove" для мобильных устройств
    document.addEventListener("touchmove", moveSlider);

    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);
  }

  function moveSlider(e) {
    e.preventDefault();

    const mouseX = e.clientX || e.touches[0].clientX;
    const mouseY = e.clientY || e.touches[0].clientY;

    const circleRect = circle.getBoundingClientRect();
    const angle = Math.atan2(mouseY - circleRect.top - radius, mouseX - circleRect.left - radius);
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

    updateCircle(percentage);
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
    console.log(e);
    cirlceSlide.classList.add("swiper-no-swiping")
  });
  slider.addEventListener("mouseout", (e) => {
    cirlceSlide.classList.remove("swiper-no-swiping")
  });
}

updateClass();

function circleUpdateClasses() {
  const selectors = document.querySelectorAll('#circle-wrapp');

  selectors.forEach((selector) => {
    selector.addEventListener('click', () => {
      selectors.forEach((otherSelector) => {
        if (otherSelector !== selector) {
          otherSelector.classList.remove('active');
        }
      });
      
      selector.classList.add('active');
    })
  })
}

circleUpdateClasses()
