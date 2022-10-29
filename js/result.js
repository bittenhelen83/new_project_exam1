import { displayMessage } from "./utils/displayMessage.js";
import { options, corsFix} from "./constants/optionsResults.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const worksId = params.get("id");

console.log(worksId); 

async function getRecipes() {
    const response = await fetch(options, corsFix);
    const results = await response.json();
    console.log(results);
}

getRecipes();


// try {
// } catch(error) {
//     displayMessage();
// }
