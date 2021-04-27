import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import userService, {findTrainers} from "../../services/home_user_services";
import Navbar from "../home-anonymous/navbar";
class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        gender:"",
        dateOfBirth:"",
        weightInKgs:"",
        heightInCms:"",
        userType:"",
        trainers:[],
        about:"",
        trainerId: "",
        errors: {}
    };
    constructor() {
        super();
    }

    componentDidMount() {
        userService.findTrainers().then(trainers => {
            console.log(trainers)
            this.setState({trainers})
            console.log(this.state)
        })


        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            gender:this.state.gender,
            dateOfBirth:this.state.dateOfBirth,
            weightInKgs:this.state. weightInKgs,
            heightInCms:this.state.heightInCms,
            userType:this.state.userType,
            trainerId:this.state.trainerId,
            about:this.state.about,
        };
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { errors } = this.state;
        return (
            <div>
            <Navbar/>
            <div className="p-5 m-5 bg-secondary text-white container-fill">
                <h1>Sign Up</h1>

                <br/>





                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="name"> Name </label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.name}
                                        error={errors.name}
                                        id="name"
                                        type="text"
                                        className={classnames("col-sm-10", {
                                            invalid: errors.name
                                        })}
                                    />

                                    <div className="text-danger">{errors.name}</div>
                                </div>



                            </div>


                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="email">Email</label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                        className={classnames("col-sm-10", {
                                            invalid: errors.email
                                        })}
                                    />

                                    <div className="text-danger">{errors.email}</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="password">Password</label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                        className={classnames("col-sm-10", {
                                            invalid: errors.password
                                        })}
                                    />

                                    <div className="text-danger">{errors.password}</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="password2">Confirm Password</label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password2}
                                        error={errors.password2}
                                        id="password2"
                                        type="password"
                                        className={classnames("col-sm-10", {
                                            invalid: errors.password2
                                        })}
                                    />

                                    <div className="text-danger">{errors.password2}</div>
                                </div>
                            </div>


                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="password2">Confirm Password</label>
                                <div className="col-sm-10">
                                    <select error={errors.gender}
                                            id="gender"
                                            className={classnames("col-sm-10", {
                                                invalid: errors.gender
                                            })}
                                            value={this.state.value}  onChange={this.onChange}>
                                        <option disabled selected value> -- select an option -- </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>

                                    </select>

                                    <div className="text-danger">{errors.gender}</div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="dateOfBirth">Date of Birth</label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.dateOfBirth}
                                        error={errors.dateOfBirth}
                                        id="dateOfBirth"
                                        type="date"
                                        className= {classnames("col-sm-10", {
                                            invalid: errors.dateOfBirth
                                        })}
                                    />

                                    <div className="text-danger">{errors.dateOfBirth}</div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="weightInKgs">Weight in Kgs</label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.weightInKgs}
                                        error={errors.weightInKgs}
                                        id="weightInKgs"
                                        type="text"
                                        className={classnames("col-sm-10", {
                                            invalid: errors.weightInKgs
                                        })}
                                    />

                                    <div className="text-danger">{errors.weightInKgs}</div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="heightInCms">Height in Cms</label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.heightInCms}
                                        error={errors.heightInCms}
                                        id="heightInCms"
                                        type="text"
                                        className={classnames("col-sm-10", {
                                            invalid: errors.heightInCms
                                        })}
                                    />

                                    <div className="text-danger">{errors.heightInCms
                                    }</div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="userType">UserType</label>
                                <div className="col-sm-10">
                                    <select error={errors.userType}
                                            id="userType"
                                            className={classnames("col-sm-10", {
                                                invalid: errors.userType
                                            })}
                                            value={this.state.value}  onChange={this.onChange}>
                                        <option disabled selected value> -- select an option -- </option>
                                        <option value="User">User</option>
                                        <option value="Trainer">Trainer</option>


                                    </select>

                                    <div className="text-danger">{errors.userType}</div>
                                </div>
                            </div>

                            <div className="form-group row">

                                <label className="col-sm-2 col-form-label"  htmlFor="trainerId">Trainer</label>
                                <div className="col-sm-10">

                                    <select disabled={this.state.userType === "Trainer" ? true : false}
                                            error={errors.trainerId}
                                            id="trainerId"
                                            className={classnames("col-sm-10", {
                                                invalid: errors.trainerId
                                            })}
                                            value={this.state.value}  onChange={this.onChange}>
                                        <option disabled selected value> -- select an option -- </option>
                                        {
                                            this.state.trainers.map((trainerId) => (
                                                <option key={trainerId._id} value={trainerId._id}>{trainerId.name}</option>
                                            ))
                                        }
                                    </select>

                                    <div className="text-danger">{errors.trainerId}</div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label  className="col-sm-2 col-form-label" htmlFor="about">Bio/About</label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.about}
                                        error={errors.about}
                                        id="about"
                                        type="about"
                                        className={classnames("col-sm-10", {
                                            invalid: errors.about
                                        })}
                                    />

                                    <div className="text-danger">{errors.about}</div>
                                </div>
                            </div>

                            <div className="col text-center" >
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",

                                    }}
                                    type="submit"
                                    className="btn btn-light  waves-effect waves-light hoverable blue accent-3"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>

            </div>
            </div>
        );
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));