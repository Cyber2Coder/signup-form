const form = document.getElementById("signupForm");
const errorMessage = document.getElementById("errorMessage");

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
