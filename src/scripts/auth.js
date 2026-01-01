(() => {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorBox = document.getElementById("loginError");
  const submitBtn = form ? form.querySelector("button[type='submit']") : null;

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

  function setSubmitting(isSubmitting) {
    if (!submitBtn) return;
    submitBtn.disabled = isSubmitting;
    submitBtn.classList.toggle("is-disabled", isSubmitting);
    submitBtn.textContent = isSubmitting ? "Signing in…" : "Sign in";
  }

  form.addEventListener("input", () => {
    clearError();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearError();
    setSubmitting(true);

    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();

    if (!user || !pass) {
      showError("Please enter both username and password.");
      setSubmitting(false);
      return;
    }

    if (user === DEMO_USER && pass === DEMO_PASS) {
      // Minimal session marker for demo purposes
      sessionStorage.setItem("notesUser", DEMO_USER);
      window.location.href = "./dashboard.html";
    } else {
      showError("Invalid credentials. Use demo / notes123.");
      setSubmitting(false);
    }
  });
})();
