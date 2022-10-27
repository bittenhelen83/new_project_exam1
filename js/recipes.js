// import { displayMessage } from "./data/displayMessage.js";
import { getExistingFavs } from "./utils/favFunctions.js";
const recipeContainer = document.querySelector(".recipeContainer");

const favourites = getExistingFavs();

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

    recipes.forEach((recipe) => {
        let cssClass ="far";

        const doesObjectExist = favourites.find(function(fav) {
            return parseInt(fav.id) === recipe.id;
        });

        if(doesObjectExist) {
            cssClass = "fa";           
        }

        recipeContainer.innerHTML += `<div class="recipe">
                                        <a href="result.html"><div class="thumbnailContainer"><img class="thumbnail" src="${recipe.image}"/></div></a>
                                        <h2>${recipe.title}</h2>
                                        <i class="${cssClass}" data-id="${recipe.id}" data-title="${recipe.title}"></i>
                                    </div>`
    });

    const favButtons = document.querySelectorAll(".recipe i");

    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick); 
    });

    function handleClick() {
        this.classList.toggle("fa");
        this.classList.toggle("far");

        const id = this.dataset.id;
        const title = this.dataset.title;

        const currentFavs = getExistingFavs();

        const productExists = currentFavs.find(function(fav) {
           return fav.id === id;  
        });

        if(!productExists) {
            const recipe = { id: id, title: title};
            currentFavs.push(recipe);
            saveFavs(currentFavs);
        }else {
            const newFavs = currentFavs.filter(fav => fav.id !== id);
            saveFavs(newFavs);
        }

    }

    function saveFavs(favs) {
        localStorage.setItem("favourites", JSON.stringify(favs));
    }

}

getRecipe();