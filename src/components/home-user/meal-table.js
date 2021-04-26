import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {AddCircle} from "@material-ui/icons";
import IngredientService from "../../services/ingredient-service";
import FoodTrackerService from "../../services/food-tracker-service";
import {Link, useParams} from "react-router-dom";
import moment from "moment";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import DatePicker from "@material-ui/lab/DatePicker";
import TextField from "@material-ui/core/TextField";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import FeedbackService from "../../services/feedback-service";

const useStyles = makeStyles((theme) => ({
    horizontalItems: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

const MealTable = ({dateValue, user}) => {
    const classes = useStyles();

    const [foodEntries, setFoodEntries] = useState([])
    const [calories, setCalories] = React.useState(0)

    useEffect(() => {
        const date = moment(dateValue, 'DD/MM/YYYY').format('YYYY-MM-DD') + "T"
        let newentries = []
        let calCount = 0
        // setCalories(0)
        // if (userID !== "" && userID !== undefined) {
        FoodTrackerService.getAllFoodEntries().then(entries => {
            newentries = (entries && entries.filter((entry) => {
                    if (entry["userId"] === user._id && entry["createdAt"].toString().includes(date)) {
                        calCount += entry.calories
                        return true
                    }
                })
            )
            console.log(newentries)
            setFoodEntries(newentries)
            console.log(calCount)
            setCalories(calCount)
        })
        // } else {
        //     setFoodEntries([])
        // }
    }, [user._id, dateValue])

    const removeFoodEntry = (fId) =>{
        FoodTrackerService.deleteFoodEntry(fId)
        const date = moment(dateValue, 'DD/MM/YYYY').format('YYYY-MM-DD') + "T"
        let newentries = []
        let calCount = 0
        FoodTrackerService.getAllFoodEntries().then(entries => {
            newentries = (entries && entries.filter((entry) => {
                    if (entry["userId"] === user._id && entry["createdAt"].toString().includes(date)) {
                        calCount += entry.calories
                        return true
                    }
                })
            )
            console.log(newentries)
            setFoodEntries(newentries)
            console.log(calCount)
            setCalories(calCount)
        })
    }

    return (

        <>
            <Typography variant="h6"
                        noWrap
                        component={Paper}>
                Total Calorie Intake = {calories}
            </Typography>

            <Typography variant={"h4"}>
                Meal Table
                <Link to={`/dashboard/${user._id}/searchingredient/`}>
                    <AddCircle color={"error"}/>
                </Link>
            </Typography>

            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Food Label</th>
                    <th scope="col">Weight(g)</th>
                    <th scope="col">Calories(kcal per 100g)</th>
                    <th scope="col">Protein(per 100g)</th>
                    <th scope="col">Fat(per 100g)</th>
                    <th scope="col">Carbohydrates(per 100g)</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {/*{*/}
                {/*    JSON.stringify(foodEntries)*/}
                {/*}*/}
                {
                    foodEntries.map((entry) => {
                        return (
                            <>
                                {
                                    entry &&
                                    <tr key={entry._id}
                                        id={entry._id}>
                                        <td>{entry.label}</td>
                                        <td>{entry.weight}</td>
                                        <td>{entry.calories}</td>
                                        <td>{entry.protein}</td>
                                        <td>{entry.fat}</td>
                                        <td>{entry.carbohydrates}</td>
                                        <td>
                                            <button className={"btn btn-primary"}
                                            onClick={() => removeFoodEntry(entry._id)}>
                                                Delete
                                            </button>
                                        </td>
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