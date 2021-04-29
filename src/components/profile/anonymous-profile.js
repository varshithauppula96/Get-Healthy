import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import home_user_services from "../../services/home_user_services";
import {updateUser,logoutUser} from "../../actions/authActions";
import profile from "./profile";
import FeedbackService from "../../services/feedback-service";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const PublicProfile=() => {

    const[user,setUser] = useState([])
    const{profileId}  = useParams();
    const history = useHistory()
    useEffect(()=>{
        home_user_services.findUserById(profileId)
            .then((users)=>setUser(users))
    })
    return (
        <div>
            <button className="btn btn-light btn-md" style={{margin:"10px"}}
            onClick={() => history.goBack()}>
            Go Back
            </button>
                {user.userType == 'Trainer' &&
                <div className="container-fluid">
                    <h1 style={{textAlign: "center"}}>Your Trainer</h1>
                    <ul className="list-group">
                        <li className="list-group-item bg-dark text-white">
                            Name : {user.name}
                        </li>
                        <li className="list-group-item bg-dark text-white">
                            Name : {user.dateOfBirth}
                        </li>
                        <li className="list-group-item bg-dark text-white">
                            Name : {user.gender}
                        </li>
                        <li className="list-group-item bg-dark text-white">
                            Name : {user.about}
                        </li>
                    </ul>
                </div>
                }

                {user.userType == 'User' &&
                <div className="container-fluid otherprofile">
                    <ul className="list-group bg-dark">
                        <li className="list-group-item">
                            Name : {user.name}
                        </li>
                        <li className="list-group-item">
                            Name : {user.dateOfBirth}
                        </li>
                        <li className="list-group-item">
                            Name : {user.gender}
                        </li>
                        <li className="list-group-item">
                            Name : {user.about}
                        </li>
                    </ul>
                </div>
                }
        </div>
    )
}



export default PublicProfile

