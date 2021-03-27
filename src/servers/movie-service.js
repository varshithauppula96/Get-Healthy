const findMoviesByTitle = (title) => {
    return fetch(`https://api.edamam.com/search?q=${title}&app_id=3a97f0d0&app_key=3a458b2fd268ece413a2f798bdea4b71`)
        .then(response => response.json())
}

const findMovieByImdbID = (imdbID) => {
    return fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a249f8d`)
        .then(response => response.json())
}

export default {
    findMoviesByTitle, findMovieByImdbID
}