const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailInput = form.querySelector("[name='email']");
  const passwordInput = form.querySelector("[name='password']");
  if (emailInput.value === "" || passwordInput.value === "") {
    alert(`Please fill all fields`);
  }
  //   const formData = new FormData(event.currentTarget);

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);
  form.reset();
}
