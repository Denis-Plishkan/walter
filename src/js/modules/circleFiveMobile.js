function circleFiveMobile() {
  const slider = document.querySelector(".slider-five-mobile");
  const circle = document.querySelector(".circle-five-mobile");
  const valueSpan = document.querySelector(".value-five-span-mobile");
  const start = document.querySelector("#start-one-mobile");
  const radius = circle.offsetWidth / 2;
  const steps = 6;
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

    const percentage = (closestStep / steps) * 6;
    valueSpan.textContent = Math.round(percentage) + 1;

    percentage === 0
      ? start.classList.add("hide")
      : start.classList.remove("hide");

    circleValue = Math.round(percentage);

    updateCircle(percentage);
  }

  function stopDrag(e) {
    document.removeEventListener("mousemove", moveSlider);
    document.removeEventListener("touchmove", moveSlider);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchend", stopDrag);
  }

  function updateCircle(percentage) {
    const circlePath = document.querySelector(".circle-five-path-mobile");
    const screenWidth = window.innerWidth;
    let circumference;

    if (screenWidth < 590) {
      circumference = 2.6 * Math.PI * radius;
    } else {
      circumference = 2 * Math.PI * radius;
    }
    const initialOffset = -circumference * (1 - percentage / 6);

    circlePath.style.strokeDasharray = circumference;
    circlePath.style.strokeDashoffset = initialOffset;

    updateCircleWrapper();
  }

  updateCircle(0);

  function updateCircleWrapper() {
    const spanValue = valueSpan.textContent;
    const circleWrapperOne = document.querySelector(
      ".circle-five__wrapper-one-mobile"
    );
    const circleWrapperTwo = document.querySelector(
      ".circle-five__wrapper-two-mobile"
    );
    const circleWrapperThree = document.querySelector(
      ".circle-five__wrapper-three-mobile"
    );
    const circleWrapperFour = document.querySelector(
      ".circle-five__wrapper-four-mobile"
    );
    const circleWrapperFive = document.querySelector(
      ".circle-five__wrapper-five-mobile"
    );
    const circleWrapperSix = document.querySelector(
      ".circle-five__wrapper-six-mobile"
    );

    if (spanValue === "1") {
      circleWrapperOne.style.display = "flex";
      circleWrapperTwo.style.display = "none";
      circleWrapperSix.style.display = "none";
    } else if (spanValue === "2") {
      circleWrapperTwo.style.display = "flex";
      circleWrapperOne.style.display = "none";
      circleWrapperThree.style.display = "none";
    } else if (spanValue === "3") {
      circleWrapperThree.style.display = "flex";
      circleWrapperTwo.style.display = "none";
      circleWrapperFour.style.display = "none";
    } else if (spanValue === "4") {
      circleWrapperFour.style.display = "flex";
      circleWrapperThree.style.display = "none";
      circleWrapperFive.style.display = "none";
    } else if (spanValue === "5") {
      circleWrapperFive.style.display = "flex";
      circleWrapperFour.style.display = "none";
      circleWrapperSix.style.display = "none";
    } else if (spanValue === "6") {
      circleWrapperSix.style.display = "flex";
      circleWrapperFive.style.display = "none";
      circleWrapperOne.style.display = "none";
    }
  }
}

circleFiveMobile();
