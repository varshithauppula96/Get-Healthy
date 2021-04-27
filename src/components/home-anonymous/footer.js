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
                        <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec
                            ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim,
                            porta pellentesque ex mi ut sem.</p>
                        <p>© 2014 BS3 UI Kit, All rights reserved</p>
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
                                    1806 632 9683</li>
                                <li>Email:
                                    support@gethelthy.com</li>
                                <li>Address:
                                    GetHealthy Private Limited
                                    20 Bendemeer Road, #03-12
                                    BS Bendemeer Centre, Singapore 339914</li>
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
                        <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                        
                    </div>
                </div>
            </footer>
            <section style={{textAlign: "center", margin: "10px auto"}}><p> Copyright © GetHealthy Wellness Private Limited</p></section>

        </div>
    )
}
export default FooterPage