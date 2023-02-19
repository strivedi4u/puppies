import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import CheckoutPuppie from '../../components/CheckoutPuppie';
function Checkout(props) {
    const URL = "/";
    return (
        <>
            <Navbar />
            <PageHeader title={["A loyal companion",
                "Adorable puppies",
                "ready for adoption!",
                "Check out our available puppies"]}
                des={"Thank you for considering our bulldog puppies. We're passionate about our puppies and we believe that they have a lot of love to offer to their new families."}
            />
            <CheckoutPuppie URL={URL} />
            <Footer />
        </>
    );
}

export default Checkout;
