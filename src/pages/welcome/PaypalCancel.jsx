import React from 'react';
import PaypalMessage from '../../components/PaypalMessage';
function PaypalCancel() {
    const URL = "/";
    const queryParams = new URLSearchParams(window.location.search);

    const token = queryParams.get('token');

    const API = URL + 'api/paypal/cancel/?token=' + token;

    return (
        <>
            <PaypalMessage API={API} />
        </>
    );
}

export default PaypalCancel;
