import React from 'react'
import TrainerGrid from "./trainer-grid";
import {BrowserRouter, Link, Route} from "react-router-dom";
import userService from "../../services/home_user_services";
export default class TrainerStories extends React.Component {
    state = {
        trainers: []
    }
    componentDidMount() {
        userService.findTrainers()
            .then(trainers => this.setState({trainers}))
    }



    render() {
        return (
            <div>
                <BrowserRouter>

                    <TrainerGrid

                        trainers={this.state.trainers}/>

                </BrowserRouter>
            </div>
        )
    }
}


