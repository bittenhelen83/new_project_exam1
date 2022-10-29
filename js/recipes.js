import { displayMessage } from "./utils/displayMessage.js";
import { getExistingFavs, saveFavs } from "./utils/favFunctions.js";
import { options, corsFix } from "./constants/options.js";

async function getRecipes() {

    try {
        const response = await fetch(corsFix, options);
        const json = await response.json();
        const recipes = json.results;
    
        console.log(recipes);
        
        displayRecipes(recipes);
        handleFavouritesButton();

    } catch(error) {
        displayMessage();
    }

}

getRecipes();

function  displayRecipes(recipes) {
    const recipeContainer = document.querySelector(".recipeContainer");

    if (!recipeContainer) {
        return;
    }

    recipes.forEach((recipe) => {
        let cssClass = "far";
        
        const resipeIsInFavourites = isInFavourites(recipe.id);

        if (resipeIsInFavourites) {
            cssClass = "fa";
        }

        recipeContainer.innerHTML += `<div class="recipe">
                                    <a href="result.html"><div class="thumbnailContainer"><img class="thumbnail" src="${recipe.image}"/></div></a>
                                    <h2>${recipe.title}</h2>
                                    <i class="fa-heart ${cssClass}" data-id="${recipe.id}" data-title="${recipe.title}" data-image="${recipe.image}"></i>
                                    </div>`
    });
}

function isInFavourites(id) {
    const currentFavs = getExistingFavs();
    const favExits = currentFavs.find(function (fav) {
        return Number(fav.id) === Number(id);

    });

    return favExits;
}

function handleFavouritesButton() {
    const favButtons = document.querySelectorAll(".recipe i");

    if (favButtons.length === 0) {
        return;
    }

    favButtons.forEach((button) => {
        button.addEventListener("click", handleFavouriteClick);
    });
}

function handleFavouriteClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const image = this.dataset.image;

    const recipeIsInFavourites = isInFavourites(id);

    if (!recipeIsInFavourites) {
        addToFavourites(id, title, image)
    } else {
        removeFromFavourites(id);
    }

}

function addToFavourites(id, title, image) {
    const currentFavs = getExistingFavs();
    const recipe = { id: id, title: title, image: image };
    currentFavs.push(recipe);
    saveFavs(currentFavs);
}

function removeFromFavourites(id) {
    const currentFavs = getExistingFavs();
    const newFavs = currentFavs.filter((fav) => fav.id !== id);
    saveFavs(newFavs);
}

