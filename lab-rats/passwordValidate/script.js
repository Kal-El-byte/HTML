// email regex
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
    };

const form = document.querySelector('form');
const username = document.getElementById('username');
const emailInput = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const thankYou = document.querySelector('.thank-you')

let isFormValid = false;

//function to check for valid input
const validateInput = () => {
    username.classList.remove('invalid');
    username.nextElementSibling.classList.add('hidden');
    isFormValid = true;
    if(!username.value) {
        username.classList.add('invalid');
        username.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }

    emailInput.classList.remove('invalid');
    emailInput.nextElementSibling.classList.add('hidden');
    isFormValid = true;
    if(!isValidEmail(emailInput.value)){
        emailInput.classList.add('invalid');
        emailInput.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }

    //check for password validation
    const passwordValue = password.value.trim();

    //Regect password if input is blank
    if(passwordValue === ''){
        setErrorFor(password, 'Can not be blank');
        isFormValid = false;
        
        //password must be at least 8 characetrs and above
    }else if(passwordValue.length <= 7){
        setErrorFor(password, 'Password should contain 8 characters and above');
        isFormValid = false;

        //password must contain a numerical character
    }else if(!passwordValue.match(/[0-9]/i)){
        setErrorFor(password, 'Password must contain a numerical character');
        isFormValid = false;

        //password must contain an uppercase character and a special character or symbol
    }else if(!passwordValue.match(/[^A-Za-z0-9-'']/i)){
        setErrorFor(password, 'Password must contain an uppercase and a special character');
        isFormValid = false;
    }else{
        setSuccessFor(password);
        isFormValid = true;
    };

    //validate the confirm password input
    const password2Value = password2.value.trim();

    //input must not be blank
    if(password2Value === ''){
        setErrorFor(password2, 'Password does not match');
        isFormValid = false;

    //check if password value matches with confirm password value
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Password does not match');
        isFormValid = false;
    }else{
        setSuccessFor(password2);
        isFormValid = true;
    }
};

//an event listener for the submit button 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
    if(isFormValid){
        form.remove(); // remove form if isFormValid is true
        thankYou.classList.remove('hidden'); //feedback messgae if the form is succeful
    }
});


//function to return an error message if the password value is invalid
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside the small tag
    small.innerText = message;

    //add error class
    formControl.classList = 'form-group error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.classList = 'form-group success';
}

//function to toggle the eye icon
let is_visible = false;

//function to make the password vissible
function see(){
    var input = document.getElementById('password');
    var see = document.getElementById('see');

    if(is_visible){
        input.type = 'password';
        is_visible = false;
        see.style.color = 'gray';
    }else{
        input.type = 'text';
        is_visible = true;
        see.style.color = '#262626';
    }
}

//function to make the confirm password vissible
function see2(){
    var input2 = document.getElementById('password2')
    var see = document.getElementById('see2');

    if(is_visible){
        input2.type = 'password';
        is_visible = false;
        see.style.color = 'gray';
    }else{
        input2.type = 'text';
        is_visible = true;
        see.style.color = '#262626';
    }
}