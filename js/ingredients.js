import { ingredients, corsFix } from "./constants/ingredients.js";

async function getIngredients() {

    try {
        const response = await fetch(corsFix, ingredients);
        const json = await response.json();
        const ingredients = json.results;
    
        console.log(ingredients);
        
        displayIngredients(ingredients);
     
    } catch(error) {
        displayMessage();
    }

}

getIngredients();

function  displayIngredients(ingredients) {
    const ingredientsContainer = document.querySelector(".ingredientsContainer");

    if (!ingredientsContainer) {
        return;
    }

    ingredients.forEach((ingredient) => {
        
        ingredientsContainer.innerHTML += `<div class="recipe"><a href="ingredients.html?id=${ingredients.id}">
                                    </div>`
    });
}
