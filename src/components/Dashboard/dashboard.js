import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { withStyles } from '@material-ui/styles';
import {makeStyles} from "@material-ui/core/styles";
import UserHome from "../home-user/user-home";
import Trainer from "../trainer/trainer-home";

const drawerWidth = 240;
const initialValue = new Date();

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width: "inherit"
    },
    horizontalItems: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    hide_above_sm: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
}));

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            mobileOpen: false,
        }
    }

    handleDrawerToggle = () => {
        this.props.mobileOpen = !this.props.mobileOpen
    };

    onLogoutClick = e => {
        e.preventDefault()
        this.props.logoutUser()
    };

    onProfileUpdateClick = e => {
        e.preventDefault()
        this.props.updateProfile()
    };

    render() {
        const {user} = this.props.auth;
        const {classes} = this.props;

        return (
            <div>
                {
                    user.userType === "User" &&
                    <UserHome user={user} logoutClick={this.onLogoutClick}/>
                }
                {
                    user.userType === "Trainer" &&
                    <Trainer user={user} logoutClick={this.onLogoutClick}/>
                }
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(withStyles(useStyles)(Dashboard));