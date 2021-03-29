import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom"
import Recipe from "../../Recipe";





const App = () => {

    const APP_ID = "3a97f0d0";
    const APP_KEY = "3a458b2fd268ece413a2f798bdea4b71";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('banana');





    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data);
        setRecipes(data.hits);
    }

    useEffect(  () => {
        getRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return (
        <BrowserRouter>

            <div className="App">
                <form onSubmit={getSearch} className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                    <button className="search-button" type="submit">Search</button>
                </form>
                <div className="recipes">
                    {recipes.map(recipe => (
                        <Recipe
                            key={recipe.recipe.label}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                        />
                    ))}
                </div>
            </div>


        </BrowserRouter>

    );
}

export default App;







