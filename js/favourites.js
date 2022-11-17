import { getExistingFavs } from "./utils/favFunctions.js";

const favourites = getExistingFavs();

const recipeContainer = document.querySelector(".recipeContainer");

if(favourites.length === 0) {
    recipeContainer.innerHTML = `<p>You have noe favourites yet, go back to Recipes</p>`; 
}
favourites.forEach(favourite => {
    recipeContainer.innerHTML += `<div class="recipe"><a href="result.html?id=${favourite.id}">
                                    <a href="result.html"><div class="thumbnailContainer"><img class="thumbnail" src="${favourite.image}"  alt="recipe image"/></div></a>
                                    <h2 class="recipeTitle">${favourite.title}</h2>
                                    <i class="fa fa-heart"></i>
                                    </div>`
});
