import React from 'react'
import Calories from "./calories";
import Coaching from "./coaching";
import FooterPage from "./footer";
import Recipe from "./recipe";
import Navbar from "./navbar";
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

                  <Navbar/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {<img className="container-fluid" src="https://picsum.photos/id/1060/1250/500"/>}
                <br/>
                <br/>
                <br/>
                    <div className="text-center">

                        <h1 className="  text-center">Here's How We Work</h1>

                        <button onClick={this.CountCalories} className=" m-3 p-3 fas fa-utensils">Calorie counting</button>

                        <button onClick={this.PersonalCoaching} className=" m-3 p-3 fas fa-user">Personal Coaching</button>
                        
                        <button  onClick={this.Recipe}  className="m-3 p-3 fas fa-clipboard"> Recipes</button>
                        {this.state.CaloriesRender && <Calories/>}
                        {this.state.CoachingRender && <Coaching/>}

                        {this.state.RecipeRender && <Recipe/>}


                    </div>
                    <div className="m-3 p-3 text-center">

<div>
<br/>
   <h1 className = " pb-3 mb-3"> Our Success Stories</h1>

    <UserStories/>


</div>

                    </div>
                </div>
                <FooterPage/>

            </>
        )

    }
}