import {displayMessage} from "./utils/displayMessage.js"
import { getExistingFavs, saveFavs } from "./utils/favFunctions.js";
import {options, corsFix} from "./constants/options.js"

const searchButton = document.getElementById("searchButton");
const inputText = document.getElementById("searchInput");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const searchInput = params.get("search");

if (searchInput) {
    getRecipes(searchInput);
    inputText.value = searchInput;
} else {
    getRecipes();
}
searchButton.addEventListener("click", async() => await getRecipes(inputText.value));

async function getRecipes(searchTerm='') {
    try {
    let recipes;
    corsFix;
    if(searchTerm) {
        const response = await fetch(`https://noroffcors.herokuapp.com/https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}?&type=main%20course&instructionsRequired=true&addRecipeInformation=true&sortDirection=asc&number=50`, options);
        const json = await response.json();
        const recipes = json.results;
        console.log(response);
        displayRecipes(recipes)
        handleFavouritesButton();
        
        return;
    }
    const response = await fetch(corsFix, options);
    const json = await response.json();
    recipes = json.results;    
    console.log(recipes);
     displayRecipes(recipes);
     handleFavouritesButton();

    } catch {
        displayMessage();
    }
};

function displayRecipes(recipes) {
    const recipeContainer = document.querySelector(".recipeContainer");
    recipeContainer.innerHTML = "";
    if (!recipeContainer) {
        return;
    }

    recipes.forEach((recipe) => {
        let cssClass = "far";
        
        const recipeIsInFavourites = isInFavourites(recipe.id);

        if (recipeIsInFavourites) {
            cssClass = "fa";
        }

        recipeContainer.innerHTML += `<div class="recipe"><a href="result.html?id=${recipe.id}">
                                    <div class="thumbnailContainer"><img class="thumbnail" src="${recipe.image}" alt="recipe image"/></div>
                                    <h2 class="recipeTitle">${recipe.title}</h2></a>
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