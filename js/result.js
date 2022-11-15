const resultContainer = document.querySelector(".resultContainer");
import {displayMessage} from "./utils/displayMessage.js"

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getSingleResult() {
    try {
        const response = await fetch(`https://noroffcors.herokuapp.com/https://api.spoonacular.com/recipes/${id}/information?apiKey=8d13f27b766444338fcdf22ed323afc8`)
        const singleResult = await response.json();
        
        console.log(singleResult);
        
        resultContainer.innerHTML = "";

        resultContainer.innerHTML += `<div><img src="${singleResult.image}" class="image" alt="recipe image" /></div>
                                        <div class="ingredients">
                                        <h1>${singleResult.title}</h1>
                                        <h2>Ingredients:</h2>
                                        ${singleResult.extendedIngredients.map(i => `<p class="ingredients">&#x2022; ${i.original}</p>`).join("")}
                                        </div>
                                        <div class="instructions">
                                        <h2>Instructions</h2>
                                        ${singleResult.analyzedInstructions[0].steps.map(step => `<p class="instructions">${step.step}</p>`).join("")}
                                        </div>`
        

    } catch {
        // displayMessage();
    
    }
}
getSingleResult();


// } ${singleResult.steps.map(step => `<p class="steps">${step.step}</p>`).join("")}
// console.log(singleResult.analyzedInstructions[0].steps[0].step);