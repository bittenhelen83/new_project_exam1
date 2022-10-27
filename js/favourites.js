import { getExistingFavs } from "./utils/favFunctions.js";

const favourites = getExistingFavs();

const recipeContainer = document.querySelector(".recipeContainer");

if(favourites.length === 0) {
    recipeContainer.innerHTML = `<p>You have noe favourites yet, go back to <a href="recipes.html">Recipes</a></p>`; 
}

favourites.forEach(favourite => {
    recipeContainer.innerHTML += `<div class="recipe">
                                    <a href="result.html"><div class="thumbnailContainer"><img class="thumbnail" src="${recipe.image}"/></div></a>
                                    <h2>${recipe.title}</h2>
                                    <i class="fa fa-heart"></i>
                                    </div>`
});
