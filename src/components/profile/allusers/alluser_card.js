import React ,{useState} from 'react';
import {Link} from "react-router-dom";
const AllUserCard = (
    {
        user,
    }) => {

    return (
        <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6 col-xs-1">
            <div className="card" >
                {<img className="card-img-top" src="https://picsum.photos/300/200" />}
                <div className="card-body" >
                    <h5 className="card-title">
                        <a href={`/profile/${user._id}`}>
                        <h3>{user.name}</h3>
                        </a>
                    </h5>


                </div>
            </div>
        </div>
    )}
export default AllUserCard