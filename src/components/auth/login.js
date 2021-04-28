import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Navbar from "../home-anonymous/navbar";
import "../home-anonymous/navbar.css"
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",

            errors: {}
        };
    }
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
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
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };
    render() {
        const { errors } = this.state;
        return (
            <div>
                <Navbar/>
            <br/>
                <br/>
                <br/>

            <div className=" main p-5 m-5 bg-secondary  text-white container-fill">
                <h1>Sign Up</h1>

                <br/>

                        <form noValidate onSubmit={this.onSubmit}>

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
                                        invalid: errors.email || errors.emailnotfound
                                    })}
                                />

                                    <div className="text-danger">
                  {errors.email}
                                    {errors.emailnotfound}
                </div>
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
                                        invalid: errors.password || errors.passwordincorrect
                                    })}
                                />

                                <div className="text-danger">
                  {errors.password}
                                    {errors.passwordincorrect}
                </div>
                            </div>
                            </div>

                            <div className="col text-center">
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-light  waves-effect waves-light hoverable blue accent-3"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        );
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);