const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subscribeForm = document.querySelector("#subscribeForm");
const subscribeEmail = document.querySelector("#subcribeEmail");
const subscribeEmailError = document.querySelector("#subscribeEmailError");

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

function validateSubscribeForm() {
    event.preventDefault();

    if(validateEmail(subscribeEmail.value) === true) {
        subscribeEmailError.style.display = "none";
    } else {
        subscribeEmailError.style.display = "block";
    }
}
console.log(subscribeForm);

subscribeForm.addEventListener("submit", validateSubscribeForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email, subscribeEmail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email, subscribeEmail);
    return patternMatches;
}