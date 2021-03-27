import React from 'react'
import {Link} from "react-router-dom"

const RecipeScreen = () => {
    return(
        <div>
            <h2>Find a Recipe</h2>
            <a href = "/search">
                Search
            </a>
            <br/>
            <Link to="/details">
                Details
            </Link>
        </div>
    )
}
export default RecipeScreen