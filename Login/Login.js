function validateForm(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  if (username.trim() === "" || password.trim() === "") {
    errorMessage.textContent = "Username and password are required";
    return;
  }

  if (username === "your_username" && password === "your_password") {
    alert("Login successful!");
  } else {
    errorMessage.textContent = "Invalid username or password";
  }
}
