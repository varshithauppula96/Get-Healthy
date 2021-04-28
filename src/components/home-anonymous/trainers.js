import React from 'react'
import TrainerStories from "./trainer-stories";

const TrainerPage = () => {
    return (
        <div className="container-fluid">
            <h1 className = " pb-3 mb-3"> Our Trainers!</h1>
            <h6 className = " pb-3 mb-3">Take a look at what our trainers have to say-</h6>
            <TrainerStories/>
        </div>
    )
}
export default TrainerPage
