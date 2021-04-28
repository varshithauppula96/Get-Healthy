import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import recipeService from '../../servers/recipe-service'
import "./table.css"
import Navbar from "../home-anonymous/navbar";

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
    }, [uri])
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
            <Navbar/>
        <br/>
        <br/>
        <br/>
        <div className="container-fluid">
        <a href={"/search"}>Go back to search page</a>
            <h2 style={{textAlign:"center"}}>
                {recipe["label"]}
            </h2>
            <img style={{height:"50%",display:"block", marginLeft: "auto", marginRight: "auto", width: "30%"}}
                 src={recipe["image"]}/>
                 <br/>
            <table>
                <thead>
                <tr>
                    <th scope="col">Diet Label</th>
                    <th scope="col">Health Labels</th>
                    <th scope="col">Ingredients</th>
                    <th scope="col">Recipe</th>
                    <th scope="col">Calories</th>
                    <th scope="col">Nutrients</th>
                </tr>
                </thead>
                <tr>
                    <td className="diet-label">{
                        recipe["dietLabels"]
                    }</td>
                    <td className="item-qty"> {
                        JSON.stringify(recipe["healthLabels"])
                    }</td>
                    <td className="item-price">{
                        recipe["ingredientLines"]
                    }</td>
                    <td className="item-price"> {
                        <a href={recipe["url"]}>Click here</a>
                    }</td>
                    <td>{
                        JSON.stringify(recipe["calories"])
                    }</td>
                    <td className="last">{
                        nutrientsArr.map((temp) => {
                            return(
                                <div>
                                    {
                                        <b>{temp.label}</b>
                                    } &nbsp;
                                    {
                                        (temp.quantity)
                                    }
                                    {
                                        temp.unit
                                    }
                                </div>
                            )
                        })
                    }</td>
                </tr>
            </table>
        </div>
        </div>
    )
}

export default DetailsScreen
