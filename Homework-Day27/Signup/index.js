import * as confirm from "./module.js"

const signForm = document.getElementById("signup-form");

signForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let flag = true;
    // Check tên đăng nhập
    if (confirm.nickValidation()) {
        confirm.nickValid(); 
    } else {
        confirm.nickInvalid(); 
        flag = false;
    }

    // Check email
    if (confirm.emailValidation()) {
        confirm.emailValidate();
    } else {
        confirm.emailInvalidate();
        flag = false;
    }

    // Check password
    if (confirm.passwordValidation()) {
        confirm.passValid();
    } else {
        confirm.passInvalid();
        flag = false;
    }

    // Confirm password 
    if (confirm.passwordConfirmValidation()) {
        confirm.passConfirmValid();
    } else {
        confirm.passConfirmInvalid()
        flag = false;
    }

    
})