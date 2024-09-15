// Inbuilt username and password for validation
const validUsername = "admin";
const validPassword = "password123";

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Validate username and password
    if (username === validUsername && password === validPassword) {
      // Redirect to the home page upon successful login
      window.location.href = "home.html";
    } else {
      errorMessage.textContent = "Invalid username or password.";
      errorMessage.style.color = "red";
    }
  });
