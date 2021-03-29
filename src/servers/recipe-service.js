const API_ID = "fcf0116a"
const  API_KEY = "b6dab00d92d86b4ddfb3f2159e668860"
const findRecipeByTitle = (title) => {
    return fetch(`https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => response.json())
}
const findRecipeByID = (uri) => {
    return fetch(`https://api.edamam.com/search?q=${uri}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => response.json())
}
export default {
    findRecipeByTitle, findRecipeByID
}