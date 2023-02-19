import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function PaypalMessage(props) {
    const navigate = useNavigate();
    const [paypalDetails, setPaypalDetails] = useState([]);
    // const [phone, setPhone] = useState();
    // const [company, setCompany] = useState();
    // const [comment, setComment] = useState();
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    // const [email, setEmail] = useState();
    // const [address, setAddress] = useState();
    // const [country, setCountry] = useState();
    // const [state, setState] = useState();
    // const [city, setCity] = useState();
    // const [postalCode, setPostalCode] = useState();
    // const [checkbox, setCheckbox] = useState(0);

    const URL = "/";
    const API2 = URL + 'api/payment/';
    const API = props.API;

    var flag = false;
    useEffect(() => {
        const getPayPal = async () => {
            let response1 = await axios.get(API);
            if (response1.data.length != 0 && flag === false) {
                console.log("ok");
                console.log(response1.data.payer.payer_info.first_name);
                console.log(response1.data.payer.payer_info);
                console.log(response1.data.id);
                flag = true;
                if (localStorage.getItem("checkbox") == 1) {
                    let response2 = await axios.post(API2, {
                        phone: localStorage.getItem("phone"),
                        company: localStorage.getItem("company"),
                        comment: localStorage.getItem("comment"),
                        firstName: response1.data.payer.payer_info.first_name,
                        lastName: response1.data.payer.payer_info.last_name,
                        email: response1.data.payer.payer_info.email,
                        address: response1.data.payer.payer_info.shipping_address.line1,
                        country: response1.data.payer.payer_info.shipping_address.country_code,
                        state: response1.data.payer.payer_info.shipping_address.state,
                        city: response1.data.payer.payer_info.shipping_address.city,
                        postalCode: response1.data.payer.payer_info.shipping_address.postal_code,
                        puppieName: response1.data.transactions[0].item_list.items[0].name,
                        puppieAmount: response1.data.transactions[0].amount.total,
                        orderId: response1.data.cart,
                        transactionId: response1.data.id,
                        paymentStatus: response1.data.state,
                        shippingStatus: "Pending",
                        date: response1.data.update_time
                    });
                    console.log("With Checkbox");
                    console.log(response2);
                    if(response2.data.length != 0 ){
                        navigate("/payment/" + response1.data.id);
                    }
                    console.log(response1.data.payer);
                } else {
                    let response3 = await axios.post(API2, {
                        phone: localStorage.getItem("phone"),
                        company: localStorage.getItem("company"),
                        comment: localStorage.getItem("comment"),
                        firstName: localStorage.getItem("firstName"),
                        lastName: localStorage.getItem("lastName"),
                        email: localStorage.getItem("email"),
                        address: localStorage.getItem("address"),
                        country: localStorage.getItem("country"),
                        state: localStorage.getItem("state"),
                        city: localStorage.getItem("city"),
                        postalCode: localStorage.getItem("postalCode"),
                        puppieName: response1.data.transactions[0].item_list.items[0].name,
                        puppieAmount: response1.data.transactions[0].amount.total,
                        orderId: response1.data.cart,
                        transactionId: response1.data.id,
                        paymentStatus: response1.data.state,
                        shippingStatus: "pending",
                        date: response1.data.update_time
                    });
                    console.log("Without Checkbox");
                    if(response3.data.length != 0 ){
                        navigate("/payment/" + response1.data.id);
                    }
                }
            }
            setPaypalDetails(response1.data);
        }
        getPayPal();
    }, []);


    console.log("Length " + paypalDetails.length);
    console.log(paypalDetails);


    return (
        <div className="subscribe">
            <h1>Payment Message</h1>
        </div>
    );
}

export default PaypalMessage;
