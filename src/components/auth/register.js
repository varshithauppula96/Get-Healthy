import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import userService, {findTrainers} from "../../services/home_user_services";

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
            <div className="p-5 m-5 border border-info container-fill">
                <h1>Sign Up</h1>
                <Link to="/" >
                    <i ></i> Home
                </Link>
                <br/>

                <p className="grey-text text-darken-1">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>



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

                                    <span className="red-text">{errors.name}</span>
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

                                    <span className="red-text">{errors.email}</span>
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

                                    <span className="red-text">{errors.password}</span>
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

                                    <span className="red-text">{errors.password2}</span>
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

                                    <span className="red-text">{errors.gender}</span>
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

                                    <span className="red-text">{errors.dateOfBirth}</span>
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

                                    <span className="red-text">{errors.weightInKgs}</span>
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

                                    <span className="red-text">{errors.heightInCms
                                    }</span>
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

                                    <span className="red-text">{errors.userType}</span>
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

                                    <span className="red-text">{errors.trainerId}</span>
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

                                    <span className="red-text">{errors.about}</span>
                                </div>
                            </div>

                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>

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