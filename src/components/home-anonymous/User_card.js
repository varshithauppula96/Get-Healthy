import React ,{useState} from 'react';
import {Link} from "react-router-dom";
const UserCard = (
    {
        user,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteUser,
        updateUser
    }) => {
    const [editing, setEditing] = useState(false)
    const [name, setName] = useState(user.name)
    const saveUser = () => {
        setEditing(false)
        const newUser = {
            ...user,
            name: name
        }
        updateUser(newUser)
    }
    return (
        <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6 col-xs-1">
            <div className="card" >
                {<img className="card-img-top" src="https://picsum.photos/300/200" />}
                <div className="card-body" >
                    <h5 className="card-title">
                        {!editing &&
                        // <a href={`/profile/${user._id}`}>
                        <h3>{user.name}</h3>
                        // </a>
                        }
                        {editing &&
                        <input
                            className="form-control "
                            onChange={(e) => setName(e.target.value)}
                            value={name}/>
                        }
                    </h5>
                    <p className="card-text">{user.about}</p>
                   <p><b>Weight:</b> {user.weightInKgs}Kg</p>
                    <p><b>Height:</b>{user.heightInCms}Cm</p>

                </div>
            </div>
        </div>
    )}
export default UserCard