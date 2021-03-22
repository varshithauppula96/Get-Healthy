import React from 'react';

const Trainee = () => {
    return(
        <div className="container-fill">
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black",color:"white",
                fontFamily:"arial"}}>
                <div className="container-fluid">
                    <i className="fa fa-heartbeat fa-2x"></i>
                    <span>GetHealthy</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Diet</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">Trainees</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-light" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </nav>
                <span className="p-3" style={{fontSize:"30px",fontFamily:"verdana"}}>Profile</span>
            <a href="#">Edit Profile</a>
            <div className="row" style={{backgroundColor:"#d9faf5",margin:'10px'}}>
                <div className="col-5">
                    <div><h6>Name : Adarsh Reddy</h6></div>
                    <div><h6>Birthday: 1/1/1111</h6></div>
                    <div><h6>Gender: Male</h6></div>
                </div>
                <div className="col-5">
                    <div><h6>Email: something@gmail.com</h6></div>
                    <div><h6>Phone: 9999999999</h6></div>
                </div>
                <div className="col-2">
                    <img src="https://www.w3schools.com/w3css/img_lights.jpg"
                    style={{borderRadius:"50px",height:"100px",width:"100px"}}/>
                    <br/>
                    <i className="fa fa-edit">Image</i>
                </div>
            </div>
            <span className="p-3" style={{fontSize:"30px",fontFamily:"verdana"}}>Your Trainees</span>
            <br/><br/>
            <ul>
                <div className="row">
                <a className="col-2 p-2" style={{backgroundColor:"#d9faf5",margin:'10px',borderRadius:'20px',
                height:'50px',width:'300px',textAlign:'center'}}>
                    <img src="https://www.w3schools.com/w3css/img_lights.jpg"
                         style={{borderRadius:"20px",height:"30px",width:"30px"}}/>
                    Rishabh</a>
                <a className="col-2 p-2 d-block" style={{backgroundColor:"#d9faf5",margin:'10px',borderRadius:'20px',
                    height:'50px',width:'300px',textAlign:'center'}}>
                    <img src="https://www.w3schools.com/w3css/img_lights.jpg"
                         style={{borderRadius:"20px",height:"30px",width:"30px"}}/>
                    Rajesh</a>
                <a className="col-2 p-2 d-block" style={{backgroundColor:"#d9faf5",margin:'10px',borderRadius:'20px',
                    height:'50px',width:'300px',textAlign:'center'}}>
                    <img src="https://www.w3schools.com/w3css/img_lights.jpg"
                         style={{borderRadius:"20px",height:"30px",width:"30px"}}/>
                    Rahul</a>
                </div>
            </ul>
        </div>
    )
}

export default Trainee