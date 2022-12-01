$(document).ready(function() {
//Validate Username
$("#usercheck").hide();
var usernameError = true;
$("#usernames").keyup(function (){
    validateUsername();
});

function validateUsername() {
    var usernameValue = $("#usernames").val();
    if (usernameValue.length == " ") {
        $("#usercheck").show();
        usernameError = false;
        return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 10) {
        $("#usercheck").show();
        $("#usercheck").html("**Length of username must be between 3 and 10");
        usernameError = false;
        return false;
    }else{
        $("#usercheck").hide();
    }
}

//Validate Email
const email = document.getElementById("email");
email.addEventListener("blur", () => {
    var regex =/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z] ){2,7}$/;
    var s = email.value;
    if(regex.test(s)) {
        email.classList.remove("is-invalid");
        emailError = true;
    } else {
        email.classList.add("is-invalid");
        emailError = false;
    }
});

// Validate Password
$("#passcheck").hide();
var passwordError = true;
$("#password").keyup(function (){
    validatePassword();
});

function validatePassword() {
    var passwordValue = $("#password").val();
    if(passwordValue.length == "") {
        $("#passcheck").show();
        passwordError = false;
        return false;
    }
    if(passwordValue.length < 3 || passwordValue.length > 10) {
        $('#passcheck').show();
        $('#passcheck').html("**length of your password must be between 3 and 10");
        $("#passcheck").css("color", "red");
        passwordError = false;
        return false;
    }else{
        $("#passcheck").hide();
    }
}

//Validate Confirm Password

$("#conpasscheck").hide();
var confirmPasswordError = true;
$("#conpassedword").keyup(function(){
    validateConfirmPassword();
});

function validateConfirmPassword() {
    var confirmPasswordValue = $("#password").val();
    if(passwordValue != confirmPasswordValue) {
        $("#conpasscheck").show();
        $("#conpasscheck").html("**Password didn't Match");
        $("#conpasscheck").css("color", "red");
        confirmPasswordError = false;
        return false;
    }else{
        $("#conpasscheck").hide();
    }
}

//Submit button
$("#submitbtn").click(function(){
    validateUsername();
    validatePassword();
    validateConfirmPassword();
    validateEmail();
    if (
        usernameError == true &&
        passwordError == true &&
        confirmPasswordError == true && 
        emailError == true
    ) {
        return true;

    }else{
        return false
    }
});

});