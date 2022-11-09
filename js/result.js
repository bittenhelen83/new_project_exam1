const resultContainer = document.querySelector(".resultContainer");

import {displayMessage} from "./utils/displayMessage.js"
import {options, corsFix} from "./constants/options.js"

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

async function getSingleResult() {
    try    {
        const response = await fetch(`https://noroffcors.herokuapp.com/https://api.spoonacular.com/recipes/complexSearch?&type=main%20course&instructionsRequired=true&addRecipeInformation=true&sortDirection=asc&number=50&apiKey=8d13f27b766444338fcdf22ed323afc8&id=${id}`,);
        const json = await response.json();
        const singleResult = json.results;
        
        console.log(singleResult);
        
        resultContainer.innerhtml = `<div><div class="thumbnailContainer"><img class="thumbnail" src="${singleResult.image}"/></div>
                                    <h2 class="recipeTitle">${singleResult.title}</h2>
                                    </div>`

    } catch {
        // displayMessage();
    }
}

getSingleResult();