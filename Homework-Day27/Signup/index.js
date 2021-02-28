import * as confirm from "./module.js"

const signForm = document.getElementById("signup-form");

signForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (confirm.nickValidation()) {
        confirm.nickValid(); 
    } else {
        confirm.nickInvalid(); 
    }
})