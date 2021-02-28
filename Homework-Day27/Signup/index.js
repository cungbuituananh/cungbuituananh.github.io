import * as confirm from "./module.js"

const signForm = document.getElementById("signup-form");

signForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Check tên đăng nhập
    if (confirm.nickValidation()) {
        confirm.nickValid(); 
    } else {
        confirm.nickInvalid(); 
    }

    // Check email
    if (confirm.emailValidation()) {
        confirm.emailValidate();
    } else {
        confirm.emailInvalidate();
    }

    // Check password
    if (confirm.passwordValidation()) {
        confirm.passValid();
    } else {
        confirm.passInvalid();
    }

    // Confirm password 
    if (confirm.passwordConfirmValidation()) {
        confirm.passConfirmValid();
    } else {
        confirm.passConfirmInvalid()
    }
})