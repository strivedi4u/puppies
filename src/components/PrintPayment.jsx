import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PrintPayment(props) {
    const [paymentDetails, setPaymentDetails] = useState([]);
    const [puppieDetails, setPuppieDetails] = useState([]);
    const URL = "/";
    const API1 = URL + "api/payment/transcation/" + props.TranscationId;
    const API2 = URL + "api/puppie/about/" + props.PuppieName;
    console.log(props.TranscationId);

    useEffect(() => {
        const getPaymentDetails = async () => {
            let response1 = await axios.get(API1);
            if(response1.data.length != 0){
                let response2 = await axios.get(URL + "api/puppie/about/" + response1.data.puppieName);
                console.log(response2);
                setPuppieDetails(response2.data[0]);
            }
            console.log(response1.data);
            setPaymentDetails(response1.data);
        };
        getPaymentDetails();

    }, []);


    return (
        <>
            <button className="printBtn" onClick={(e) => { window.print() }}><i className="fa fa-print"></i></button>
            <div className="table-wrapper">
                <div id="printArea">
                    <div className="table-title">
                        <center><h2><b>Invoice</b> Details</h2>
                        </center>
                    </div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th className="text-center" colSpan="4">Important Details</th>
                            </tr>
                            <tr>
                                <th>Ordered By</th>
                                <td>{paymentDetails.firstName + " " + paymentDetails.lastName}</td>
                                <th rowSpan="2">Puppy Name: {paymentDetails.puppieName}</th>
                                <td rowSpan="8" className="puppy-img">
                                    <img
                                        src={URL + "static/" + puppieDetails.image1} alt='' />
                                </td>
                            </tr>
                            <tr>
                                <th>Phone No</th>
                                <td>
                                    {paymentDetails.phone}
                                </td>
                            </tr>
                            <tr>
                                <th>Company Name</th>
                                <td>
                                {paymentDetails.company}
                                </td>
                                <th rowSpan="2">Puppy Color  {puppieDetails.color}</th>
                            </tr>
                            <tr>
                                <th>Any Special Comment</th>
                                <td>
                                {paymentDetails.comment}
                                </td>
                            </tr>
                            <tr>
                                <th>Email ID</th>
                                <td>
                                {paymentDetails.email}
                                </td>
                                <th rowSpan="2">Birth-Day : 10-02-2022 (DD-MM-YYYY)</th>
                            </tr>
                            <tr>
                                <th>Shipping Address</th>
                                <td>
                                {paymentDetails.address}
                                </td>
                            </tr>
                            <tr>
                                <th>Country</th>
                                <td>
                                {paymentDetails.country}
                                </td>
                                <th rowSpan="2">Weight  {puppieDetails.weight}</th>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>
                                {paymentDetails.state}
                                </td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>
                                {paymentDetails.city}
                                </td>
                                <th rowSpan="2">Breed : {puppieDetails.breed}</th>
                                <th rowSpan="2">
                                    <center>Gender : {puppieDetails.gender}</center>
                                </th>
                            </tr>
                            <tr>
                                <th>Postal Code / Zip-code</th>
                                <td>
                                {paymentDetails.postalCode}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th style={{ textAlign: "center" }} colSpan="4">Payment Details</th>
                            </tr>
                            <tr>
                                <th style={{ width: "15%" }}>Transaction Id</th>
                                <td style={{ width: "35%" }}>
                                {paymentDetails.transactionId}
                                </td>
                                <th style={{ width: "15%" }}>Order Id</th>
                                <td style={{ width: "35%" }}>
                                {paymentDetails.orderId}
                                </td>
                            </tr>
                            <tr>
                                <th>Payment Status</th>
                                <td>
                                {paymentDetails.paymentStatus}
                                </td>
                                <th>Date</th>
                                <td>
                                {paymentDetails.date}
                                </td>
                            </tr>
                            <tr>
                                <th>Shipping Status</th>
                                <td>
                                {paymentDetails.shippingStatus}
                                </td>
                                <th>Net Amount Paid</th>
                                <td>
                                {paymentDetails.puppieAmount}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <center>This Payment Slip is generated ONLINE and verify the order details using the PayPal getway.</center>
                    <br /><br /><br />
                    <img style={{ marginTop: "-20px", height: "200px", borderRadius: "50%", width: "200px", opacity: "1.1" }} alt=""
                        src=" https://img.freepik.com/premium-vector/approved-seal-stamp-vector_20448-173.jpg?w=2000" />

                    <img style={{ marginTop: "-20px", height: "130px", width: "130px", borderRadius: "50%", opacity: "1.1", }} alt=""
                        src="https://cdn.pixabay.com/photo/2020/04/10/13/23/paid-5025785_1280.png" />

                    <img style={{ marginTop: "-20px", height: "130px", width: "150px", borderRadius: "50%", opacity: "1.1" }} alt=""
                        src="https://t3.ftcdn.net/jpg/03/53/11/94/360_F_353119406_ioNOUPVKBIUGDVEIapvkvLaPODx90rTZ.jpg" />

                    <img style={{ marginTop: "-20px", height: "180px", width: "180px", borderRadius: "50%", opacity: "1.1" }} alt=""
                        src="https://yt3.ggpht.com/5qAj3nd-NdyUX3eRARBbLV2lUJL3T3qUnZG3H2eBB3FeYjjj60iSRUfkovabULPiYyCbKNMnig=s900-c-k-c0x00ffffff-no-rj" />
                </div>

            </div>
        </>
    );
}

export default PrintPayment;
