
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./components/home-anonymous/home";
import Login from "./components/login-page/login";
import SignUp from "./components/Registration/sign-up";
import UserHome from "./components/home-user/user-home";
function App() {
  return (
<BrowserRouter>
<div className="container-fill">
  <Route path="/home" exact={true}  component={Home}/>
  <Route path="/login" exact={true}  component={Login}/>
  <Route path="/sign-up" exact={true}  component={SignUp}/>
  <Route path="/home/user/:userID" exact={true}  component={UserHome}/>
</div>


</BrowserRouter>
  );
}

export default App;
