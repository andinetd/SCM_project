(() => {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorBox = document.getElementById("loginError");

  if (!form) return;

  const DEMO_USER = "demo";
  const DEMO_PASS = "notes123";

  function showError(message) {
    errorBox.textContent = message;
    errorBox.style.display = "block";
  }

  function clearError() {
    errorBox.textContent = "";
    errorBox.style.display = "none";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearError();

    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();

    if (!user || !pass) {
      showError("Please enter both username and password.");
      return;
    }

    if (user === DEMO_USER && pass === DEMO_PASS) {
      // Minimal session marker for demo purposes
      sessionStorage.setItem("notesUser", DEMO_USER);
      window.location.href = "./dashboard.html";
    } else {
      showError("Invalid credentials. Use demo / notes123.");
    }
  });
})();
