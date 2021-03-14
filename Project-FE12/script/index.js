let btnLogin = document.getElementById("btn-login");
let btnSignup = document.getElementById("btn-singup");
let btnLogout = document.getElementById("btn-logout");
let username = document.getElementById("username");
// toàn bộ div chưa form login
let ctnLoginForm = document.getElementById("ctn-loginForm");
// Toàn bộ điv chứa form signup
let ctnSignupForm = document.getElementById("ctn-signupForm");
// form login
let formSignup = document.getElementById("form-signup");
// event khi click click nut dang nhap
let displayLogin = () => {
  ctnLoginForm.classList.remove("d-none");
  ctnSignupForm.classList.add("d-none");
};
let displaySigup = () => {
  ctnSignupForm.classList.remove("d-none");
  ctnLoginForm.classList.add("d-none");
};

let signupValidate = (e) => {
  e.preventDefault();
  let flag = true;
  let usernameContent = document.getElementById("user");
  let emailContent = document.getElementById("email");
  let passwordContent = document.getElementById("password");
  let passwordConfirmContent = document.getElementById("password-confirm");
  let messengerUser = document.getElementById("user-invalid");
  let messengerEmail = document.getElementById("email-invalid");
  let messengerPassword = document.getElementById("password-invalid");
  let messengerPasswordConfirm = document.getElementById("passwordConfirm-invalid");

  if (usernameContent.value == "") {
    usernameContent.classList.add("is-invalid");
    usernameContent.classList.remove("is-valid");
    messengerUser.innerHTML = `Vui lòng không để trống`;
    flag = false;
  } else {
    usernameContent.classList.remove("is-invalid");
    usernameContent.classList.add("is-valid");
    flag = true;
  }

  if (emailContent.value == "") {
    emailContent.classList.add("is-invalid");
    emailContent.classList.remove("is-valid");
    messengerEmail.innerHTML = `Vui lòng nhập email`;
    flag = false;
  } else {
    emailContent.classList.remove("is-invalid");
    emailContent.classList.add("is-valid");
    flag = true;
  }

  if (passwordContent.value == "") {
    passwordContent.classList.add("is-invalid");
    passwordContent.classList.remove("is-valid");
    messengerPassword.innerHTML = `Vui lòng nhập mật khẩu`;
    flag = false;
  } else {
    passwordContent.classList.remove("is-invalid");
    passwordContent.classList.add("is-valid");
    flag = true;
  }

  if (passwordConfirmContent.value == "" || passwordConfirmContent.value != passwordContent.value) {
    passwordConfirmContent.classList.add("is-invalid");
    passwordConfirmContent.classList.remove("is-valid");
    messengerPasswordConfirm.innerHTML = `Xác nhận mật khẩu không đúng`;
    flag = false;
  } else {
    passwordConfirmContent.classList.add("is-valid");
    passwordConfirmContent.classList.remove("is-invalid");
    flag = true 
  }
};
btnLogin.addEventListener("click", displayLogin);
btnSignup.addEventListener("click", displaySigup);
formSignup.addEventListener("submit", signupValidate);
