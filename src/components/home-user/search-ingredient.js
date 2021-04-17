import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import IngredientService from "../../services/ingredient-service";
import {Typography} from "@material-ui/core";

const SearchIngredient = () => {
    let {title} = useParams()
    const [searchTitle, setSearchTitle] = useState(title)
    const [parsedIngredient, setParsedIngredient] = useState()
    const [hintedIngredients, setHintedIngredients] = useState([])
    const [ingredients, setIngredients] = useState(null)

    useEffect(() => {
        if (searchTitle !== "" && searchTitle !== undefined) {
            IngredientService.getIngredient(searchTitle).then(ingredient => {
                setParsedIngredient(ingredient["parsed"][0])
                setHintedIngredients(ingredient["hints"])
                setIngredients(ingredient)
            })
        } else {
            setIngredients(null)
        }
    }, [searchTitle])

    const findIngredientByTitle = (title) => {
        IngredientService.getIngredient(title).then(ingredient => {
            setParsedIngredient(ingredient["parsed"][0])
            setHintedIngredients(ingredient["hints"])
            setIngredients(ingredient)
        })
    }

    return (
        <div className={"container-fluid"}>

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
                    <Link to={`/searchingredient/${searchTitle}`}>
                        <button className="btn btn-primary btn-block">
                            Search
                        </button>
                    </Link>
                </div>
            </div>

            <br/>

            <div className={"row"}>
                {
                    title &&
                    <>
                        <h2>Closest Response</h2>
                        <div className={"row"}>
                            <div className={"col-4"}>
                                <button>
                                    {
                                        parsedIngredient &&
                                        parsedIngredient["food"]["label"]
                                    }
                                </button>
                            </div>
                        </div>

                        <div className={"col-8"}>
                            <label for="quantityForFoodItem" className="col-sm-2 col-form-label">
                                Enter quantity </label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="quantityForFoodItem"
                                       type={"number"}/>
                            </div>
                        </div>

                    </>
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
                                            key={(ingredient["food"]["foodId"]).split("food_")[1]}>
                                            <button>
                                                {
                                                    ingredient["food"]["label"]
                                                }
                                            </button>

                                            <label htmlFor="quantityForFoodItem"
                                                   className="col-sm-2 col-form-label">
                                                Enter quantity
                                            </label>
                                            <div className="col-sm-10">
                                                <input className="form-control wbdv-field wbdv-username"
                                                       id="quantityForFoodItem"
                                                       type={"number"}/>
                                            </div>
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