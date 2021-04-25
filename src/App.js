import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./components/home-anonymous/home";
import Login from "./components/auth/login";
import SignUp from "./components/Registration/sign-up";
import UserHome from "./components/home-user/user-home";
import Trainee from "./components/trainer/trainer-home";
import CourseManager from "./components/home-anonymous/user-stories";
import RecipeScreen from "./components/recipe/recipe_page";
import SearchScreen from "./components/recipe/search_recipe";
import DetailsScreen from "./components/recipe/details_screen";
import React from "react";
import Register from "./components/auth/register";
import UserStories from "./components/home-anonymous/user-stories";
import Trainer from "./components/trainer/trainer-home";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./private-route/privateRoute";
import Dashboard from "./components/dashboard/dashboard";
import SearchIngredient from "./components/home-user/search-ingredient";
import Profile from "./components/profile/profile";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
// Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "./login";
    }
}

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="container-fill">
                <Route path="/" exact={true}  component={Home}/>
                <Route path="/home" exact={true}  component={Home}/>
                <Route path="/login" exact={true}  component={Login}/>

                <Route path="/home/user/:userID" exact={true}  component={UserHome}/>
                <Route path="/user/grid" exact={true}  component={UserStories}/>
                <Route path="/recipe" exact={true}  component={RecipeScreen}/>
                <Route exact path= "/sign-up"exact={true} component={Register} />
                <Route path={["/search", "/search/:title"]}
                       exact={true}>
                    <SearchScreen/>
                </Route>
                <Route path="/details/:uri" exact={true}>
                    <DetailsScreen/>
                </Route>
                {/* eslint-disable-next-line react/jsx-no-undef */}

                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/profile" component={Profile} />

                <Route path="/trainer" exact={true}  component={Trainer}/>
                <Route path={["/home/user/:userID/searchingredient/", "/home/user/:userID/searchingredient/:title/"]}
                       exact={true}>
                    <SearchIngredient/>
                </Route>

            </div>

        </BrowserRouter>
        </Provider>
    );
}
export default App;