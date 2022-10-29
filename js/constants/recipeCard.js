export const RecipeCard = {
    method: 'GET',
    headers: {
            'X-API-Key': ' 8d13f27b766444338fcdf22ed323afc8',
        },
};

const url = "https://api.spoonacular.com/recipes/visualizeRecipe";

export const corsFix = "https://noroffcors.herokuapp.com/" + url;