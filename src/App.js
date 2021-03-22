
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./components/home-anonymous/home";
import Login from "./components/login-page/login";
import SignUp from "./components/Registration/sign-up";
import UserHome from "./components/home-user/user-home";
import Trainee from "./components/trainee/trainer-home";
import CourseManager from "./components/home-anonymous/user-stories";
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
<<<<<<< HEAD

=======
  <Route path="/trainer" exact={true}  component={Trainee}/>
>>>>>>> 4e293468ac5880fcfc2ebb20546a58b15c1200cd
</div>


</BrowserRouter>
  );
}

export default App;
