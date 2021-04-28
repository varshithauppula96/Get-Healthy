import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import Navbar from "./navbar";
const TrainerCard = (
    {
        trainer,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteUser,
        updateTrainer
    }) => {
    const [editing, setEditing] = useState(false)
    const [name, setName] = useState(trainer.name)
    const saveTrainer = () => {
        setEditing(false)
        const newTrainer = {
            ...trainer,
            name: name
        }
        updateTrainer(newTrainer)
    }
    return (
        <div>



        <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6 col-xs-1">
            <div className="card" >
                {<img className="card-img-top" src="https://picsum.photos/300/200" />}
                <div className="card-body" >
                    <h5 className="card-title">
                        {!editing &&
                        <h3>{trainer.name}</h3>
                        }
                        {editing &&
                        <input
                            className="form-control "
                            onChange={(e) => setName(e.target.value)}
                            value={name}/>
                        }
                    </h5>
                    <p className="card-text">{trainer.about}</p>
                    <p><b>Weight:</b> {trainer.weightInKgs}kg</p>
                    <p><b>Height: </b>{trainer.heightInCms}cm</p>

                </div>
            </div>
        </div>
        </div>
    )}
export default TrainerCard
