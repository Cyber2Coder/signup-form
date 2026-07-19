const form = document.getElementById("signupForm");
const errorMessage = document.getElementById("errorMessage");
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function setError(input, message) {
  const formControl = input.parentElement;
  const errorSpan = formControl.querySelector('.error');
  formControl.classList.add('error');
  formControl.classList.remove('success');
  errorSpan.textContent = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  const errorSpan = formControl.querySelector('.error');
  formControl.classList.add('success');
  formControl.classList.remove('error');
  errorSpan.textContent = '';
}

function validateEmail() {
  const value = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(value)) {
    setError(email, 'Please enter a valid email.');
  } else {
    setSuccess(email);
  }
}

function validatePassword() {
  const value = password.value.trim();

  if (value.length < 8) {
    setError(password, 'Password must be at least 8 characters.');
  } else {
    setSuccess(password);
  }
}

function validatePasswordMatch() {
  if (confirmPassword.value !== password.value) {
    setError(confirmPassword, 'Passwords do not match.');
  } else {
    setSuccess(confirmPassword);
  }
}

email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validatePasswordMatch);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match.";
  } else {
    errorMessage.textContent = "";
    alert("Account created!");
  }
});
