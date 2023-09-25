const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = loginForm.querySelector('input[name="email"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All fields must be filled in.");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
});
