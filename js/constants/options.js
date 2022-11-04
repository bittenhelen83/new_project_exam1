export const options = {
    method: 'GET',
    headers: {
            'X-API-Key': '8d13f27b766444338fcdf22ed323afc8',
        },
};

const url = 
        "https://api.spoonacular.com/recipes/complexSearch?query=healthy&type=main%20course&instructionsRequired=true&addRecipeInformation=true&sortDirection=asc&number=100?";

export const corsFix = "https://noroffcors.herokuapp.com/" + url;