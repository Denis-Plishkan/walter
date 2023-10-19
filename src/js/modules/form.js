function heroForm () {
    const buttons = document.querySelectorAll(".hero__form-button");
    
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
        })
    })
}

heroForm();