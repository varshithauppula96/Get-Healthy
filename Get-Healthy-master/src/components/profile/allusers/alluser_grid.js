import React  from 'react'
import AllUserCard from "./alluser_card";
import {Link} from "react-router-dom";



const AllUserGrid =({users})=>{
    let count =users.length;

    return(
        <div>

            <div className="card-deck mt-2">


                {

                    users.map( user =>
                        <AllUserCard
                            key={user._id}

                            user={user}
                        /> )
                }
            </div>

        </div>
    )
}
export default AllUserGrid