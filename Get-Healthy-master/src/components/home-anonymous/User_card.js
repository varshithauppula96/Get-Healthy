import React ,{useState} from 'react';
import {Link} from "react-router-dom";
const UserCard = (
    {
        user,
    }) => {

    return (
        <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6 col-xs-1">
            <div className="card" >
                {<img className="card-img-top" src="https://picsum.photos/300/200" />}
                <div className="card-body" >
                    <h5 className="card-title">
                        <h3>{user.name}</h3>
                    </h5>
                    <p className="card-text">{user.about}</p>
                   <p><b>Weight:</b> {user.weightInKgs}kg</p>
                    <p><b>Height: </b>{user.heightInCms}cm</p>

                </div>
            </div>
        </div>
    )}
export default UserCard