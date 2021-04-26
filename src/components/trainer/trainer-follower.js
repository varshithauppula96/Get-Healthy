import React, {Component, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import UserService from "../../services/home_user_services";
import FeedbackService from "../../services/feedback-service";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

class TrainerFollower extends Component {

    constructor() {
        super();
        this.state = {
            trainees: [],
            post: "",
            feed: ""
        }
    }

    componentDidMount() {
        UserService.getTrainees(this.props.auth.user._id)
            .then((trainee) => {
                this.setState({
                    trainees: trainee
                })
            })
    }

    postFeedback = (trainee) => {
        let feedback = {
            "feedbackText": this.state.post,
            "trainerId": this.props.auth.user._id,
            "userId": trainee["_id"],
            "nameOfUser": trainee["name"]
        }
        FeedbackService.postFeedbackToUser(feedback)
    }

    render(){
        const {user} = this.props.auth;
        const {classes, history} = this.props;

        return (
        <div>
            <h3 style={{textAlign:"center"}}>Your Trainees</h3>
            <h5>You have {this.state.trainees.length} trainees</h5>
            <div className="container-fluid row">
                {
                    this.state.trainees.map((trainee) =>
                        <div>
                            <div className="col-1"></div>
                            <div key={trainee["_id"]}>
                                <div className="col-3">
                                    <Link to={`../${trainee["_id"]}`}>
                                        {
                                            trainee["name"]
                                        }
                                    </Link>
                                </div>

                                <textarea className="form-control"
                                          onChange={(event) => {
                                              this.setState({
                                                  post: event.target.value
                                              })
                                          }}>
                                        </textarea>

                                <button className="btn btn-primary"
                                        disabled={!this.state.post}
                                        onClick={() => {
                                            this.postFeedback(trainee)
                                            history.goBack()
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
}

TrainerFollower.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(TrainerFollower)