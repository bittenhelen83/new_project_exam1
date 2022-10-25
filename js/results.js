const recipeContainer = document.querySelector(".recipeContainer");

import { getExistingFavs } from "./favFunctions.js";

const api = {
	method: 'GET',
	headers: {
		'X-API-Key': ' 8d13f27b766444338fcdf22ed323afc8'
	}
};

const url = "https://api.spoonacular.com/recipes/complexSearch?query=healthy&type=main%20course&instructionsRequired=true&addRecipeInformation=true&sortDirection=asc&offset=0&number=100"

const corsFix = "https://noroffcors.herokuapp.com/" + url;

const favourites = getExistingFavs();

async function getRecipe() {

    const response = await fetch(corsFix, api, favourites);

    const json = await response.json();

    const recipe = json.results;

    console.log(recipe);

    recipe.forEach(recipe => {
        let cssClass = "far";

        const doesObjectExist = favourites.find(function(fav) {
            
            return parseInt(fav.id) === recipe.id;
        })

        if(doesObjectExist) {
            cssClass = "fa";
        }
        else
        recipeContainer.innerHTML += `<div class="recipe">
                                        <div class="thumbnailContainer"><img class="thumbnail" src="${recipe.image}"/> </div>
                                       <h2>${recipe.title}</h2>
                                        <i class="${cssClass} fa-heart" data-id="${recipe.id}" data-title="${recipe.title}"></i> 
                                        </div>`
        
    });

    const favButtons = document.querySelectorAll(".recipe i");



favButtons.forEach(heart => {
    heart.addEventListener("click", handleClick);
});

function handleClick() {
    
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    
    const title = this.dataset.title;

    const currentFavs = getExistingFavs();

    const recipeExists = currentFavs.find(function(fav) {
        return fav.id === id;
    });

    if(!recipeExists) {
        const recipe = {id: id, title: title};
        currentFavs.push(recipe);
        saveFavs(currentFavs);
    }
    else {
        const newFavs = currentFavs.filter(fav => fav.id !== id);
        saveFavs(newFavs);
    }
}

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}
}

getRecipe();


async function thumbnailSize() {
    
    let thumbnail = document.querySelector(".thumbnail")

    if(thumbnail.style.height >= thumbnail.style.width) {

        thumbnail.style.height = `200px`
    }   else {
        thumbnail.style.width = `200px`
}
}

thumbnailSize();