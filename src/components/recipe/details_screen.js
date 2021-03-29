import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import recipeService from '../../servers/recipe-service'

const DetailsScreen = () => {
    const {uri} = useParams()

    const [recipe, setRecipe] = useState([])
    const [nutrients, setNutrients] = useState([])
    // useEffect(() => {
    //
    //     recipeService.findRecipeByID(uri).then(recipeReceived =>
    //     setRecipe(recipeReceived["hits"]))
    // }, [uri])
    useEffect(() => {
        findRecipeByID(uri)
        console.log(recipe)
        console.log(nutrients)
    }, [])
    const findRecipeByID = (uri) => {
        recipeService.findRecipeByID(uri)
            .then((recipeReceived) => {
                setRecipe(recipeReceived["hits"][0]["recipe"])
                setNutrients(
                    recipeReceived["hits"][0]["recipe"]["totalNutrients"])
                })
    }

    const nutrientsArr=[]
    Object.keys(nutrients).forEach(function (key){
        nutrientsArr.push(nutrients[key])
    });
    return(
        <div>
            {/*<button onClick={()=>{history.goBack()}}>Back</button>*/}
            {/*{JSON.stringify(recipe)}*/}
            <h2 style={{textAlign:"center"}}>
                {recipe["label"]}
            </h2>
            <img style={{height:"50%",display:"block", marginLeft: "auto", marginRight: "auto", width: "30%"}}
                 src={recipe["image"]}/>
            <h6 style={{textAlign:"center"}}>Meal Type : &nbsp;
                {
                    recipe["mealType"]
                }
            </h6>
            <h6 style={{textAlign:"center"}}>Dish Type : &nbsp;
                {
                    recipe["dishType"]
                }
            </h6>
            <h6 style={{textAlign:"center"}}>Diet Label : &nbsp;
                {
                    recipe["dietLabels"]
                }
            </h6>
            <h6>Health Labels =>
                {
                    JSON.stringify(recipe["healthLabels"])
                }
            </h6>
            <h6>How to Make =>
                {
                    recipe["ingredientLines"]
                }
            </h6>
            <h6 style={{textAlign:"center"}}>URL => &nbsp;
                {
                    <a href={recipe["url"]}>Click here to find more details about this food item</a>
                }
            </h6>
            <h6 style={{textAlign:"center"}}>
                Calories => {
                    JSON.stringify(recipe["calories"])
                }
            </h6>
            <h3 style={{textAlign:"center"}}>Total Nutrients For {recipe["label"]}</h3>
            <h6 style={{textAlign:"center"}}>
                {

                    // console.log(nutrientsArr)
                    nutrientsArr.map((temp) => {
                        return(
                            <div>
                                {
                                    temp.label
                                } => &nbsp;
                                {
                                temp.quantity
                                }
                                {
                                    temp.unit
                                }
                            </div>
                        )
                    })
                }
            </h6>
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