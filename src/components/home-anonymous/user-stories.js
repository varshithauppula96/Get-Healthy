import React from 'react'

import UserGrid from "./User_grid";

import {BrowserRouter, Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../servers/home_user_services";

export default class UserStories extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if (c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {

        courseService.deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = (newTitle) => {

        const newCourse = {
            title: newTitle,
            owner: "me",
            lastModified: (new Date()).toDateString()
        }
        document.getElementById('title-fld').value = ""
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
    }


    render() {
        return (

            <div>
                <BrowserRouter>

                    {/*<Route path="/courses/table" component={CourseTable}/>*/}


                    <UserGrid
                        updateCourse={this.updateCourse}
                        addCourse={this.addCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>


                </BrowserRouter>
            </div>
        )
    }
}



// export default UserStories
