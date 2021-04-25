import React, {useState, useEffect, Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            editing: false
        }
    }


    render () {
        const { user } = this.props.auth;

        console.log(user);

        const { classes } = this.props;


        return(
            <div className='container-fluid'>
                <h1>Profile</h1>
                {!user &&
                <>
                    <div className='alert alert-warning'>
                        Not logged in
                    </div>
                    <Link className='btn btn-outline-primary' to='/login'>Go to login page</Link>
                </>
                }
                {
                    user && !this.state.editing &&
                    <div>
                        <h3>User Information</h3>
                        <button className='btn btn-outline-primary float-right' onClick={() => this.setState({editing:true})}>Edit profile</button>
                        <ul className='list-group mt-5'>
                            <li className='list-group-item'>Display Name: {user.name}</li>
                            <li className='list-group-item'>Username: {user.email}</li>
                            <li className='list-group-item'>Profile ID: {user._id}</li>
                            <li className='list-group-item'>Role: {user.userType}</li>
                        </ul>

                    </div>
                }
                {
                    user && this.state.editing &&
                    <div>
                        <ul className='list-group'>
                            <li className='list-group-item'>Display Name:
                                <input className='form-control'
                                       value={user.name}
                                       onChange="lol"
                                />
                            </li>
                            <li className='list-group-item'>Username: {user.email} (cannot change)</li>
                            <li className='list-group-item'>New password:
                                <input className='form-control'
                                       type='password'
                                       value={user.password}
                                       onChange="hehe"
                                />
                            </li>
                            <li className='list-group-item'>Profile ID: {user._id} (cannot change)</li>
                            <li className='list-group-item'>Role:
                                <select className='form-control' onChange="hi" value={user.userType}>
                                    <option value='user'>User</option>
                                    <option value='superuser'>Superuser</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                }
                {
                    JSON.stringify(user)
                }
            </div>
        )
    }
}

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Profile);
