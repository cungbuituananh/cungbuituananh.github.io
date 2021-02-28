// Get elements email & password 
const email = document.getElementById("email");
const password = document.getElementById("password")

// Chức năng nhập email 
export function emailValidation() {
    // khai báo 1 biến chứa nội dung nhập email & loại bỏ dấu cách ở 2 đầu 
    let emailContent = email.value.trim()

    // check điều kiện khi email có độ dài hơn 10
    if (emailContent.length > 10) {
        return true;
    } 
    return false;
}

// Chức năng check điều kiện khi email nhập đúng
export function emailValid() {
    // thêm class báo đúng
    email.classList.add("is-valid");
    // xoá class báo sai 
    email.classList.remove("is-invalid")
}

// Chức năng check điều kiện khi email nhập sai 
export function emailInvalid() {
    // thêm class báo sai 
    email.classList.add("is-invalid");
    // xoá class báo đúng
    email.classList.remove("is-valid");
}


// Chức năng nhập password
export function passwordValidation() {
    let passwordContent = password.value.trim()

    if(passwordContent.length > 8 && passwordContent.length <= 15) {
        return true;
    }
    return false;
}

export function passwordValid() {
    password.classList.add("is-valid");
    password.classList.remove ("is-invalid");
}

export function passwordInvalid() {
    password.classList.add("is-invalid")
    password.classList.remove("is-valid");
}
