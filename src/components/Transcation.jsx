import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../css/Payment.css';
import UpdatePayment from './UpdatePayment';
function Transcation(props) {
    const [payment, setPayment] = useState([]);
    const [transactionId, setTranscationId] = useState();
    const [id, setId] = useState();
    const API = props.URL + "api/payment";

    function redirect() {
        window.location.reload(false);
    }

    useEffect(() => {
        const getPuppies = async () => {
            let response = await axios.get(API, {
                headers: {
                    "auth-token": localStorage.getItem('auth-token')
                }
            });
            setPayment(response.data);
        };
        getPuppies();
    }, []);

    const filterPayment = async (event) => {
        let response = await axios.get(API + event, {
            headers: {
                "auth-token": localStorage.getItem('auth-token')
            }
        });
        setPayment(response.data);
    }


    const deleteItem = async (id) => {
        swal({
            title: "Are you sure?",
            text: "Do you really want to delete this puppy!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (e) => {
                if (e) {
                    var API1 = API + "/" + id;
                    try {
                        let response = await axios.delete(API1, {
                            headers: {
                                "auth-token": localStorage.getItem('auth-token')
                            }
                        });
                        if (response.status === 200) {
                            setInterval(redirect, 2000);
                        }
                    } catch (error) {
                        console.log(error);
                    }
                    swal("This Payment has been deleted now!", { icon: "success", });
                } else {
                    swal("Couldn't deleted the payment. Please try again!", { icon: "error" });
                }
            });
    }

    function openpopup(transactionId, id) {
        var popdata = document.getElementById("popup");
        popdata.style.display = "block";
        setTranscationId(transactionId);
        setId(id);
    }

    return (
        <><UpdatePayment TransactionId={transactionId} Id={id} />
            <div className="tbwrapper">
                <div className="tbtitle">
                    <div className="display-inline">
                        <div className="heading-part">
                            <h2>Manage <b>Transaction</b></h2>
                        </div>
                        <div className="filter-btn">
                            <div className="btn-group" data-toggle="buttons">
                                <label className="btn btn-info active">
                                    <input type="radio" name="status" onClick={(e) => { filterPayment("") }} value="all" defaultChecked /> All
                                </label>
                                <label className="btn btn-success">
                                    <input type="radio" name="status" onClick={(e) => { filterPayment("/shipping/Pending") }} value="active" /> Shipping Pending
                                </label>
                                <label className="btn btn-warning">
                                    <input type="radio" name="status" onClick={(e) => { filterPayment("/payment/Incompleted") }} value="inactive" /> Incomplete Payment
                                </label>
                                <label className="btn btn-danger">
                                    <input type="radio" name="status" onClick={(e) => { filterPayment("/shipping/Delivered") }} value="expired" /> Delivered
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tbstripedDiv">
                    <table className="table tbstriped tbhover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Puppy Name</th>
                                <th>Ordered&nbsp;By</th>
                                <th>Email&nbsp;ID</th>
                                <th>Phone&nbsp;Number</th>
                                <th>Paid&nbsp;Amount</th>
                                <th>Payment&nbsp;Status</th>
                                <th>Shipping&nbsp;Status</th>

                                <th>Shipping&nbsp;Address</th>

                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Postal&nbsp;Code</th>
                                <th>Transaction&nbsp;ID</th>
                                <th>Ordered&nbsp;Date</th>
                                <th>Action&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payment.map((item, i) =>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td><a onClick={(e) => openpopup(item.transactionId, item._id)}>{item.puppieName}</a></td>
                                    <td>{item.firstName + " " + item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.puppieAmount}</td>
                                    <td>{item.paymentStatus}</td>
                                    <td>{item.shippingStatus}</td>
                                    <td>{item.address}</td>
                                    <td>{item.country}</td>
                                    <td>{item.state}</td>
                                    <td>{item.city}</td>
                                    <td>{item.postalCode}</td>
                                    <td>{item.transactionId}</td>
                                    <td>{item.date}</td>
                                    <td><a href={"/payment/" + item.transactionId}><i className="fa fa-eye"></i></a>&nbsp;&nbsp;
                                        <span onClick={(e) => openpopup(item.transactionId, item._id)}><i className="fa fa-edit"></i></span>&nbsp;&nbsp;
                                        <span onClick={(e) => { deleteItem(item._id) }}><i className="fa fa-trash"></i></span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Transcation;
