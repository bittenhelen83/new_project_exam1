import { displayMessage } from "./utils/displayMessage.js";
import { options, corsFix } from "./constants/options.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = options + corsFix;

async function getResult() {

    try {
        const response = await fetch(url + results.id);
        const json = await response.json();
        const result = json.results;
    
        console.log(result);
        
        displayResult(result);
     
    } catch(error) {
        // displayMessage();
    }

}

getResult();

function  displayResult(result) {
    const resultContainer = document.querySelector(".resultContainer");

    if (!resultContainer) {
        return;
    }

    result.forEach((singleResult) => {
        
        resultContainer.innerHTML += `<div class="recipe">
                                    </div>`
    });
}
