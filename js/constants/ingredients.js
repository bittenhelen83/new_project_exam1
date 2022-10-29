export const ingredients = {
    method: 'GET',
    headers: {
            'X-API-Key': ' 8d13f27b766444338fcdf22ed323afc8',
        },
};

const url = "GET https://api.spoonacular.com/recipes/{id}/ingredientWidget.json";

export const corsFix = "https://noroffcors.herokuapp.com/" + url;