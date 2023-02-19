import React from 'react';
import BestFriend1 from "../images/BestFriend1.png";
import BestFriend2 from "../images/BestFriend2.png";
import BestFriend3 from "../images/BestFriend3.png";
import BestFriend4 from "../images/BestFriend4.png";
function BestFriend() {
    return (
        <section className="section" id="explore">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-content">
                            <h2>Your Best Friend</h2>
                            <span>Adopt a puppy and enjoy the support of a worldwide Frenchie family!</span>
                            <div className="quote">
                                <i className="fa fa-quote-left"></i><p>Make yourself the best possible parent for your puppy by learning about them!</p>
                            </div>
                            <p>As devoted lovers of dogs and especially French bulldogs, 10 years ago our family has started to breed our own puppies to make other people happy with healthy and loving Frenchies. Originally, we are two brothers: Tom and Geri. Tom has a degree in animal science, therefore he puts his professional mind alongside with his big heart into raising Frenchies. Geri, an Olympic athlete in freestyle wrestling, is a master of endurance when it comes to the daily care of puppies besides running the family business.
                                As responsible French bulldog breeders, we at TomKings set very high health, genetic and wellbeing standards to make sure that all our Frenchies feel like family members while living a happy, fulfilled life and enjoying parenthood of beautiful fur babies. Instead of kennels or crates, we raise them in a vast, green garden with plenty of place to roam around and we let them sleep and rest in a cozy, large family house where our dogs and pups can socialize with humans of any age. Because well-balanced puppies come from well-balanced family backgrounds..</p>
                            <div className="main-border-button">
                                <a href="products.html">Discover More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="second-image">
                                        <img src={BestFriend1} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="first-image">
                                        <img src={BestFriend2} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="second-image">
                                        <img src={BestFriend3} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="first-image">
                                        <img src={BestFriend4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BestFriend;
