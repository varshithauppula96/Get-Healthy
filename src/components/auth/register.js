import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            gender:"",
            dateOfBirth:"",
            weightInKgs:"",
            heightInCms:"",
            userType:"",
            trainer:"",
            about:"",
            errors: {}
        };
    }
    componentDidMount() {
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
            trainer:this.state.trainer,
            about:this.state.about,
        };
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to
                            home
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account? <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.name
                                    })}
                                />
                                <label htmlFor="name">Name</label>
                                <span className="red-text">{errors.name}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("", {
                                        invalid: errors.email
                                    })}
                                />
                                <label htmlFor="email">Email</label>
                                <span className="red-text">{errors.email}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password2
                                    })}
                                />
                                <label htmlFor="password2">Confirm Password</label>
                                <span className="red-text">{errors.password2}</span>

                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.gender}
                                    error={errors.gender}
                                    id="gender"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.gender
                                    })}
                                />
                                <label htmlFor="gender">Gender</label>
                                <span className="red-text">{errors.gender}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.dateOfBirth}
                                    error={errors.dateOfBirth}
                                    id="dateOfBirth"
                                    type="date"
                                    className={classnames("", {
                                        invalid: errors.dateOfBirth
                                    })}
                                />
                                <label htmlFor="dateOfBirth">Date of Birth</label>
                                <span className="red-text">{errors.dateOfBirth}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.weightInKgs}
                                    error={errors.weightInKgs}
                                    id="weightInKgs"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.weightInKgs
                                    })}
                                />
                                <label htmlFor="weightInKgs">Weight in Kgs</label>
                                <span className="red-text">{errors.weightInKgs}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.heightInCms}
                                    error={errors.heightInCms}
                                    id="heightInCms"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.heightInCms
                                    })}
                                />
                                <label htmlFor="heightInCms">Height in Cms</label>
                                <span className="red-text">{errors.heightInCms
                                }</span>
                            </div>

                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userType}
                                    error={errors.userType}
                                    id="userType"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.userType
                                    })}
                                />
                                <label htmlFor="userType">UserType</label>
                                <span className="red-text">{errors.userType}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.trainer}
                                    error={errors.trainer}
                                    id="trainer"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.trainer
                                    })}
                                />
                                <label htmlFor="trainer">Trainer</label>
                                <span className="red-text">{errors.trainer}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.about}
                                    error={errors.about}
                                    id="about"
                                    type="about"
                                    className={classnames("", {
                                        invalid: errors.about
                                    })}
                                />
                                <label htmlFor="about">Bio/About</label>
                                <span className="red-text">{errors.about}</span>
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