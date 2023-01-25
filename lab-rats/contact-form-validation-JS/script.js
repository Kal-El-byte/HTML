const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
    };

const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
    };

const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea[name="message"]');
const thankYou = document.querySelector('.thank-you');

const inputs = [nameInput, emailInput, phoneInput, messageInput];

let isFormValid = false;

//Call back function to validate input
const resetElm = (e) => {
    e.classList.remove('invalid');
    e.nextElementSibling.classList.add('hidden');
}

//Call back function to check for invalidate input
const invalidateElm = (e) => {
   e.classList.add('invalid');
// e.nameInput.classList.add('invalid');
   e.nextElementSibling.classList.remove('hidden'); //reveal the error thaT was hidden
}
const validateInput = () => {
    isFormValid = true;
    inputs.forEach(resetElm);

    //check for correct value of name input
    if(!nameInput.value) {
        isFormValid = false;
        invalidateElm(nameInput);
    }

    //check for correct value of email input
    if(!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }

    //check for correct value of phone input
    if(!isValidPhone(phoneInput.value)) {
        isFormValid = false;
        invalidateElm(phoneInput);
    }

    if(!messageInput.value) {
        isFormValid = false;
        invalidateElm(messageInput);
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault(); //so the page doesn't refresh
    //call the validateInput function
    validateInput();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove('hidden'); // feedback message after the form is succesfully submitted
    }
});

//iterate for each inputs
inputs.forEach(input => {
    inputs.addEventListener('input', () => {
        validateInput();
    });   
});
