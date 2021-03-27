import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./components/home-anonymous/home";
import Login from "./components/login-page/login";
import SignUp from "./components/Registration/sign-up";
import UserHome from "./components/home-user/user-home";
import Trainee from "./components/trainee/trainer-home";
import CourseManager from "./components/home-anonymous/user-stories";
import RecipeScreen from "./components/recipie/recipe_page";
import SearchScreen from "./components/recipie/search_recipe";

import DetailsScreen from "./components/recipie/details_screen";
import UserStories from "./components/home-anonymous/user-stories";
//import './style/App.css';

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
            <div className="container-fill">
                <Route path="/home" exact={true}  component={Home}/>
                <Route path="/login" exact={true}  component={Login}/>
                <Route path="/sign-up" exact={true}  component={SignUp}/>
                <Route path="/home/user/:userID" exact={true}  component={UserHome}/>
                <Route path="/user/grid" exact={true}  component={UserStories}/>
                <Route path="/recipe" exact={true}  component={RecipeScreen}/>
                <Route path={["/:title","/search", "/search/:title"]}
                       exact={true}>
                    <SearchScreen/>
                </Route>
                <Route path="/details/:imdbID" exact={true}>
                    <DetailsScreen/>
                </Route>
                <Route path="/recipe/details" exact={true}  component={DetailsScreen}/>
                <Route path="/trainer" exact={true}  component={Trainee}/>

            </div>

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

