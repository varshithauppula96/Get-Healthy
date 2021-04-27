import React from 'react'
import Calories from "./calories";
import Coaching from "./coaching";
import FooterPage from "./footer";
import Recipe from "./recipe";

import {Link} from "react-router-dom";
import UserStories from "./user-stories";


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CaloriesRender: true,
            CoachingRender: false,

            RecipeRender :false
        }
        this.CountCalories = this.CountCalories.bind(this);
        this.PersonalCoaching =this.PersonalCoaching.bind(this);

        this.Recipe =this.Recipe.bind(this);
    }

    CountCalories = () => {
        this.setState({CoachingRender: false});
        this.setState({RecipeRender: false});

        this.setState({CaloriesRender:true});
    }
PersonalCoaching =() => {
    this.setState({CaloriesRender: false});
    this.setState({RecipeRender: false});

        this.setState({CoachingRender:true});
}
Reviews =() =>{
    this.setState({CaloriesRender: false});
    this.setState({CoachingRender: false});
    this.setState({RecipeRender: false});

}

    Recipe =() => {
    this.setState({CaloriesRender: false});
    this.setState({CoachingRender: false});

    this.setState({RecipeRender:!this.state.RecipeRender});
}
    render() {
        return (
            <>
                <div>

                    
                    <nav className="  p-3 navbar navbar-light" style={{backgroundColor: "#808080"}}>

                        <a className="navbar-brand" href="#">
                            <i className="fa fa-heartbeat fa-2x"></i>
                            <span>GetHealthy</span>
                        </a>
                        <div className="float-right">
                            <span><button className="m-3"> <a href= "/register">
                            Sign up</a></button>

                            <button> <a href = "/login">
                                Sign in</a></button>
    </span>
                        </div>

                        {<img className="container-fluid" src="https://picsum.photos/id/429/1250/500"/>}
                    </nav>

                    <h1 className=" m-3 p-3 text-center">Here's how we work</h1>
                    <div className="text-center">

                        <button onClick={this.CountCalories} className=" m-3 p-3 fas fa-utensils">Calorie counting</button>

                        <button onClick={this.PersonalCoaching} className=" m-3 p-3 fas fa-user">Personal Coaching</button>
                        
                        <button  onClick={this.Recipe}  className="m-3 p-3 fas fa-clipboard"> Recipes</button>
                        {this.state.CaloriesRender && <Calories/>}
                        {this.state.CoachingRender && <Coaching/>}

                        {this.state.RecipeRender && <Recipe/>}


                    </div>
                    <div className="m-3 p-3 text-center">

<div>
   <h1> Our Success stories</h1>


    <UserStories/>


</div>

                    </div>
                </div>
                <FooterPage/>

            </>
        )

    }
}