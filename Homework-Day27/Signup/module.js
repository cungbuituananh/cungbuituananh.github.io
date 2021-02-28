// B1 Get elements

const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

// Tạo biến lấy element messenger 
var messengerInvalid = document.getElementById("nickname-invalid");
var emailInvalid = document.getElementById("email-invalid");
var passwordInvalid = document.getElementById("password-invalid");
var passwordConfirmInvalid = document.getElementById("passwordConfirm-invalid");


//  Điều kiện check nickname
export function nickValidation() {
  let nickContent = nickname.value.trim();
  // Điều kiện khi nội dung nhập là mảng rỗng
  if (nickContent == "" || nickContent.length < 8 ) {
    messengerInvalid.innerHTML =
      "Tên đăng nhập có đô dài trên 8 ký tự bao gồm A-Z & 0-9 ";
    return false;
  }
  return true;
}

export function nickValid() {
  nickname.classList.add("is-valid");
  nickname.classList.remove("is-invalid");
}
export function nickInvalid() {
  nickname.classList.add("is-invalid");
  nickname.classList.remove("is-valid");
}


// Điều kiện check  email 
export function emailValidation() {
    let emailContent = email.value.trim().toLowerCase();
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(emailContent)) {
        return true;
    }
    emailInvalid.innerHTML = "Vui lòng nhập đúng email";
    return false;
}

export function emailValidate() {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid")
}
export function emailInvalidate() {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid")
}   

// Điều kiện check password
export function passwordValidation() {
    let passwordContent = password.value.trim();

    if (passwordContent == "") {
        passwordInvalid.innerHTML = "Vui lòng nhập mật khẩu";
        return false;
    } else if (!isNaN(passwordContent) || passwordContent.length < 6) {
        passwordInvalid.innerHTML = "Mật khẩu phải có ít nhất 8 ký tự bao gồm A-Z & 0-9";
        return false;
    }

    return true;
}

export function passValid() {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
}
export function passInvalid() {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
}


// Điều kiện check password confirm 
export function passwordConfirmValidation() {
    let passwordConfirmContent = passwordConfirm.value.trim();
    let passwordContent = password.value.trim();

    if ( passwordConfirmContent == "") {
        passwordConfirmInvalid.innerHTML = "Vui lòng nhập lại mật khẩu";
        return false;
    } else if ( passwordConfirmContent == passwordContent)   {
        return true;
    }
}

export function passConfirmValid() {
    passwordConfirm.classList.add("is-valid");
    passwordConfirm.classList.remove("is-invalid")
}

export function passConfirmInvalid() {
    passwordConfirm.classList.add("is-invalid");
    passwordConfirm.classList.remove("is-valid")
}