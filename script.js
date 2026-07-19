// ===============================
// Element References
// ===============================
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const strengthBar = document.querySelector('.strength-bar');
const strengthText = document.querySelector('.strength-text');

// ===============================
// Helper Functions
// ===============================
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

// ===============================
// Validation Functions
// ===============================
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

// ===============================
// Password Strength Meter
// ===============================
function calculateStrength(passwordValue) {
  let score = 0;

  if (passwordValue.length >= 8) score++;
  if (/[A-Z]/.test(passwordValue)) score++;
  if (/[a-z]/.test(passwordValue)) score++;
  if (/[0-9]/.test(passwordValue)) score++;
  if (/[^A-Za-z0-9]/.test(passwordValue)) score++;

  return score;
}

function updateStrengthMeter() {
  const value = password.value.trim();
  const score = calculateStrength(value);

  if (value.length === 0) {
    strengthBar.style.background = '#ccc';
    strengthText.textContent = '';
    return;
  }

  if (score <= 2) {
    strengthBar.style.background = '#e74c3c';
    strengthText.textContent = 'Weak';
  } else if (score === 3 || score === 4) {
    strengthBar.style.background = '#f39c12';
    strengthText.textContent = 'Medium';
  } else {
    strengthBar.style.background = '#2ecc71';
    strengthText.textContent = 'Strong';
  }
}

// ===============================
// Event Listeners
// ===============================
email.addEventListener('input', validateEmail);
password.addEventListener('input', () => {
  validatePassword();
  updateStrengthMeter();
});
confirmPassword.addEvent