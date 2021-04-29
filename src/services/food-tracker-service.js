const FOOD_TRACKER_URL = "https://gethealthybackend.herokuapp.com/api/foodEntries"

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

const deleteFoodEntry = (fid) => {
    fetch(`${FOOD_TRACKER_URL}/${fid}`,
        {method: "DELETE"}).then(response => response.json())
}

const FoodTrackerService = {
    getAllFoodEntries,
    getFoodEntryById,
    createFoodEntry,
    deleteFoodEntry
}

export default FoodTrackerService