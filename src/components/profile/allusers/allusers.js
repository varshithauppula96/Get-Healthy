import React from 'react'
import AllUserGrid from "./alluser_grid";
import {BrowserRouter, Link, Route} from "react-router-dom";
import userService from "../../../services/home_user_services";
export default class AllUsers extends React.Component {
    state = {
        users: []
    }
    componentDidMount() {
        userService.findAllUsers()
            .then(users => this.setState({users}))
    }




    render() {
        return (
            <div>
                <BrowserRouter>
                    {/*<Route path="/courses/table" component={CourseTable}/>*/}

                    <AllUserGrid

                        users={this.state.users}/>

                </BrowserRouter>
            </div>
        )
    }
}

// export default UserStories