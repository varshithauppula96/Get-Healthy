import React, {Component, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import UserService from "../../services/user-service";
import FeedbackService from "../../services/feedback-service";

class TrainerFollower extends Component {

    constructor() {
        super();
        this.state = {
            trainees: [],
            post: ""
        }
    }

const TrainerFollower = () =>{
    const[post, setPost] = useState("")
    const[user,setUser] = useState()
    let feed=""

    useEffect(()=> {
        UserService.getTrainees(trainerId).then((trainee) => setTrainees(trainee))
        // console.log(trainees)
    },[trainerId])

    const postFeedback = (trainee) => {
        let feedback = {
            "feedbackText": post,
            "trainerId": trainerId
            ,
            "userId": trainee["_id"],
            "nameOfUser": trainee["name"]
        }
        FeedbackService.postFeedbackToUser(feedback)
    }
    return(
        <div>
            <h3 style={{textAlign:"center"}}>Your Trainees</h3>
            <h5>You have {trainees.length} trainees</h5>
            <div className="container-fluid row">
                {
                    trainees.map((trainee) =>
                        <div>
                            <div className="col-1"></div>
                            <div>
                                <div className="col-3" key={trainee["_id"]}>
                                    <Link to={`../${trainee["_id"]}`}>
                                        {
                                            trainee["name"]
                                        }
                                    </Link>
                                </div>
                                <textarea id={trainee["_id"]}
                                          key={trainee["_id"]}
                                          className="form-control"
                                          onChange={(event) => {
                                              setPost(event.target.value)
                                          }}>
                                        </textarea>
                                <button className="btn btn-primary"
                                        key={trainee["_id"]}
                                        disabled={!post}
                                        onClick={() => {
                                            postFeedback(trainee)
                                        }}>
                                    Post Feedback
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TrainerFollower