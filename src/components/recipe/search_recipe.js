import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import recipeService from "../../servers/recipe-service"
const SearchScreen = () => {
    const history = useHistory()
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState(title)
    const [results, setResults] = useState({Search: []})
    const [recipes, setRecipes]= useState([])
    useEffect(() => {
        setSearchTitle(title)
        findRecipeByTitle(title)
    }, [])
    const findRecipeByTitle = (title) => {
        history.push(title)
        recipeService.findRecipeByTitle(title)
            .then((results) => {
                setRecipes(results["hits"])
            })
    }
    return(
        <div>
            <h2>Search Screen</h2>
            <div className="row">
                <div className="col-9">
                    <input value={searchTitle}
                           onChange={(event) => {
                               setSearchTitle(event.target.value)
                           }}
                           className="form-control"/>
                </div>
                <div className="col-3">
                    <button
                        onClick={() => {
                            findRecipeByTitle(searchTitle)
                        }}
                        className="btn btn-primary btn-block">
                        Search
                    </button>
                </div>
            </div>
            <br/>
            {/*{*/}
            {/*    JSON.stringify(results["hits"])*/}
            {/*}*/}
            {/*Object.keys(table[0]).forEach(key => console.log(key));*/}
            {/*recipe = results["hits"];*/}
            <ul className="list-group">
                {
                    recipes.map((recipe) =>
                    {
                        return (
                            <li className="list-group-item" key={(recipe["recipe"]["uri"]).split("recipe_")[1]}>
                                <Link to = {`/details/${(recipe["recipe"]["uri"]).split("recipe_")[1]}`}>
                                    {recipe["recipe"]["label"]} </Link>
                            </li>
                        )})
                }




                {/*{*/}
                {/*    JSON.stringify(recipes)*/}
                {/*}*/}
                {/*{*/}
                {/*// results && results.Search && results.Search.map((recipe) => {*/}
                {/*    //     return(*/}
                {/*            // <li className="list-group-item">*/}
                {/*            //     <a href = {`/details/${recipe.url}`}>*/}
                {/*            //         {recipe.label};*/}
                {/*            //     </a>*/}
                {/*            // </li>*/}
                {/*            //         <li className="list-group-item" key={(recipe["recipe"]["uri"]).split("recipe_")[1]}>*/}
                {/*            //         <Link to = {`/details/${(recipe["recipe"]["uri"]).split("recipe_")[1]}`}>*/}
                {/*            //         {recipe["recipe"]["label"]} </Link>*/}
                {/*            //     </li>*/}
                {/*//         )*/}
                {/*//     })*/}
                {/* }*/}
            </ul>
        </div>
    )
}

export default SearchScreen