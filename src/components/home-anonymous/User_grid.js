import React  from 'react'
import UserCard from "./User_card";
import {Link} from "react-router-dom";


const UserGrid =({users})=>{
    return(
        <div>

            <div className="card-deck mt-2">


                {
                    users.slice(0,3).map( user =>
                        <UserCard
                            key={user._id}

                            user={user}
                        /> )
                }
            </div>

        </div>
    )
}
export default UserGrid