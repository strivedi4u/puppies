import React, { useState, useEffect } from 'react';
import axios from 'axios';
function LatestPuppies(props) {
    const URL = "/";
    const [puppie, setPuppie] = useState([]);
    const API = props.API;

    useEffect(() => {
        const getPuppies = async () => {
            let response = await axios.get(API);
            setPuppie(response.data);
        };
        getPuppies();
    }, []);

    const handleCheckout = (name)=>{
        localStorage.setItem("name", name);
        window.location.href = '/checkout';
    }

    return (
        <section className="section" id="kids">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>Latest {props.Title} Puppies</h2>
                            <span>These are all the available latest french and english bull dog's {props.Title} puppies.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="kid-item-carousel">
                            <div className="owl-kid-item owl-carousel">
                                {puppie.map((item, i) =>
                                    <div key={i} className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href={"/about/" + item.name}><i className="fa fa-eye"></i></a></li>
                                                    <li><a href="/"><i className="fa fa-star"></i></a></li>
                                                    <li><a onClick={(e) => { handleCheckout(item.name) }}><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={URL + "static/" + item.image1} alt="" />
                                        </div>
                                        <div className="down-content">
                                            <h4>{item.name}</h4>
                                            <span>$600.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestPuppies;
