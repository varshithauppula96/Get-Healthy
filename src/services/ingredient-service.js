const INGREDIENT_URL = "https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr="
const APP_ID = "app_id=82bf9041"
const APP_KEY = "app_key=3d3e908fa0b6db6eac3c4fed21ddb298"

const getIngredient = (ingredient) =>
    fetch(`${INGREDIENT_URL}/${ingredient}&${APP_ID}&${APP_KEY}`)
        .then(response => response.json())

const IngredientService = {
    getIngredient,
}

export default IngredientService;