import React from "react";
import './footer.css';

const Navbar = () => {
    return (
        <div >

            <nav className="   navbar " style={{backgroundColor: "#3c3d41"}}>

                <a className="navbar-brand" href="#">
                    <i className=" pr-3 pb-1 text-white fa fa-heartbeat fa-2x"></i>
                    <span className="text-white">GetHealthy</span>
                </a>
                <div className="float-right">
                            <span><div className="mr-2 btn btn-light"> <a href= "/register">
                            Sign up</a></div>

                            <div className="btn btn-light"> <a href = "/login">
                                Sign in</a></div>
    </span>
                </div>


            </nav>
        </div>
    )
}
export default Navbar