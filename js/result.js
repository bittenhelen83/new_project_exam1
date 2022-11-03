import { displayMessage } from "./utils/displayMessage.js";
import { options, corsFix } from "./constants/options.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = options + corsFix + "?id=" + id; 

console.log(url);
async function getResult() {

    try {
        const response = await fetch(url);
        const json = await response.json();
        const result = json.results;
    
        console.log(result);
        
        resulContainer.innerHTML = "";
        
        result.forEach(function (singleResult, i) {
            resulContainer.innerHTML += `<div class="singleResult">
                                            <div class="thumbnailContainer"><img class="thumbnail" src="${singleResult.image}"/></div>
                                            <h2 class="recipeTitle">${singleResult.title}</h2></a>
                                            <p class="ingredients">${singleResult.ingredients[i]}</p>
                                            <p class="instructions">${singleResult.instructions[i]}</p>
                                            </div>`
        })

    } catch(error) {
        // displayMessage();
    }

}

getResult();