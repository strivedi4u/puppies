import React from 'react';
import logo from "../images/logo.svg"
function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="first-item">
                                <div className="logo">
                                    <img src={logo} alt="logo" />
                                </div>
                                <ul>
                                    <li><a href="/">Company Name
                                        As a trustworthy elite breeder-family of French bulldogs, we dedicate our lives to raise healthy, balanced, and well-mannered Frenchie furbabies for future owners.</a></li>
                                    <li><a href="/">mail@company.com</a></li>
                                    <li><a href="/">010-020-0350</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h4>Puppies &amp; Categories</h4>
                            <ul>
                                <li><a href="/">All Available Puppies</a></li>
                                <li><a href="/">Boy Puppies</a></li>
                                <li><a href="/">Girl Puppies</a></li>
                                <li><a href="/">English Bull Dog's Puppies</a></li>
                                <li><a href="/">French Bull Dog's Puppies</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="/">Homepage</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Help</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>Help &amp; Information</h4>
                            <ul>
                                <li><a href="/">Help</a></li>
                                <li><a href="/">FAQ's</a></li>
                                <li><a href="/">Shipping</a></li>
                                <li><a href="/">Tracking ID</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="under-footer">
                                <p>Copyright © 2023 Company Name, Ltd. All Rights Reserved.
                                </p>
                                <ul>
                                    <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="/"><i className="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
