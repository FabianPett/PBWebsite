function askPassword() {
  const password = prompt("Enter password to continue:");
  if (password === "Neo123") {
    window.location.href = "homep.html"
  } else {
    alert("Incorrect password.");
  }
}
