import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import recipeService from '../../servers/recipe-service'

const DetailsScreen = () => {
    const {uri} = useParams()

    const [recipe, setRecipe] = useState({})
    // useEffect(() => {
    //
    //     recipeService.findRecipeByID(uri).then(recipeReceived =>
    //     setRecipe(recipeReceived["hits"]))
    // }, [uri])
    useEffect(() => {
        findRecipeByID(uri)
    }, [uri])

    const findRecipeByID = (uri) => {
        recipeService.findRecipeByID(uri)
            .then((recipeReceived) => {
                setRecipe(recipeReceived["hits"][0])
            })
    }


    return(
        <div>
            {/*<button onClick={()=>{history.goBack()}}>Back</button>*/}
            {/*{JSON.stringify(recipe)}*/}
            <h1>
                {
                    JSON.stringify(recipe["recipe"]["label"])
                }
            </h1>
            {/*<h2> {console.log(recipe["recipe"])}</h2>*/}
            {/*<p>*/}
            {/*    <img src={recipe["recipe"]["image"]} width={100} style={{float: "right"}}/>*/}
            {/*    {recipe["recipe"]["ingredients"]}*/}
            {/*</p>*/}
            {/*{JSON.stringify(recipe)}*/}
        </div>
    )
}
export default DetailsScreen