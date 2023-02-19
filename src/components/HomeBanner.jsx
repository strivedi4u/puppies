import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import HomeBanner1 from "../images/HomeBanner1.png";
import HomeBanner2 from "../images/HomeBanner2.png";
import HomeBanner3 from "../images/HomeBanner3.png";
import HomeBanner4 from "../images/HomeBanner4.png";
import HomeBanner5 from "../images/HomeBanner5.png";
function HomeBanner() {
    const typingRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typingRef.current, {
            strings: ["We are Company Name", "We have French Bull Dog's Puppies", "We have English Bull Dog's Puppies", "Adopt a lovable bulldog puppy today!"],
            typeSpeed: 120,
            backSpeed: 60,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className="main-banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-content">
                            <div className="thumb">
                                <div className="inner-content">
                                    <div className='typing'><span ref={typingRef}></span></div><br></br>
                                </div>
                                <div className="inner-content">
                                    <div className="main-border-button">
                                        <span> Bringing joy and companionship to your home, Experience the playful and gentle nature of bulldog puppies.</span>
                                        <a href="/">Purchase Now!</a>
                                    </div>
                                </div>
                                <img src={HomeBanner1} alt="puppies" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>French</h4>
                                                <span>All french bull dog's pupppies</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>French</h4>
                                                    <p>All french bull dog's pupppies</p>
                                                    <div className="main-border-button">
                                                        <a href="/">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={HomeBanner2} alt='puppies' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>English</h4>
                                                <span>All english bull dog's pupppies</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>English</h4>
                                                    <p>All english bull dog's pupppies</p>
                                                    <div className="main-border-button">
                                                        <a href="/">View More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={HomeBanner3} alt='puppies' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Boy Puppies</h4>
                                                <span>All the boy puppies of french & english bull dogs</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Boy Puppies</h4>
                                                    <p>All the boy puppies of french & english bull dogs</p>
                                                    <div className="main-border-button">
                                                        <a href="/">Visit More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={HomeBanner4} alt='puppies' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Girl Puppies</h4>
                                                <span>All the girl puppies of french & english bull dogs</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Girl Puppies</h4>
                                                    <p>All the girl puppies of french & english bull dogs</p>
                                                    <div className="main-border-button">
                                                        <a href="/">View More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={HomeBanner5} alt='puppies' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;
