const email = document.getElementById("email");
const password = document.getElementById("password");
const mailMsg = document.getElementById("mailMsg");
const passwordMsg = document.getElementById("passwordMsg");
const successMsg = document.getElementById("success");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex = /^.{8,}$/;

function validateEmailPassword() {
  if (email.value.length < 3 || !emailRegex.test(email.value)) {
    mailMsg.textContent =
      "Make sure email is more than 3 characters and has @ and a .";
    successMsg.textContent = "";
  } else {
    mailMsg.textContent = "";
  }

  if (password.value.length < 8 || !passwordRegex.test(password.value)) {
    passwordMsg.textContent = "Make sure password is more than 8 characters";
    successMsg.textContent = "";
  } else {
    passwordMsg.textContent = "";
  }

  if (!mailMsg.textContent && !passwordMsg.textContent) {
    successMsg.textContent = "All good to go";
  }
}

function validateForm() {
  validateEmailPassword();
  if (!mailMsg.textContent && !passwordMsg.textContent) {
    const confirmSignUp = window.confirm("Are you sure you want to sign up?");

    if (confirmSignUp) {
      alert("Successful signup!");
      successMsg.textContent = "";
      email.value = "";
      password.value = "";
    } else {
      window.location.reload();
    }
  }
}
