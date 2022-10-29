import { getExistingFavs, saveFavs } from "./utils/favFunctions.js";
import { options, corsFix } from "./constants/options.js";

const searchButton = document.querySelector(".searchButton");


async function getRecipes() {

    try {
        
        const response = await fetch(corsFix, options);
        const json = await response.json();
        const recipes = json.results;
    
        console.log(recipes);
        
        recipes.forEach((recipe) => {
            
        });
        console.log(recipe);
        
    } catch(error) {
        displayMessage();
    }

}

getRecipes();

searchButton.forEach((button) => {
    button.addEventListener("click");
});

console.log(button);

// async function getRecipes() {
//     try {
//     const response = await fetch(corsFix, options);
//     const json = await response.json();
//     const recipes = json.results;
        
//     addRecipe(recipes);

//     } catch(error) {
//         displayMessage();
//     }
// }

// getRecipes();

// function addRecipe(recipes) {
//     recipes.forEach(recipe => {
//         console.log(recipe)
//     })
// }

