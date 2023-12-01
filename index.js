const signInContainer = document.getElementById("sign-in-container");
const signUpContainer = document.getElementById("sign-up-container");

function toggleForm(param) {
  if (param.innerText === "Create Account") {
    signUpContainer.style.display = "block";
    signInContainer.style.display = "none";
  } else {
    signUpContainer.style.display = "none";
    signInContainer.style.display = "block";
  }
}

function setUsername(username) {
  localStorage.setItem("currentUsername", username);
}

function signIn(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userData = JSON.parse(localStorage.getItem(email));
  console.log(userData);

  if (userData && userData.password === password) {
    alert("Sign In successful!");
    setUsername(userData.username);
    window.location.href = "home.html";
  } else {
    alert("Invalid email or password");
  }
}

function signUp(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("SignUpEmail").value;
  const password = document.getElementById("SignUpPassword").value;
  localStorage.setItem(email, JSON.stringify({ username, password }));

  alert("Account created successfully!");
  toggleForm("none");
}
