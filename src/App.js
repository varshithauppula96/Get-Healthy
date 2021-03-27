
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
import React from "react";
import UserStories from "./components/home-anonymous/user-stories";
function App() {
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


      </BrowserRouter>
  );
}

export default App;
