import {options, corsFix} from "./constants/options.js"

searchButton.addEventListener("click", async() => await getRecipes(inputText.value));



`https://noroffcors.herokuapp.com/https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}?&type=main%20course&instructionsRequired=true&addRecipeInformation=true&sortDirection=asc&number=50`, options

`https://noroffcors.herokuapp.com/https://api.spoonacular.com/recipes/complexSearch?query=${id}?&type=main%20course&instructionsRequired=true&addRecipeInformation=true&sortDirection=asc?`, options