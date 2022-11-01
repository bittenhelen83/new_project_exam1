export function displayMessage() {
    const element = document.querySelector(".recipeContainer", ".resultContainer");

    element.innerHTML += `<div class="message error">There was an error...</div>`
}