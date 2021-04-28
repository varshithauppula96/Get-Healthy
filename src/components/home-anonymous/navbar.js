import React from "react";
import "./navbar.css"

const Navbar = () => {
    return (
        <div >

            <nav className=" navbar  " style={{backgroundColor: "#3c3d41"}}>

                <div className="navbar-brand" href="#">
                    <i className=" pr-3 pb-1 text-white fa fa-heartbeat fa-2x"></i>
                    <span id="navbar-getHealthy" className=" text-white">GetHealthy</span>
                </div>
                <div className="float-right">
                            <span><div className="mr-2 btn btn-light"> <a href= "/register">
                            Sign up</a></div>

                            <div className="mr-2 btn btn-light"> <a href = "/login">
                                Sign in</a></div>

                                 <div className="btn btn-light"> <a href = "/home">
                                <i className="fas fa-home"></i></a></div>

    </span>
                </div>


            </nav>
        </div>
    )
}
export default Navbar