import React from 'react'
import AllUserGrid from "./alluser_grid";
import {BrowserRouter, Link, Route} from "react-router-dom";
import userService from "../../../services/home_user_services";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../../actions/authActions";
import {withStyles} from "@material-ui/styles";

class AllUsers extends React.Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        if (this.props.auth.user._id) {
            userService.findAllUsers()
                .then(users => this.setState({users}))
        } else {
            alert("Please login first")
            this.props.history.push("/login")
        }

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

AllUsers.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {logoutUser}
)(AllUsers);