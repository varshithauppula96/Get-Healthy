import React from 'react'
import TrainerStories from "./trainer-stories";
import Navbar from "./navbar";

const TrainerPage = () => {
    return (
        <div>
            <Navbar/>

        <div className="container-fluid">

            <br/>
            <br/>
            <br/>
            <br/>

            <h1 className = " pb-3 mb-3 text-centerA"> Our Trainers!</h1>
            <h6 className = " pb-3 mb-3">Take a look at what our trainers have to say-</h6>
            <TrainerStories/>
        </div>
        </div>
    )
}
export default TrainerPage
