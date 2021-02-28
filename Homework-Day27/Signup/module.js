// B1 Get elements

const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

// Lấy element messenger 
var messengerInvalid = document.getElementById("messenger-invalid");


export function nickValidation() {
  let nickContent = nickname.value.trim();
  if (nickContent == "") {
    messengerInvalid.innerHTML =
      "Tên đăng nhập chứa A-Z a-z 0-9 & các ký tự khác";
    return false;
  } else if (nickContent.length < 8) {
    messengerInvalid.innerHTML = "Tên đăng nhập có nhiều hơn 8 ký tự";
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
