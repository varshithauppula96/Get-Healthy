import React, {useState, useEffect, Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./profile.css"
import {updateUser, logoutUser} from "../../actions/authActions";
import Home_user_services from "../../services/home_user_services";
import classnames from "classnames";
import Navbar from "../home-anonymous/navbar";
import FeedbackService from "../../services/feedback-service";

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            editing: false,
            feedbacks: []
        }
        this.state = {
            _id: "",
            trainerId: "",
            name: "",
            password: "",
            password2: "",
            userType: "",
            email: "",
            gender: "",
            dateOfBirth: "",
            weightInKgs: "",
            heightInCms: "",
            about: "",
            trainer: {}
        }
    }

    componentDidMount() {

        FeedbackService.getFeedbackForUser(this.props.auth.user._id)
            .then(f => this.setState({feedbacks: f}))

        this.setState({
            _id: this.props.auth.user._id,
            trainerId: this.props.auth.user.trainerId,
            name: this.props.auth.user.name,
            password: this.props.auth.user.password,
            userType: this.props.auth.user.userType,
            email: this.props.auth.user.email,
            gender: this.props.auth.user.gender,
            dateOfBirth: this.props.auth.user.dateOfBirth,
            weightInKgs: this.props.auth.user.weightInKgs,
            heightInCms: this.props.auth.user.heightInCms,
            about: this.props.auth.user.about,
        })
        Home_user_services.findUserById(this.props.auth.user.trainerId)
            .then(t => this.setState({trainer: t}))

    }

    updateDetails = () => {
        this.setState({editing: false})
        console.log()
    }

    handleInputChange = (value) => {

        this.setState({
            name: value,
            password: value,
            gender: value,
            weightInKgs: value,
            heightInCms: value,
            about: value
        });
    };

    handleUpdate = () => {
        const userUpdated = {
            _id: this.state._id,
            name: this.state.name,
            password: this.state.password,
            gender: this.state.gender,
            weightInKgs: this.state.weightInKgs,
            heightInCms: this.state.heightInCms,
            about: this.state.about,
            email: this.state.email,
            trainerId: this.state.trainerId,
            dateOfBirth: this.state.dateOfBirth,
            userType: this.state.userType
        }

        this.props.updateUser(userUpdated);
        this.setState({editing: false})
    };

    render() {

        const user = this.props.auth;

        const {classes} = this.props;

        const feedbacks = this.state.feedbacks

        return (
            <div>
                <Navbar/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className='container-fluid'>

                    <h1>User Profile</h1>

                    {
                        user.isAuthenticated == false &&
                        <div>
                            <div className='alert alert-warning'>
                                Not logged in
                            </div>
                            <Link className='btn btn-outline-dark' to='/login'>Go to login page</Link>
                        </div>
                    }
                    {
                        user.isAuthenticated == true && !this.state.editing &&
                        <div>

                            <button className=' mr-3 btn btn-outline-dark'
                                    onClick={() => this.setState({editing: true})}>Edit profile
                            </button>

                            <button className='btn btn-outline-dark'><a id="hoverbtn " href="/dashboard">Dashboard</a>
                            </button>
                            <br/>
                            <ul className=' list-group mt-5'>
                                <li className=' bg-dark text-white list-group-item'>User ID: {user.user._id}</li>
                                <li className='bg-dark text-white list-group-item'>Display Name : {user.user.name}</li>
                                <li className='bg-dark text-white list-group-item'> Password : {user.user.password}</li>
                                <li className='bg-dark text-white list-group-item'>Username : {user.user.email}</li>
                                <li className='bg-dark text-white list-group-item'>Gender : {user.user.gender}</li>
                                <li className='bg-dark text-white list-group-item'>DoB : {user.user.dateOfBirth}</li>
                                <li className='bg-dark text-white list-group-item'>Weight(Kgs)
                                    : {user.user.weightInKgs}</li>
                                <li className='bg-dark text-white list-group-item'>Height(Cms)
                                    : {user.user.heightInCms}</li>
                                <li className='bg-dark text-white list-group-item'>Bio : {user.user.about}</li>
                                {this.props.auth.user.userType == 'User' &&
                                <li className='bg-dark text-white list-group-item'>
                                    Your Trainer : &nbsp;
                                    <div className="bg-white">
                                        <Link
                                            to={`profile/${this.props.auth.user.trainerId}`}>
                                            {this.state.trainer["name"]}
                                        </Link>
                                    </div>
                                </li>
                                }
                            </ul>

                        </div>
                    }
                    {
                        user.isAuthenticated == true && this.state.editing &&
                        <div>

                            <button className='btn btn-outline-primary float-right'
                                    onClick={() => this.setState({editing: false})}>Back to profile
                            </button>
                            <br/>
                            <ul className='list-group mt-5 '>
                                <li className='list-group-item'>ID:

                                    {user.user._id}


                                </li>
                                <li className='list-group-item'>Display Name:
                                    <input className='form-control'
                                           defaultValue={this.state.name}
                                           onChange={
                                               (e) => {
                                                   this.setState({name: e.target.value})
                                               }
                                           }
                                    />
                                </li>
                                <li className='list-group-item'>Email: {user.user.email}</li>
                                <li className='list-group-item'>Role: {user.user.userType}</li>
                                <li className='list-group-item'>DoB: {user.user.dateOfBirth}</li>
                                <li className='list-group-item'>Gender:
                                    <select className='form-control'
                                            onChange={
                                                (e) => {
                                                    this.setState({gender: e.target.value})
                                                }
                                            }
                                            value={this.state.gender}>
                                        <option value='Male'> Male</option>
                                        <option value='Female'>Female</option>
                                        <option value='other'>Other</option>
                                    </select>
                                </li>
                                <li className='list-group-item'>Weight(Kgs):
                                    <input type="number"
                                           className='form-control'
                                           defaultValue={this.state.weightInKgs}
                                           onChange={
                                               (e) => {
                                                   this.setState({weightInKgs: e.target.value})
                                               }
                                           }
                                    />
                                </li>
                                <li className='list-group-item'>Height(Cms):
                                    <input type="number"
                                           className='form-control'
                                           defaultValue={this.state.heightInCms}
                                           onChange={
                                               (e) => {
                                                   this.setState({heightInCms: e.target.value})
                                               }
                                           }
                                    />
                                </li>
                                <li className='list-group-item'>Bio:
                                    <input
                                        type="text"
                                        className='form-control'
                                        defaultValue={this.state.about}
                                        onChange={
                                            (e) => {
                                                this.setState({about: e.target.value})
                                            }
                                        }
                                    />
                                </li>
                            </ul>
                            <button
                                onClick={this.handleUpdate}
                                className=" mb-5 btn btn-dark btn-block">Update
                            </button>
                        </div>

                    }
                    {
                        this.props.auth.user.userType == 'User' &&
                        <div>
                            <h4 style={{textAlign: "center", margin: "15px"}}>
                                Your Trainer Feedbacks:
                            </h4>
                            {
                                feedbacks &&
                                feedbacks.map((fd) => {
                                    return (
                                        <div className="row mb-2">
                                            <div className="p-4 rounded shadow-sm bg-light mb-3 col-12">
                                                {
                                                    fd["feedbackText"]
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}


Profile.propTypes = {
    updateUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {updateUser, logoutUser}
)(Profile);