import React from 'react'

const Reviews =() =>{
    return(
        <div className=" mx-auto col-md-6 mb-4">


            <div className="card">


                <div className="view overlay">
                    {<img className="card-img-top" src="https://picsum.photos/id/192/1250/500"/>}
                    <a href="#">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>

                <div className="card-body">

                    <h4 className="card-title">Success Stories</h4>

                    <p className="card-text">Get motivated and learn from various successful stories!</p>

                    <a href="#" className="btn btn-primary">Know more</a>

                </div>

            </div>


        </div>
    )

}
export default Reviews