import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";

import IngredientService from "../../services/ingredient-service";
import FoodTrackerService from "../../services/food-tracker-service";
import {Button} from "@material-ui/core";
import FeedbackService from "../../services/feedback-service";

const SearchIngredient = () => {
    let {userID, title} = useParams()
    const [searchTitle, setSearchTitle] = useState(title)
    const [hintedIngredients, setHintedIngredients] = useState([])
    const [foodWeight, setFoodWeight] = useState("")

    useEffect(() => {
        if (searchTitle !== "" && searchTitle !== undefined) {
            IngredientService.getIngredient(searchTitle).then(ingredient => {
                setHintedIngredients(ingredient["hints"])
            })
        }
    }, [searchTitle])

    const findIngredientByTitle = (title) => {
        IngredientService.getIngredient(title).then(ingredient => {
            setHintedIngredients(ingredient["hints"])
        })
    }

    const putFoodInDb = (ingredient) => {
        if (foodWeight === "" || foodWeight === undefined)
            alert("Please enter weight")
        else {
            const servingEntry = ingredient["measures"].find((measure) => measure.label === "Serving")

            let foodObj = {
                "foodId": (ingredient["food"]["foodId"]).split("food_")[1],
                "label": ingredient["food"]["label"],
                "userId": userID,
                "weight": parseInt(foodWeight) * servingEntry["weight"],
                "calories": parseInt(foodWeight) * ingredient["food"]["nutrients"]["ENERC_KCAL"],
                "protein": parseInt(foodWeight) * ingredient["food"]["nutrients"]["PROCNT"],
                "fat": parseInt(foodWeight) * ingredient["food"]["nutrients"]["FAT"],
                "carbohydrates": parseInt(foodWeight) * ingredient["food"]["nutrients"]["CHOCDF"]
            }
            console.log(foodObj)
            FoodTrackerService.createFoodEntry(foodObj)
                .then(response => console.log(response.json))
                ;
        }
    }

    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <Link to={"/dashboard"}>
                    <Button size={"large"}>Dashboard</Button>
                </Link>
            </div>

            <h1>
                Search For Food Item
            </h1>

            <div className={"row"}>
                <div className="col-9">
                    <input value={searchTitle}
                           onChange={(event) => {
                               setSearchTitle(event.target.value)
                           }}
                           className="form-control"/>
                </div>
                <div className="col-3">
                    <Link to={`/dashboard/${userID}/searchingredient/${searchTitle}`}>
                        <button className="btn btn-primary btn-block">
                            Search
                        </button>
                    </Link>
                </div>
            </div>

            <br/>

            <div className={"row"}>
                {
                    <div className={"col-8"}>
                        <label for="quantityForFoodItem" className="col-form-label">
                            Enter quantity
                        </label>
                        <input className="form-control wbdv-field wbdv-username"
                               value={foodWeight}
                               id="quantityForFoodItem"
                               onChange={(event) => {
                                   setFoodWeight(event.target.value)
                               }}
                               type={"number"}/>
                    </div>
                }
            </div>

            <div className={"row"}>
                <ul className="list-group">
                    {
                        hintedIngredients.map((ingredient) => {
                            return (
                                <>
                                    {
                                        ingredient &&
                                        <li className="list-group-item"
                                            key={(ingredient["food"]["foodId"]).split("food_")[1]}
                                            id={(ingredient["food"]["foodId"]).split("food_")[1]}>
                                            <Link to={"/dashboard"}>
                                                <button onClick={() => putFoodInDb(ingredient)}
                                                        >
                                                    {
                                                        ingredient["food"]["label"]
                                                    }
                                                </button>
                                            </Link>
                                        </li>
                                    }
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchIngredient