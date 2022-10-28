export function displayMessage() {
    const element = document.querySelector(".recipeContainer");

    element.innerHTML = `<div class="message error">There was an error</div>`
}