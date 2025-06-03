function askPassword() {
  const password = prompt("Enter password to continue:");
  if (password === "Neo123") {
    window.location.href = "homep.html"
  } else {
    alert("Incorrect password.");
  }
}

<script>
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  fetch("https://formsubmit.co/ajax/fabian@fabianpettersson.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    })
  })
  .then(response => response.json())
  .then(data => {
    // Show popup
    document.getElementById("popup").classList.remove("hidden");

    // Reset form
    form.reset();

    // Hide popup after 5 seconds
    setTimeout(() => {
      document.getElementById("popup").classList.add("hidden");
    }, 5000);
  })
  .catch(error => console.error("Form submission error:", error));
});
</script>
