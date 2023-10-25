function lockScaling() {
  if (window.innerWidth > 1200) {
    window.addEventListener(
      "wheel",
      function (event) {
        if (event.ctrlKey === true) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
  }
}

lockScaling();
