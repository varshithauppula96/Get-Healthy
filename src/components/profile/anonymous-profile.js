import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import home_user_services from "../../services/home_user_services";
import profile from "./profile";

const PublicProfile = () => {
    const{profileId} = useParams();
    const [users,setUsers] =useState([])
    useEffect(() =>{
// fetch("http://localhost:3000/api/quizzes")
//     .then(response => response.json())
//     .then((quizzes)=>{setQuizzes(quizzes)

        home_user_services.findUserById(profileId).then((users) => {setUsers(users)})
    }, [])
    return(
        <div>
<h1>hi</h1>
    {
        console.log(users)
    }
        </div>

    )
}

export default PublicProfile;