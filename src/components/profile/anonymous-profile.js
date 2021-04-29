import React, {useEffect, useState} from "react";
import Params from "react-router-dom";
import home_user_services from "../../services/home_user_services";
import {updateUser,logoutUser} from "../../actions/authActions";
import profile from "./profile";
import FeedbackService from "../../services/feedback-service";
import PropTypes from "prop-types";
import axios from "axios";
import {connect} from "react-redux";
import Home_user_services from "../../services/home_user_services";

class PublicProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            post: "",
        }
    }
    componentDidMount(){

        this.setState({
            _id: this.props.auth.user._id,

        })


    }
     postFeedback = (trainee) => {
        let feedback = {
            "feedbackText": this.state.post,
            "trainerId": this.props.auth.user._id,
            "userId": trainee._id,
            "nameOfUser": trainee.name
        }
        console.log(feedback)
        // FeedbackService.postFeedbackToUser(feedback)
    }



        // home_user_services.findUserById(pId).then((user) => {this.setState({users:user})})
    ;

render() {
    const {user} = this.props.auth;
    return (
        <div>
            {
                // console.log(this.props.trainee["id"])
            }
        {/*    {user.userType == 'Trainer' &&*/}
        {/*    <div className="container-fluid otherprofile">*/}
        {/*        <h1 style={{textAlign: "center"}}>Your Trainer</h1>*/}
        {/*        <ul className="list-group">*/}
        {/*            <li className="list-group-item bg-dark text-white">*/}
        {/*                Name : {user.name}*/}
        {/*            </li>*/}
        {/*            <li className="list-group-item bg-dark text-white">*/}
        {/*                Name : {user.dateOfBirth}*/}
        {/*            </li>*/}
        {/*            <li className="list-group-item bg-dark text-white">*/}
        {/*                Name : {user.gender}*/}
        {/*            </li>*/}
        {/*            <li className="list-group-item bg-dark text-white">*/}
        {/*                Name : {user.about}*/}
        {/*            </li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}
        {/*    }*/}

        {/*    {user.userType == 'User' &&*/}
        {/*    <div className="container-fluid otherprofile">*/}
        {/*        <ul className="list-group bg-dark">*/}
        {/*            <li className="list-group-item">*/}
        {/*                Name : {user.name}*/}
        {/*            </li>*/}
        {/*            <li className="list-group-item">*/}
        {/*                Name : {user.dateOfBirth}*/}
        {/*            </li>*/}
        {/*            <li className="list-group-item">*/}
        {/*                Name : {user.gender}*/}
        {/*            </li>*/}
        {/*            <li className="list-group-item">*/}
        {/*                Name : {user.about}*/}
        {/*            </li>*/}
        {/*        </ul>*/}
        {/*        <h3>Post your feedback</h3>*/}
        {/*        <textarea*/}
        {/*            key={user._id}*/}
        {/*            className="form-control"*/}
        {/*            onChange={(event) => {*/}
        {/*                setPost(event.target.value)*/}
        {/*            }}>*/}
        {/*</textarea>*/}

        {/*        <button className="btn btn-primary"*/}
        {/*                disabled={!post}*/}
        {/*                onClick={() => {*/}
        {/*                    postFeedback(user)*/}
        {/*                }}>*/}
        {/*            Post Feedback*/}
        {/*        </button>*/}

        {/*    </div>*/}
        {/*    }*/}
        </div>
    )

}

}
PublicProfile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(PublicProfile)