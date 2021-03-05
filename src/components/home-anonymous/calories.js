import React from 'react'

const Calories =() =>{
    return(
        <div className=" mx-auto col-md-6 mb-4">


            <div className="card">


                <div className="view overlay">
                    {<img className="card-img-top" src="https://picsum.photos/id/4/1250/500"/>}
                        <a href="#">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                </div>

                <div className="card-body">

                    <h4 className="card-title">Calorie Counting and Much more!</h4>

                    <p className="card-text">Track your progress by tracking your food intake, water consumption,workouts and much more
                    to stay on track.</p>

                    <a href="#" className="btn btn-primary">Know more</a>

                </div>

            </div>


        </div>
)

}
export default Calories