import React  from 'react'
import TrainerCard from "./trainer-card";
import {Link} from "react-router-dom";


const TrainerGrid =({trainers})=>{

    return(
        <div>

            <div className="card-deck mt-2">


                {

                    trainers.map( trainer =>
                        <TrainerCard
                            key={trainer._id}

                            trainer={trainer}
                        /> )
                }
            </div>

        </div>
    )
}
export default TrainerGrid
