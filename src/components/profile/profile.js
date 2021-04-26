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
        this.state = {
            userId:"",
            username:"",
            userType:"",
            email:"",
            redirect:false
        }
    }
    componentDidMount(){
        this.setState({
            userId: this.props.auth.user._id,
            username: this.props.auth.name,
            userType: this.props.auth.userType,
            email:this.props.auth.email
        })
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
    // handleUpdate = () => {
    //     var loginUser = {
    //         username: this.state.username.trim(),
    //         password: this.state.password.trim(),
    //         aboutMe:this.state.aboutMe
    //     }
    //
    //     if(loginUser.username && loginUser.password){
    //         UserService.updateUser(this.state.userId,loginUser).then(
    //             user => this.setState({
    //                 sessionUser: user
    //             },()=>{
    //                 this.setRedirect();
    //             }))}
    // };

    render () {
        const { user } = this.props.auth;
        console.log("User===" + this.user);
        const { classes } = this.props;

        return(
            <div className='container-fluid'>
                <h1>Profile</h1>
                {
                    user===undefined &&
                <>
                    {
                        alert("Not logged In")
                    }
                    {/*<div className='alert alert-warning'>*/}
                    {/*    Not logged in*/}
                    {/*</div>*/}
                    {/*<Link className='btn btn-outline-primary' to='/login'>Go to login page</Link>*/}
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
                                       value={this.state.name}
                                       onChange={this.handleInputChange}
                                />
                            </li>
                            <li className='list-group-item'>Username: {user.email} (cannot change)</li>
                            <li className='list-group-item'>New password:
                                <input className='form-control'
                                       type='password'
                                       value={this.state.password}
                                       onChange={this.handleInputChange}
                                />
                            </li>
                            <li className='list-group-item'>Profile ID: {user._id} (cannot change)</li>
                            <li className='list-group-item'>Role:
                                <select className='form-control' onChange={this.handleInputChange} value={this.state.userType}>
                                    <option value='user'>User</option>
                                    <option value='superuser'>Trainer</option>
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