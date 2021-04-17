import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {AddCircle} from "@material-ui/icons";
import IngredientService from "../../services/ingredient-service";
import FoodTrackerService from "../../services/food-tracker-service";
import {Link, useParams} from "react-router-dom";
import moment from "moment";


const MealTable = ({dateValue}) => {
    const {userID} = useParams()

    const [foodEntries, setFoodEntries] = useState([])

    const currentUserAndDate = (foodEntry) => {
        const today = new Date()
        const date = moment(dateValue, 'DD/MM/YYYY').format('YYYY-MM-DD') + "T"
        console.log("Food entry",foodEntry)
        if (foodEntry["userId"] === userID && foodEntry["createdAt"].toString().includes(date))
            return true
        return false
    }

    useEffect(() => {
        if (userID !== "" && userID !== undefined) {
            FoodTrackerService.getAllFoodEntries().then(entries => {
                setFoodEntries(entries)
            })
        } else {
            setFoodEntries([])
        }
    }, [userID, dateValue])

    return (

        <>
            <Typography variant={"h4"}>
                Meal Table
                <Link to={`/home/user/${userID}/searchingredient/`}>
                    <AddCircle color={"error"}/>
                </Link>
            </Typography>

            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Food Label</th>
                    <th scope="col">Weight(g)</th>
                    <th scope="col">Calories</th>
                    <th scope="col">Protein</th>
                    <th scope="col">Fat</th>
                    <th scope="col">Carbohydrates</th>
                </tr>
                </thead>
                <tbody>
                {
                    foodEntries.map((entry) => {
                        return (
                            <>
                                {
                                    entry && currentUserAndDate(entry) &&
                                    <tr>
                                        <td>{entry.label}</td>
                                        <td>{entry.weight}</td>
                                        <td>{entry.calories}</td>
                                        <td>{entry.protein}</td>
                                        <td>{entry.fat}</td>
                                        <td>{entry.carbohydrates}</td>
                                    </tr>
                                }
                            </>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default MealTable