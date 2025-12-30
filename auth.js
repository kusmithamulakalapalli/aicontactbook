function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    localStorage.setItem("contactHubLogin", user);
    window.location.href = "app.html";
  } else {
    alert("Enter username and password");
  }
}
function logout() {
  localStorage.removeItem("contactHubLogin");
  window.location.href = "index.html";
}