const resultContainer = document.querySelector(".resultContainer");

import {displayMessage} from "./utils/displayMessage.js"
import {options, corsFix} from "./constants/options.js"

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

async function getSingleResult() {
    try    {
        const response = await fetch(`https://noroffcors.herokuapp.com/https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=8d13f27b766444338fcdf22ed323afc8`);
        const singleResult = await response.json();
      
        console.log(singleResult);
        
        resultContainer.innerHTML = "";

        singleResult.forEach(singleResult => {

            resultContainer.innerhtml += `<div>
                                    <p class="steps">${singleResult.steps[0].step}</p>
                                    </div>`
            console.log(singleResult.steps[0].step);
        });                         
    } catch {
        // displayMessage();
    }
}

getSingleResult();