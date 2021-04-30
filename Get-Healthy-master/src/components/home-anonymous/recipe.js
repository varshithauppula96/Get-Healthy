import React from 'react'

const Recipe=() =>{
    return(
        <div className=" mx-auto col-md-6 mb-4">


            <div className="card">


                <div className="view overlay">
                    {<img className="card-img-top" src="https://picsum.photos/id/429/1250/500"/>}
                    <a href="#">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>

                <div className="card-body">

                    <h4 className="card-title">Recipe</h4>

                    <p className="card-text">Get access to various diet plans and recipes videos</p>

                    <a href="/search/" className="btn btn-secondary">Know more</a>

                </div>

            </div>


        </div>
    )

}
export default Recipe