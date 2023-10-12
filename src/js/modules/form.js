function contactsForm () {
    const contactsForm = document.querySelectorAll(".contacts__form-group");
    
    contactsForm.forEach((contactForm) => {
        const input = contactForm.querySelector('input');
        const span = contactForm.querySelector('span');

        input.addEventListener("focus", () => {
            span.classList.add('active');
        })
        input.addEventListener("blur", () => {
            span.classList.remove('active');
        }) 
    })
}

contactsForm();