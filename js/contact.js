const form = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const firstNameError = document.getElementById("firstNameError");
const lastName = document.getElementById("lastName");
const lastNameError = document.getElementById("lastNameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const message = document.getElementById("textarea");
const characterCount = document.getElementById("characterCount span");
const submitButton = document.getElementById("submitButton");

function validateForm() {
    event.preventDefault();

    if(checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if(checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

message.onkeyup = function () {
    console.log(event.target.value.length);

    const len = event.target.value.lenght;

    characterCount.innerHTML = len;

    if(len >= 5) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};
