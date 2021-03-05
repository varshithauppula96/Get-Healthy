import React from 'react'

const Coaching =() =>{
    return(<div className=" mx-auto col-md-6 mb-4">


            <div className="card">


                <div className="view overlay">
                    {<img className="card-img-top" src="https://picsum.photos/id/1077/1250/500"/>}
                    <a href="#">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>

                <div className="card-body">

                    <h4 className="card-title">Personal Coaching</h4>

                    <p className="card-text">We Understand there is no one size fits all. Our nutritionists
                    and fitness trainers will create diet and workout plans that will help YOU achieve your goal!</p>

                    <a href="#" className="btn btn-primary">Know more</a>

                </div>

            </div>


        </div>
    )

}
export default Coaching