import React from 'react'
import Calories from "./calories";
import Coaching from "./coaching";
import Reviews from "./reviews";
import Workout from "./workout-videos";
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CaloriesRender: false,
            CoachingRender: false,
            ReviewsRender :false,
            WorkoutRender :false
        }
        this.CountCalories = this.CountCalories.bind(this);
        this.PersonalCoaching =this.PersonalCoaching.bind(this);
        this.Reviews =this.Reviews.bind(this);
        this.WorkoutVideos =this.WorkoutVideos.bind(this);
    }

    CountCalories = () => {
        this.setState({CoachingRender: false});
        this.setState({CaloriesRender: !this.state.CaloriesRender});
    }
PersonalCoaching =() => {
    this.setState({CaloriesRender: false});
        this.setState({CoachingRender:!this.state.CoachingRender});
}
Reviews =() =>{
    this.setState({CaloriesRender: false});
    this.setState({CoachingRender: false});
    this.setState({ReviewsRender: false});
    this.setState({ReviewsRender:!this.state.ReviewsRender});
}

WorkoutVideos =() => {
    this.setState({CaloriesRender: false});
    this.setState({CoachingRender: false});
    this.setState({ReviewsRender: false});
    this.setState({WorkoutRender:!this.state.WorkoutRender});
}
    render() {
        return (
            <>
                <div>
                    <nav className="  p-3 navbar navbar-light" style={{backgroundColor: "#98c0d6"}}>

                        <a className="navbar-brand" href="#">
                            <i className="fa fa-heartbeat fa-2x"></i>
                            <span>GetHealthy</span>
                        </a>
                        {<img className="container-fluid" src="https://picsum.photos/1250/500"/>}
                    </nav>

                    <h2 className="text-center">Here's how we work</h2>
                    <div className="text-center">

                        <button onClick={this.CountCalories} className=" m-3 p-3 fas fa-utensils"></button>

                        <button onClick={this.PersonalCoaching} className=" m-3 p-3 fas fa-user"></button>
                        <button onClick={this.Reviews} className=" m-3 p-3 fas fa-comments"></button>
                        <button  onClick={this.WorkoutVideos}  className="m-3 p-3 fas fa-clipboard"></button>
                        {this.state.CaloriesRender && <Calories/>}
                        {this.state.CoachingRender && <Coaching/>}
                        {this.state.ReviewsRender && <Reviews/>}
                        {this.state.WorkoutRender && <Workout/>}


                    </div>

                </div>

            </>
        )

    }
}