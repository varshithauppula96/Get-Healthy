import React from "react";
import './footer.css';

const FooterPage = () => {
    return (
        <div >
            <section style={{height:"80px"}}></section>


            <footer className="footer-bs">
                <div className="row">
                    <div className="col-md-3 footer-brand animated fadeInLeft">
                        <h2>About Us</h2>
                        <p> We are the application you all need to maintain a healthy life!</p>
                        <p>© 2021, All rights reserved</p>
                    </div>
                    <div className="col-md-4 footer-nav animated fadeInUp">
                        <h4>Menu —</h4>
                        <div className="col-md-6">
                            <ul className="pages">
                                <li><a href="/login">Login</a></li>
                                <li><a href="/register">Register</a></li>
                                <li><a href="/search">Recipe</a></li>
                                <li><a href="#">Advice</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list">
                                <h4>Contact US</h4>
                                <li>Toll Free Number:
                                    617 XXX 9683</li>
                                <li>Email:
                                    support@gethealthy.com</li>
                                <li>Address:
                                    GetHealthy Private Limited
                                    20 Bendemeer Road, #03-12
                                    BS Bendemeer Centre, Boston 02120</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 footer-social animated fadeInDown">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="https://www.facebook.com/pages/create/?ref_type=site_footer">Facebook</a></li>
                            <li><a href="https://twitter.com/?lang=en">Twitter</a></li>
                            <li><a href="https://www.instagram.com/">Instagram</a></li>

                        </ul>
                    </div>
                    <div className="col-md-3 footer-ns animated fadeInRight">
                        <h4>Newsletter</h4>
                        <p>Get to know our latest news!</p>

                    </div>
                </div>
            </footer>
            <section style={{textAlign: "center", margin: "10px auto"}}><p> Copyright © GetHealthy Wellness Private Limited</p></section>

        </div>
    )
}
export default FooterPage
