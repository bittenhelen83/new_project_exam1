import { options, corsFix } from "./constants/options.js";

const recipeContainer = document.querySelector(".recipecontainer");
async function getRecipes() {
    try {
    const response = await fetch(corsFix, options);
    const json = await response.json();
    const recipes = json.results;
        
    addRecipe(recipes);

    } catch(error) {
        displayMessage();
    }
}

getRecipes();

function addRecipe(recipes) {
    recipes.forEach(recipe => {
        console.log(recipe)
    })
}

