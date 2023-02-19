import React from 'react';
import { useParams } from "react-router-dom";
import PrintPayment from '../../components/PrintPayment';
function PaymentSearch() {
    let { transcationId } = useParams();
    return (
        <><br></br><br></br><br></br><br></br>
            <PrintPayment TranscationId={transcationId} />
        </>
    );
}

export default PaymentSearch;
