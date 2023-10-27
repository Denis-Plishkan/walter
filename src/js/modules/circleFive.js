// function circleFive() {
//     const slider = document.querySelector(".slider-five");
//     const circle = document.querySelector(".circle-five");
//     const valueSpan = document.querySelector(".value-five-span");
//     const start = document.querySelector("#start-five");
//     const radius = circle.offsetWidth / 2;
//     console.log(circle.offsetWidth);
//     console.log(radius);
//     const steps = 6;
//     let circleValue = 0;

//     slider.style.left = radius + "px";
//     slider.style.top = "0";
  
//     slider.addEventListener("mousedown", startDrag);
//     slider.addEventListener("touchstart", startDrag);

//     function startDrag(e) {
//         e.preventDefault();
    
//         document.addEventListener("mousemove", moveSlider);
//         document.addEventListener("touchmove", moveSlider);
//         document.addEventListener("mouseup", stopDrag);
//         document.addEventListener("touchend", stopDrag);
//       }
    
//       function moveSlider(e) {
//         const mouseX = e.clientX || e.touches[0].clientX;
//         const mouseY = e.clientY || e.touches[0].clientY;
    
//         const circleRect = circle.getBoundingClientRect();
//         const angle = Math.atan2(
//           mouseY - circleRect.top - radius,
//           mouseX - circleRect.left - radius
//         );
//         const stepSize = (2 * Math.PI) / steps;
    
//         const startAngle = -Math.PI / 2;
    
//         let closestStep = Math.round((angle - startAngle) / stepSize);
//         closestStep = (closestStep + steps) % steps;
//         log
    
//         const newX = radius * Math.cos(startAngle + closestStep * stepSize);
//         const newY = radius * Math.sin(startAngle + closestStep * stepSize);
    
//         slider.style.left = newX + radius + "px";
//         slider.style.top = newY + radius + "px";
    
//         const percentage = (closestStep / steps) * 6;
//         valueSpan.textContent = Math.round(percentage);
    
//         percentage === 1
//           ? start.classList.add("hide")
//           : start.classList.remove("hide");
    
//         circleValue = Math.round(percentage);
    
//         updateCircle(percentage);
//       }
    
//       function stopDrag(e) {
//         document.removeEventListener("mousemove", moveSlider);
//         document.removeEventListener("touchmove", moveSlider);
//         document.removeEventListener("mouseup", stopDrag);
//         document.removeEventListener("touchend", stopDrag);
//       }
    
//       function updateCircle(percentage) {
//         const circlePath = document.querySelector(".circle-five-path");
//         const circumference = 2 * Math.PI * radius;
//         const initialOffset = circumference - circumference * (percentage / -6);
    
//         circlePath.style.strokeDasharray = circumference;
//         circlePath.style.strokeDashoffset = initialOffset;
//       }
    
//       updateCircle(0);
// }
// circleFive();

function circleFive() {
    const slider = document.querySelector(".slider-five");
    const circle = document.querySelector(".circle-five");
    const valueSpan = document.querySelector(".value-five-span");
    const start = document.querySelector("#start-five");
    const radius = circle.offsetWidth / 2;
    console.log(circle.offsetWidth);
    console.log(radius);
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
        const circlePath = document.querySelector(".circle-five-path");
        const circumference = 2 * Math.PI * radius;
        const initialOffset = -circumference * (1 - percentage / 6);
        console.log(initialOffset);

        circlePath.style.strokeDasharray = circumference;
        circlePath.style.strokeDashoffset = initialOffset;
    }

    updateCircle(0);
}

circleFive();

function updateCircleFiveClass() {
    const cirlceSlide = document.querySelector(".circle-five-slide");
  
    const slider = document.querySelector(".slider-five");
    slider.addEventListener("mouseover", (e) => {
      cirlceSlide.classList.add("swiper-no-swiping");
    });
    slider.addEventListener("mouseout", (e) => {
      cirlceSlide.classList.remove("swiper-no-swiping");
    });
  }
  
  updateCircleFiveClass();