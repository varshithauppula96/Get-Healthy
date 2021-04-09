import React from 'react';
import './trainer.css'
import {Link} from "react-router-dom";
const Trainer = () => {
    return(
        <div className="row py-4 px-4">
            <div className="col-12 mx-auto">
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3">
                                <img
                                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.natucate.com%2Fen%2Ftypes-of-travel%2Fnature-adventure-travel&psig=AOvVaw35UgnQ9lttrJp8aMoZ_ida&ust=1617592833936000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCboITR4-8CFQAAAAAdAAAAABAI"
                                alt="..." width="130" className="rounded mb-2 img-thumbnail"/>
                                <a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit
                                profile</a></div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">Adarsh Reddy</h4>
                                <p className="small mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Boston</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">3</h5>
                                <i className="fas fa-user text-muted mr-1"></i>
                                <a href="#" className="text-muted">Comments</a>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">50</h5>
                                    <i className="fas fa-user text-muted mr-1"></i>
                                <Link to="../followers" className="text-muted">Followers</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 py-3">
                        <h5 className="mb-10">About</h5>
                        <div className="p-4 rounded shadow-sm bg-light">
                            <p className="font-italic mb-0">Birthday : March 6</p>
                            <p className="font-italic mb-0">Phone : 999999999</p>
                            <p className="font-italic mb-0">Email : hi@gmail.com</p>
                            <p className="font-italic mb-0">Lives in Boston</p>
                            <p className="font-italic mb-0">Fitness Trainer</p>
                        </div>
                    </div>
                    <div className="py-4 px-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-2">Recent Activity</h5>
                            <a href="#" className="btn btn-link text-muted">Show all
                            </a>
                        </div>
                        <div className="row mb-2">
                            <div className="p-4 rounded shadow-sm bg-light mb-3 col-12">
                                Nice Work
                            </div>
                            <div className="p-4 rounded shadow-sm bg-light mb-3 col-12">
                                Nice Job
                            </div>
                            <div className="p-4 rounded shadow-sm bg-light mb-3 col-12">
                                Cool Work
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="container-fill">
        //     <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black",color:"white",
        //         fontFamily:"arial"}}>
        //         <div className="container-fluid">
        //             <i className="fa fa-heartbeat fa-2x"></i>
        //             <span>GetHealthy</span>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        //                     aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                         <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Reviews</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Diet</a>
        //                     </li>
        //                     <li>
        //                         <a className="nav-link" href="#">Trainees</a>
        //                     </li>
        //                 </ul>
        //                 <div className="d-flex">
        //                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //                         <button className="btn btn-light" type="submit">Search</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        //         <span className="p-3" style={{fontSize:"30px",fontFamily:"verdana"}}>Profile</span>
        //     <a href="#">Edit Profile</a>
        //     <div className="row" style={{backgroundColor:"#d9faf5",margin:'10px'}}>
        //         <div className="col-5">
        //             <div><h6>Name : Adarsh Reddy</h6></div>
        //             <div><h6>Birthday: 1/1/1111</h6></div>
        //             <div><h6>Gender: Male</h6></div>
        //         </div>
        //         <div className="col-5">
        //             <div><h6>Email: something@gmail.com</h6></div>
        //             <div><h6>Phone: 9999999999</h6></div>
        //         </div>
        //         <div className="col-2">
        //             <img src="https://www.w3schools.com/w3css/img_lights.jpg"
        //             style={{borderRadius:"50px",height:"100px",width:"100px"}}/>
        //             <br/>
        //             <i className="fa fa-edit">Image</i>
        //         </div>
        //     </div>
        //     <span className="p-3" style={{fontSize:"30px",fontFamily:"verdana"}}>Your Trainees</span>
        //     <br/><br/>
        //     <ul>
        //         <div className="row">
        //         <a className="col-2 p-2" style={{backgroundColor:"#d9faf5",margin:'10px',borderRadius:'20px',
        //         height:'50px',width:'300px',textAlign:'center'}}>
        //             <img src="https://www.w3schools.com/w3css/img_lights.jpg"
        //                  style={{borderRadius:"20px",height:"30px",width:"30px"}}/>
        //             Rishabh</a>
        //         <a className="col-2 p-2 d-block" style={{backgroundColor:"#d9faf5",margin:'10px',borderRadius:'20px',
        //             height:'50px',width:'300px',textAlign:'center'}}>
        //             <img src="https://www.w3schools.com/w3css/img_lights.jpg"
        //                  style={{borderRadius:"20px",height:"30px",width:"30px"}}/>
        //             Rajesh</a>
        //         <a className="col-2 p-2 d-block" style={{backgroundColor:"#d9faf5",margin:'10px',borderRadius:'20px',
        //             height:'50px',width:'300px',textAlign:'center'}}>
        //             <img src="https://www.w3schools.com/w3css/img_lights.jpg"
        //                  style={{borderRadius:"20px",height:"30px",width:"30px"}}/>
        //             Rahul</a>
        //         </div>
        //     </ul>
        // </div>
    )
}

export default Trainer