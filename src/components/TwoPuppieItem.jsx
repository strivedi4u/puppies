import React, { useState, useEffect } from 'react';
import axios from 'axios';
function TwoPuppieItem(props) {
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
        <section className="section" id="all-puppies">
            <div className="container">
                <div className="row">
                    {puppie.map((item, i) =>
                        <div key={i} className="col-lg-6">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><a href={"/about/" + item.name}><i className="fa fa-eye"></i></a></li>
                                            <li><a href="/"><i className="fa fa-star"></i></a></li>
                                            <li><a onClick={(e) => { handleCheckout(item.name) }}><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src={props.URL + "static/" + item.image1} alt="" />
                                </div>
                                <center>
                                    <div className="down-content">
                                        <h4>{item.name}</h4>
                                        <span>{item.color}
                                            , {item.breed},
                                            {item.gender},
                                            {item.birthday}.</span>
                                    </div>
                                </center>
                            </div>
                        </div>)}
                </div>
            </div>
        </section>
    );
}

export default TwoPuppieItem;
