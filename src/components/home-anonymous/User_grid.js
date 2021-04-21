import React  from 'react'
import UserCard from "./User_card";
import {Link} from "react-router-dom";


const UserGrid =({users, deleteUser, updateUser})=>{
    return(
        <div>

            <div className="card-deck mt-2">


                {
                    users.map( user =>
                        <UserCard
                            key={user._id}
                            deleteUser= {deleteUser}
                            updateUser= {updateUser}
                            user={user}
                        /> )
                }
            </div>

        </div>
    )
}
export default UserGrid