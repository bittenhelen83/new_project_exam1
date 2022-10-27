import { displayMessage } from "./data/displayMessage.js";
import { getExistingFavs } from "./data/favFunctions.js";
const recipeContainer = document.querySelector(".recipeContainer");

const api = {
	method: 'GET',
	headers: {
		'X-API-Key': ' 8d13f27b766444338fcdf22ed323afc8'
	}
};

const url = "https://api.spoonacular.com/recipes/complexSearch?query=healthy&type=main%20course&instructionsRequired=true&addRecipeInformation=true&sortDirection=asc&number=50"

const corsFix = "https://noroffcors.herokuapp.com/" + url;

async function getRecipe() {

    const response = await fetch(corsFix, api)

    const json = await response.json();

    const recipes = json.results;

    console.log(recipes);

    recipes.forEach(recipe => {

        recipeContainer.innerHTML += `<div class="recipe">
                                        <a href="result.html"><div class="thumbnailContainer"><img class="thumbnail" src="${recipe.image}"/></div></a>
                                        <h2>${recipe.title}</h2>
                                    </div>`
    })
}

getRecipe();





// async function thumbnailSize() {
    
//     let thumbnail = document.querySelector(".thumbnail")

//     if(thumbnail.style.height >= thumbnail.style.width) {

//         thumbnail.style.height = `200px`
//     }   else {
//         thumbnail.style.width = `200px`
//     }
// }

// thumbnailSize();