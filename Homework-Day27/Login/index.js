// nhập tất cả chức năng từ file module.js bằng câu lệnh import 
import * as validate from "./module.js";

// Khai báo biến trong form
const form = document.getElementById("login-form");

// Gán sự kiện khi ấn nút submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // gán cờ bằng true
    let flag = true;

    // điều kiện khi email nhập đúng (chức năng check ở bên module)
    if (validate.emailValidation()) {
        validate.emailValid(); 
    } else {
        validate.emailInvalid();
        flag = false;
    }

    // điều kiện khi password nhập đúng > 8 && < 15
    if (validate.passwordValidation()) {
        validate.passwordValid();
    } else {
        validate.passwordInvalid();
        flag = false;
    }

    if (flag) {
        alert("Gửi form");
    }
});
