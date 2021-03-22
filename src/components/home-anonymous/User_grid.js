import React  from 'react'
import UserCard from "./User_card";
import {Link} from "react-router-dom";




const UserGrid =({courses, deleteCourse, updateCourse})=>{
    return(
        <div>


            <div className="card-deck mt-2">




                {
                    courses.map( course =>
                        <UserCard
                            key={course._id}
                            deleteCourse= {deleteCourse}
                            updateCourse= {updateCourse}
                            course={course}
                        /> )

                }
            </div>


        </div>
    )
}
export default UserGrid