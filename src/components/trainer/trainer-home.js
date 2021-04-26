import React, {useEffect, useState} from 'react';
import './trainer.css'
import {Link, useParams} from "react-router-dom";
import UserService from "../../services/home_user_services"
import FeedbackService from "../../services/feedback-service";
import UserHome from "../home-user/user-home";

const Trainer = ({user, logoutClick}) => {
    const[fields,setFieldValue] = useState([]);
    const[feedback,setFeedback] = useState([]);
    const[trainees, setTrainees] = useState([]);
    const feedbackCount = feedback.length;

    useEffect(()=>{
        getFeedback(user._id);
        UserService.getTrainees(user._id).then((trainee) => setTrainees(trainee))
    },[])

    const getFeedback = (userId) => {
        FeedbackService.getFeedbackByTrainerId(userId).then((feedback) =>{
            setFeedback(feedback);
        })
    }
    const removeFeedback = (fId) =>{
        FeedbackService.deleteFeedback(user._id,fId)
        FeedbackService.getFeedbackByTrainerId(user._id).then((feedback) => {
            setFeedback(feedback);
        })
        getFeedback(user._id)
    }

    return(
        <div>
            {
                user["userType"] === 'Trainer' &&
                <div className="row py-4 px-4">
                    <div className="col-12 mx-auto">
                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="px-4 pt-0 pb-4 cover">
                                <div className="media align-items-end profile-head">
                                    <div className="media-body mb-5 text-white">
                                        <h4 className="mt-0 mb-0">
                                            {user["name"]}
                                        </h4>
                                        <p className="small mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Boston
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light p-4 d-flex justify-content-end text-center">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">{feedbackCount}</h5>
                                        <i className="fas fa-comment text-muted mr-1"></i>
                                        <a href="#" className="text-muted">Feedbacks Given</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">{trainees.length}</h5>
                                        <i className="fas fa-user text-muted mr-1"></i>
                                        <Link to={`/home/user/${user._id}/trainees`} className="text-muted">Trainees</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="mb-10">About</h5>
                                <Link to={`/home/user/${user._id}/profile`}
                                      className="btn btn-outline-dark btn-sm float-right">Edit
                                    profile</Link>
                                <div className="p-4 rounded shadow-sm bg-light">
                                    {/*<p className="font-italic mb-0">Birthday : March 6</p>*/}
                                    {/*<p className="font-italic mb-0">Phone : 999999999</p>*/}
                                    <p className="font-italic mb-0">Email : {user["email"]}</p>
                                    <p className="font-italic mb-0">DOB : {user["dateOfBirth"]}</p>
                                    <p className="font-italic mb-0">Gender : {user["gender"]}</p>
                                    <p className="font-italic mb-0">Weight(Kgs) : {user["weightInKgs"]}</p>
                                    <p className="font-italic mb-0">Height(Cms) : {user["heightInCms"]}</p>
                                    <p className="font-italic mb-0">About : {user["about"]}</p>
                                    <p className="font-italic mb-0"></p>
                                </div>
                            </div>
                            <div className="py-4 px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h5 className="mb-2">Recent Feedback</h5>
                                    {/*<a href="#" className="btn btn-link text-muted">Show all*/}
                                    {/*</a>*/}
                                </div>
                                <div>
                                    {/*{console.log(feedback)}*/}
                                    {
                                        feedback.map((fd) => {
                                                return (
                                                    <div className="row mb-2">
                                                        <div className="p-4 rounded shadow-sm bg-light mb-3 col-12">
                                                            {
                                                                fd["feedbackText"]
                                                            } FOR &nbsp;
                                                            <Link to={`./${fd["userId"]}`}>
                                                                {
                                                                    fd["nameOfUser"]
                                                                }
                                                            </Link>
                                                            &nbsp; ON &nbsp;
                                                            {
                                                                fd["createdAt"]
                                                            }
                                                            <button
                                                                className="btn btn-danger float-right"
                                                                key={fd["_id"]}
                                                                id={fd["_id"]}
                                                                onClick={() => {
                                                                    removeFeedback(fd["_id"])
                                                                }}>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            // console.log(fd["feedbackText"])
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                user["userType"] == 'User' &&
                <UserHome></UserHome>
            }
        </div>

    )
}
export default Trainer