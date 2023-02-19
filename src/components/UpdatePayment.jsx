import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
function UpdatePayment(props) {
    const URL = "/";
    const API1 = URL + "api/payment/transcation/" + props.TransactionId;
    const API2 = URL + "api/payment/" + props.Id;
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [company, setCompany] = useState();
    const [country, setCountry] = useState();
    const [postalCode, setPostalCode] = useState();
    const [city, setCity] = useState();
    const [address, setAddress] = useState();
    const [state, setState] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [comment, setComment] = useState();
    const [puppieName, setPuppieName] = useState();
    const [puppieAmount, setPuppieAmount] = useState();
    const [orderId, setOrderId] = useState();
    const [transactionId, setTranscationID] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const [shippingStatus, setShippingStatus] = useState();

    function redirect() {
        window.location.reload(false);
    }

    useEffect(() => {

        if (props.TransactionId) {
            fetch(API1, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((data) => {
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                    setCompany(data.company);
                    setCountry(data.country);
                    setPostalCode(data.postalCode);
                    setCity(data.city);
                    setAddress(data.address);
                    setState(data.state);
                    setPhone(data.phone);
                    setEmail(data.email);
                    setComment(data.comment);
                    setPuppieName(data.puppieName)
                    setPuppieAmount(data.puppieAmount);
                    setOrderId(data.orderId);
                    setTranscationID(data.transactionId);
                    setPaymentStatus(data.paymentStatus);
                    setShippingStatus(data.shippingStatus);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
    }, [props.TransactionId]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.put(API2, {
            firstName: firstName,
            lastName: lastName,
            company: company,
            country: country,
            postalCode: postalCode,
            city: city,
            address: address,
            state: state,
            phone: phone,
            email: email,
            comment: comment,
            puppieName: puppieName,
            puppieAmount: puppieAmount,
            orderId: orderId,
            transactionId: transactionId,
            paymentStatus: paymentStatus,
            shippingStatus: shippingStatus,
        }, {
            headers: {
                "auth-token": localStorage.getItem('auth-token')
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    swal("Good job!", "Payment Details have been successfully saved", "success");
                    setInterval(redirect, 2000);
                } else {
                    swal("Unfortunatilly!", "Payment Details have been unsuccessfully saved", "error");
                }
            })
            .catch((error) => {
                console.log(error);
                swal("Unfortunatilly!", error.response.data.error, "error");
            });
    }




    window.onclick = function (event) {
        var popdata = document.getElementById('popup-form');
        var popdata1 = document.getElementsByClassName('updatingTable')[0];
        if (event.target == popdata | event.target == popdata1) {
            document.getElementById("popup").style.display = "none";
        }
        var span = document.getElementsByClassName("close")[0];
        var popdata = document.getElementById("popup");
        if (event.target == span) {
            popdata.style.display = "none";
        }
    }

    function close() {
        var popdata = document.getElementById("popup");
        popdata.style.display = "none";
    }


    return (<>
        <div id="popup" className="popdata">
            <div className="popdata-contents">
                <button className="close" onClick={(e) => { close() }}>&times;</button>


                <section className="updatingTable">
                    <form onSubmit={handleOnSubmit} method='POST' id="popup-form" encType='multipart/form-data'>
                        <div className="container">
                            <div className="row gutters">
                                <div className="col-lg-12">
                                    <h6 className="mb-2 text-primary">Transaction Details</h6>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Puppy Name</label>
                                        <input defaultValue={puppieName} onChange={e => setPuppieName(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input defaultValue={firstName} onChange={e => setFirstName(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input defaultValue={lastName} onChange={e => setLastName(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone No.</label>
                                        <input defaultValue={phone} onChange={e => setPhone(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email ID</label>
                                        <input defaultValue={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input defaultValue={company} onChange={e => setCompany(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Shipping Address</label>
                                        <input defaultValue={address} onChange={e => setAddress(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input defaultValue={country} onChange={e => setCountry(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>State</label>
                                        <input defaultValue={state} onChange={e => setState(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input defaultValue={city} onChange={e => setCity(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Postal Code</label>
                                        <input defaultValue={postalCode} onChange={e => setPostalCode(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Amount Paid</label>
                                        <input defaultValue={puppieAmount} onChange={e => setPuppieAmount(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Order ID</label>
                                        <input defaultValue={orderId} onChange={e => setOrderId(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Transaction ID</label>
                                        <input defaultValue={transactionId} onChange={e => setTranscationID(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>


                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Payment Status</label>
                                        <select style={{ color: "black", width: "100%" }} defaultValue={paymentStatus} onChange={e => setPaymentStatus(e.target.value)} type="type" className="form-control">
                                            <option defaultValue={"Incompleted"}>Incompleted</option>
                                            <option defaultValue={"Completed"}>Completed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Shipping Status</label>
                                        <select style={{ color: "black" }} defaultValue={shippingStatus} onChange={e => setShippingStatus(e.target.value)} type="type" className="form-control">
                                            <option defaultValue={"Pending"}>Pending</option>
                                            <option defaultValue={"Delivered"}>Delivered</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Special Comment</label>
                                        <textarea style={{ height: "35px", resize: "vertical" }} defaultValue={comment} onChange={e => setComment(e.target.value)} className="form-control"
                                            placeholder="More details about Puppy"></textarea>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button data-dismiss="model" className="btn">Cancel</button>
                                    <button type="submit" id="updatePuppy" className="btn">Update Details</button>
                                </div>



                            </div>
                        </div>


                    </form>
                    <br /><br /><br />
                </section>

            </div>
        </div></>
    );
}

export default UpdatePayment;
