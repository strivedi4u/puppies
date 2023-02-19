import React from 'react';
import PaypalMessage from '../../components/PaypalMessage';
function PaypalSuccess() {
    const URL = "/";
    const queryParams = new URLSearchParams(window.location.search);

    const money = queryParams.get('money');
    const paymentId = queryParams.get('paymentId');
    const token = queryParams.get('token');
    const PayerID = queryParams.get('PayerID');

    const API = URL + 'api/paypal/success/?money=' + money + '&paymentId=' + paymentId + '&token=' + token + '&PayerID=' + PayerID;

    return (
        <>
            <PaypalMessage API={API} />
        </>
    );
}

export default PaypalSuccess;
