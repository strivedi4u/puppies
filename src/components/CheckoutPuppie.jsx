import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
function CheckoutPuppie(props) {

    var name = localStorage.getItem("name");
    const [puppie, setPuppie] = useState([]);
    const [amount, setAmount] = useState();

    const [phone, setPhone] = useState();
    const [company, setCompany] = useState();
    const [comment, setComment] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [country, setCountry] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [postalCode, setPostalCode] = useState();
    const [checkbox, setCheckbox] = useState(0);

    function redirect() {
        window.history.back();
    }

    const URL = props.URL;
    const API1 = URL + "api/puppie/about/" + name;
    const API2 = URL + "api/paypal/pay";

    useEffect(() => {
        const getPuppies = async () => {
            let response = await axios.get(API1);
            setPuppie(response.data);
            if (response.data.length != 0 && response.data[0].amount == undefined) {
                setAmount("100.00");
                if(response.data[0].status==="Unavailable"){
                    swal("Unfortunatily!", "This Puppie is not available in current time.!", "error");
                    setInterval(redirect, 5000);
                }
            } else {
                setAmount(response.data[0].amount);
                if(response.data[0].status==="Unavailable"){
                    swal("Unfortunatily!", "This Puppie is not available in current time.!", "error");
                    setInterval(redirect, 5000);
                }
            }
        };
        getPuppies();

    }, []);



    const checkout = async () => {
        console.log("Checkout");
        if (phone) {
            console.log("Ok");
            let response = await axios.post(API2, {
                puppiename: puppie[0].name,
                amount: amount
            });
            console.log("Hi");
            console.log(response);
            console.log(response.data);
            if (response.data.link) {
                localStorage.setItem("phone", phone);
                localStorage.setItem("company", company);
                localStorage.setItem("comment", comment);
                localStorage.setItem("firstName", firstName);
                localStorage.setItem("lastName", lastName);
                localStorage.setItem("email", email);
                localStorage.setItem("address", address);
                localStorage.setItem("country", country);
                localStorage.setItem("state", state);
                localStorage.setItem("city", city);
                localStorage.setItem("postalCode", postalCode);
                localStorage.setItem("checkbox", checkbox);
            }
            window.location.replace(response.data.link);
        } else {
            alert("Please Enter the mobile no.");
        }
    }

    function skipThis() {
        if (document.getElementById("skip-this").style.display == "none") {
            document.getElementById("skip-this").style.display = "block";
        } else {
            document.getElementById("skip-this").style.display = "none";
        }
    }

    return (
        <>
            {puppie != 0 && <>
                <section className="section" id="product">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <br></br><br></br><br></br>
                                <h2>{puppie[0].name}</h2>
                                <span className="price"> Price :{puppie[0].amount}</span>
                                <hr />
                                <div className="left-images">
                                    <img src={URL + "static/" + puppie[0].image1} alt="" />
                                    <img src="https://logodix.com/logo/35003.png" alt="" className="mobile-display-n" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-content">
                                    <div className="login-form">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input placeholder="Please Enter Your Mobile Number" onChange={e => setPhone(e.target.value)} type="text" className="form-control" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <label>Company Name (Optional)</label>
                                            <input type="text" className="form-control" onChange={e => setCompany(e.target.value)} placeholder="Please Enter Your Company Name" />
                                        </div>

                                        <div className="form-group">
                                            <label>Any Special Comments (Optional)</label>
                                            <input type="text" onChange={e => setComment(e.target.value)} className="form-control" />

                                        </div>
                                        <label className="start-skip checkbox-inline pull-left remember-me"><input type="checkbox" value="1" onChange={e => setCheckbox(e.target.value)} onClick={(e) => { skipThis(); }} /> Use my address & personal details from my PayPal Account</label><br></br><br></br><br></br>

                                        <div id="skip-this">
                                            <div className="row">
                                                <div className="form-group col-lg-6">
                                                    <label>First Name</label>
                                                    <input type="text" onChange={e => setFirstName(e.target.value)} className="form-control" required="required" />
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <label>Last Name</label>
                                                    <input type="text" onChange={e => setLastName(e.target.value)} className="form-control" required="required" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" onChange={e => setEmail(e.target.value)} className="form-control" required="required" />
                                            </div>
                                            <div className="form-group">
                                                <label>Street Adress --Address Line #1</label>
                                                <input type="text" onChange={e => setAddress(e.target.value)} className="form-control" required="required" />
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-lg-6">
                                                    <label>Country</label>
                                                    <input type="text" onChange={e => setCountry(e.target.value)} className="form-control" required="required" />
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <label>County/State</label>
                                                    <input type="text" onChange={e => setState(e.target.value)} className="form-control" required="required " />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-lg-6">
                                                    <label>City</label>
                                                    <input type="text" onChange={e => setCity(e.target.value)} className="form-control" required="required" />
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <label>Postal Code/Zip-code</label>
                                                    <input type="text" onChange={e => setPostalCode(e.target.value)} className="form-control" required="required" />
                                                </div>

                                            </div></div>
                                        <div className="form-group clearfix">
                                            <br></br><button type="submit" onClick={() => { checkout() }} className="btn btn-primary pull-left">Check Out for Payment</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div></div>
                </section></>}
        </>
    );
}

export default CheckoutPuppie;
