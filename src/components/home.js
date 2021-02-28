import React from 'react'
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    render(){

        return(

            <>
                <div >
                    <nav className="  p-3 navbar navbar-light" style={{backgroundColor: "#98c0d6"}}>

                        <a className="navbar-brand" href="#">
                            <i className="fa fa-spa fa-2x"></i>
                            GetHealthy
                        </a>
                        {<img className="container-fluid" src="https://picsum.photos/1250/500" />}
                    </nav>

                    <h2 className="text-center">Here's how we work</h2>
<div className="text-center">
    <button className=" m-3 p-3">food</button>
    <button className=" m-3 p-3">food</button>
    <button className=" m-3 p-3">food</button>
    <button className="m-3 p-3">food</button>
</div>

</div>

            </>
        )

}
}
