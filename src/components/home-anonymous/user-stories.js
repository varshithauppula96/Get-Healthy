import React from 'react'
import UserGrid from "./User_grid";
import {BrowserRouter, Link, Route} from "react-router-dom";
import userService, {findAllCourses, deleteCourse} from "../../services/home_user_services";
export default class UserStories extends React.Component {
    state = {
        users: []
    }
    componentDidMount() {
        userService.findAllUsers()
            .then(users => this.setState({users}))
    }
    

    addUser = (newName) => {
        const newUser = {
            title: newName,
        }
        document.getElementById('title-fld').value = ""
        userService.createUser(newUser)
            .then(actualUser => {
                this.state.user.push(actualUser)
                this.setState(this.state)
            })
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    {/*<Route path="/courses/table" component={CourseTable}/>*/}

                    <UserGrid

                        users={this.state.users}/>

                </BrowserRouter>
            </div>
        )
    }
}

// export default UserStories