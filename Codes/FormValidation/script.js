//email regex
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
    };

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the value from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === "") {
        //show error
        //add error class
        setErrorfor(username, 'User name cannot be blank')
    }else{
        //add success class
        setSuccessfor(username)
    }

    if(emailValue === '') {
        setErrorfor(email, 'email cannot be empty')
    }else if (!isValidEmail(emailValue)){
        setErrorfor(email, 'email is not valid')
    }else{
        setSuccessfor(email)
    }

    if(passwordValue === '') {
        setErrorfor(password, 'Password cannot be blank')
    }else{
        setSuccessfor(password)
    }

    if(passwordValue !== password2Value) {
        setErrorfor(password2, 'Password does not match')
    }else if (password2Value === '') {
        setErrorfor(password2, 'password cannot be blank')
    }else{
        setSuccessfor(password2)
    }
}

function setErrorfor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small 

    small.innerText = message;
    
    // add error class
    formControl.classList = 'form-control error';
}

function setSuccessfor(input) {
    const formControl = input.parentElement;
    formControl.classList = 'form-control success';
}