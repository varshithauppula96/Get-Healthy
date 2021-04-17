const FOOD_TRACKER_URL = "http://localhost:5000/api/foodEntries"

const getAllFoodEntries = () =>
    fetch(`${FOOD_TRACKER_URL}`)
        .then(response => response.json())

const getFoodEntryById = (foodId) =>
    fetch(`${FOOD_TRACKER_URL}/${foodId}`)
        .then(response => response.json())

const createFoodEntry = (foodObj) =>
    fetch(`${FOOD_TRACKER_URL}`, {
        method: "POST",
        body: JSON.stringify(foodObj),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

const FoodTrackerService = {
    getAllFoodEntries,
    getFoodEntryById,
    createFoodEntry
}

export default FoodTrackerService;