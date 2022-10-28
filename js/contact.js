const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");


function validateForm() {
    event.preventDefault();

    if(checkLength(firstName.value) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    // if (lastName.value.trim().lenght > 3) {
    //     lastNameError.style.display = "none";
    // } else {
    //     lastNameError.style.display = "block";
    // }

    // if (email.value.trim().lenght > 0) {
    //     firstNameError.style.display = "none";
    // } else {
    //     firstNameError.style.display = "block";
    // }

}

form.addEventListener("submit", validateForm);

function checkLength(value) {
    if(value.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}