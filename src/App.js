
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./components/home-anonymous/home";
import Login from "./components/login-page/login";
import SignUp from "./components/Registration/sign-up";
function App() {
  return (
<BrowserRouter>
<div className="container-fill">
  <Route path="/" exact={true}  component={Home}/>
  <Route path="/login" exact={true}  component={Login}/>
  <Route path="/sign-up" exact={true}  component={SignUp}/>

</div>


</BrowserRouter>
  );
}

export default App;
