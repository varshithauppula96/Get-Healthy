import React from 'react'

const Workout =() =>{
    return(
        <div className=" mx-auto col-md-6 mb-4">


            <div className="card">


                <div className="view overlay">
                    {<img className="card-img-top" src="https://picsum.photos/1250/500"/>}
                    <a href="#">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>

                <div className="card-body">

                    <h4 className="card-title">Diet and Workout plans</h4>

                    <p className="card-text">Get access to various diet plans and recipies along with a perfect
                    exercise routine with out Workout plan videos</p>

                    <a href="#" className="btn btn-primary">Know more</a>

                </div>

            </div>


        </div>
    )

}
export default Workout