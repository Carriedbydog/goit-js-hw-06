const refs = {
  inputValidation: document.querySelector("#validation-input"),
  inputValidationValid: document.querySelector("#validation-input .valid"),
  inputValidationInValid: document.querySelector("#validation-input .invalid"),
};
refs.inputValidation.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const neccessaryLength = parseInt(refs.inputValidation.dataset.length);
  const currentLength = refs.inputValidation.value.length;

  if (currentLength === neccessaryLength) {
    refs.inputValidation.classList.remove("invalid");
    refs.inputValidation.classList.add("valid");
  } else {
    refs.inputValidation.classList.remove("valid");
    refs.inputValidation.classList.add("invalid");
  }

  return onInputBlur;
}
