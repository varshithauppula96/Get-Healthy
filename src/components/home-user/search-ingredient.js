import React, {Component} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import IngredientService from "../../services/ingredient-service";
import FoodTrackerService from "../../services/food-tracker-service";
import {Button} from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

class SearchIngredient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.match.params.title,
            searchTitle:"props.match.params.title",
            hintedIngredients: [],
            foodWeight: ""
        }
    }

    componentDidMount() {
        if (this.state.title !== "" && this.state.title !== undefined) {
            IngredientService.getIngredient(this.state.title).then(ingredient => {
                this.setState({
                    hintedIngredients: ingredient["hints"],
                })
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.state.title !== this.props.match.params.title) {
            if (this.state.title !== "" && this.state.title !== undefined) {
                IngredientService.getIngredient(this.state.title).then(ingredient => {
                    this.setState({
                        hintedIngredients: ingredient["hints"],
                    })
                })
            }
        }
    }

    findIngredientByTitle = (title) => {
        IngredientService.getIngredient(title).then(ingredient => {
            this.setState({
                hintedIngredients: ingredient["hints"],
            })
        })
    }

    putFoodInDb = (ingredient) => {
        if (this.state.foodWeight === "" || this.state.foodWeight === undefined)
            alert("Please enter weight")
        else {
            const servingEntry = ingredient["measures"].find((measure) => measure.label === "Serving")

            let foodObj = {
                "foodId": (ingredient["food"]["foodId"]).split("food_")[1],
                "label": ingredient["food"]["label"],
                "userId": this.state.auth.user._id,
                "weight": parseInt(this.state.foodWeight) * servingEntry["weight"],
                "calories": parseInt(this.state.foodWeight) * ingredient["food"]["nutrients"]["ENERC_KCAL"],
                "protein": parseInt(this.state.foodWeight) * ingredient["food"]["nutrients"]["PROCNT"],
                "fat": parseInt(this.state.foodWeight) * ingredient["food"]["nutrients"]["FAT"],
                "carbohydrates": parseInt(this.state.foodWeight) * ingredient["food"]["nutrients"]["CHOCDF"]
            }
            console.log(foodObj)
            FoodTrackerService.createFoodEntry(foodObj)
                .then(response => console.log(response.json))
        }
    }

    render() {
        const {user} = this.props.auth;
        console.log("si" + JSON.stringify(user))
        const {classes} = this.props;

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
                        <input value={this.state.title}
                               onChange={(event) => {
                                   this.setState({
                                       title: event.target.value,
                                   })
                               }}
                               className="form-control"/>
                    </div>
                    <div className="col-3">
                        <Link to={`/searchingredient/${this.state.title}`}>
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
                                   value={this.state.foodWeight}
                                   id="quantityForFoodItem"
                                   onChange={(event) => {
                                       this.setState({
                                           foodWeight: event.target.value,
                                       })
                                   }}
                                   type={"number"}/>
                        </div>
                    }
                </div>

                <div className={"row"}>
                    <ul className="list-group">
                        {
                            this.state.hintedIngredients.map((ingredient) => {
                                return (
                                    <>
                                        {
                                            ingredient &&
                                            <li className="list-group-item"
                                                key={(ingredient["food"]["foodId"]).split("food_")[1]}
                                                id={(ingredient["food"]["foodId"]).split("food_")[1]}>
                                                <Link to={"/dashboard"}>
                                                    <button onClick={() => this.putFoodInDb(ingredient)}>
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
}

SearchIngredient.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {logoutUser}
)(SearchIngredient)