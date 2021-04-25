import React, {useState, useEffect, Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            editing: false,
        }
    }

    render () {
        const { user } = this.props.auth;
        console.log(user);
        const { classes } = this.props;

        return(
            <div>
                {
                    JSON.stringify(user)
                }
            </div>
        )
    }
}

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Profile);