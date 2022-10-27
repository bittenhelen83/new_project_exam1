import { getExistingFavs } from "./data/favFunctions.js";

const favourites = getExistingFavs();

const recipeContainer = document.querySelector(".recipeContainer");

if(favourites.lenght === 0) {
recipeContainer.innerHTML = "No favourites yet..."
}

favourites.forEach(favourite => {
    recipeContainer.innerHTML += `<div class="recipe">
                                    <div class="thumbnailContainer"><img class="thumbnail" src="${favourite.image}"/></div>
                                    <h2>${favourite.title}</h2>
                                    <i class="fa fa-heart"></i> 
                                    </div>`
    
});

async function thumbnailSize() {
    
    let thumbnail = document.querySelector(".thumbnail")

    if(thumbnail.style.height >= thumbnail.style.width) {

        thumbnail.style.height = `200px`
    }   else {
        thumbnail.style.width = `200px`
}
}

thumbnailSize();