
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./components/home-anonymous/home";

function App() {
  return (
<BrowserRouter>
<div className="container-fill">
  <Route path="/" exact={true}  component={Home}/>
</div>


</BrowserRouter>
  );
}

export default App;
