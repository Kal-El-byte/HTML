var loginform = document.getElementById('login');
var button = document.getElementById('buttons');
var registerform = document.getElementById('register');
function login(){
    loginform.style.display="block"
    loginform.style.animation="drop 2s 1";
    button.style.display="none"
}

function sign(){
    registerform.style.display="block"
    registerform.style.animation="drop 2s 1";
    button.style.display="none"
}

function closelog() {
    loginform.style.display="none"
    button.style.display="block"
}

function closereg(){
    registerform.style.display="none"
    button.style.display="block";
}