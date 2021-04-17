import React from "react";
import Typography from "@material-ui/core/Typography";
import {AddCircle} from "@material-ui/icons";
import IngredientService from "../../services/ingredient-service";
import {Link} from "react-router-dom";

const MealTable = () => {
    return (

        <>
            <Typography variant={"h4"}>
                Meal Table
                <Link to="/searchingredient/">
                    <AddCircle color={"error"} />
                </Link>
            </Typography>

            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default MealTable