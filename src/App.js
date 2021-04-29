import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./components/home-anonymous/home";
import Login from "./components/auth/login";
import AllUsers from "./components/profile/allusers/allusers";
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
import Dashboard from "./components/Dashboard/dashboard";
import SearchIngredient from "./components/home-user/search-ingredient";
import Profile from "./components/profile/profile";
import TrainerFollower from "./components/trainer/trainer-follower";
import TrainerStories from "./components/home-anonymous/trainer-stories";
import TrainerPage from "./components/home-anonymous/trainers";
import PublicProfile from "./components/profile/anonymous-profile";

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
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/profile/:profileId">
                    <PublicProfile/>
                </PrivateRoute>
                <Route path="/home/user/:userID" exact={true}  component={UserHome}/>
                <Route path="/users" exact={true}  component={AllUsers}/>
                <Route path="/recipe" exact={true}  component={RecipeScreen}/>
                <Route exact path= "/register"exact={true} component={Register} />
                <Route path={["/search", "/search/:title"]}
                       exact={true}>
                    <SearchScreen/>
                </Route>
                <Route path="/details/:uri" exact={true}>
                    <DetailsScreen/>
                </Route>
                {/* eslint-disable-next-line react/jsx-no-undef */}


                <Route exact path="/profile" component={Profile} />
                <Route exact path="/trainers" component={TrainerPage} />

                <Route path="/trainer" exact={true}  component={Trainer}/>
                <Route path="/trainees" exact={true}  component={TrainerFollower}/>

                <Route path={["/dashboard/:userID/searchingredient/", "/dashboard/:userID/searchingredient/:title/"]}
                       exact={true} component={SearchIngredient}/>
            </div>

        </BrowserRouter>
        </Provider>
    );
}
export default App;
