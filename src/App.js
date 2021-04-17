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
function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="container-fill">
                <Route path="/home" exact={true}  component={Home}/>
                <Route path="/login" exact={true}  component={Login}/>
                <Route path="/sign-up" exact={true}  component={SignUp}/>
                <Route path="/home/user/:userID" exact={true}  component={UserHome}/>
                <Route path="/user/grid" exact={true}  component={UserStories}/>
                <Route path="/recipe" exact={true}  component={RecipeScreen}/>
                <Route exact path= "/register"exact={true} component={Register} />
                <Route path={["/search", "/search/:title"]}
                       exact={true}>
                    <SearchScreen/>
                </Route>
                <Route path="/details/:uri" exact={true}>
                    <DetailsScreen/>
                </Route>
                <Route path="/trainer" exact={true}  component={Trainer}/>
            </div>

        </BrowserRouter>
        </Provider>
    );
}
export default App;