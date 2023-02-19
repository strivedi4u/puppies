import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Transcation from '../../components/Transcation';
function Payment() {
    var loggedIn = localStorage.getItem("auth-token");
    const URL = "/";
    useEffect(() => {
        if (!loggedIn) {
            window.location.href = '/';
        }
    },);
    return (
        <>
            <Navbar more={"active"} />
            <PageHeader title={["Hi Admin", "Hello Montana", "Welcome to Company Name", "Welcome to your Transcation Details"]}
                des={"Manage your website with ease as an admin and showcase the cute personalities of your bulldog puppies with high-quality photos and videos. Keep the supply chain and payment details organized and efficient, and add personalized comments to make your customers feel special. By doing so, you'll help your puppies find their forever homes faster and bring joy to families everywhere."}
            />
            <Transcation URL={URL}/>
            <Footer />
        </>
    );
}

export default Payment;
