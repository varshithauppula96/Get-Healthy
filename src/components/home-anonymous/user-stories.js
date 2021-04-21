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
    updateCourse = (user) => {
        userService.updateUser(user._id, user)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.users = prevState.users.map(c => {
                        if (c._id === user._id) {
                            return user
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }
    deleteCourse = (user) => {
        userService.deleteUser(user._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    users: prevState.users.filter(c => c._id !== user._id)
                }))
            })
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
                        updateUser={this.updateUser}
                        addUser={this.addUser}
                        deleteUser={this.deleteUser}
                        users={this.state.users}/>

                </BrowserRouter>
            </div>
        )
    }
}

// export default UserStories