



// import { displayMessage } from "./data/displayMessage.js";
// const recipeContainer = document.querySelector(".recipeContainer");

// const api = {
// 	method: 'GET',
// 	headers: {
// 		'X-API-Key': ' 8d13f27b766444338fcdf22ed323afc8'
// 	}
// };

// const url = "https://api.spoonacular.com/recipes/random?number=1&tags=dinner"

// const corsFix = "https://noroffcors.herokuapp.com/" + url;

// async function getRecipe() {

//     try {
    
//     let cssClass = "far";

//     const response = await fetch(corsFix, api);

//     const json = await response.json();

//     const results = json.recipes;
    
//     console.log(json);
    
//     results.forEach(function (result) {

//         recipeContainer.innerHTML = `<div class="recipe">
//                                         <div class="thumbnailContainer"><img class="thumbnail" src="${result.image}"/> </div>
//                                         <h2>${result.title}</h2>
//                                         <p>${result.extendedIngredients.length.name}</p>
//                                         <br><br>
//                                         <i class="${cssClass} fa-heart""></i> 
//                                         </div>`;
//     });
//     }
//     catch(err) {
//         console.log(err);
//         displayMessage("error", err, ".recipeContainer"); 
//     } 


// }

// getRecipe();