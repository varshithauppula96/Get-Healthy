import React  from 'react'
import UserCard from "./User_card";
import {Link} from "react-router-dom";


const UserGrid =({users})=>{
    let count =users.length;

    return(
        <div>

            <div className="card-deck mt-2">


                {

                    users.slice(count-3,count).map( user =>
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