import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import Navbar from "./navbar";
const TrainerCard = (
    {
        trainer,

    }) => {


    return (




        <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6 col-xs-1">
            <div className="card text-center" >
                <div className="card-header" >

                        {trainer.name}

                </div>
                <div className="card-body">


                    <p class="card-text">{trainer.about}</p>
                    <a href={`mailto:${trainer.email}`} class="btn btn-primary">Contact Me: {trainer.email}</a>
                </div>
                <div class="card-footer text-muted">
                    {trainer.gender}
                </div>
            </div>

        </div>
    )}
export default TrainerCard
