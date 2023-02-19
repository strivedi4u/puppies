import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import AddNewPuppie from '../../components/AddNewPuppie';
function Add() {
    var loggedIn = localStorage.getItem("auth-token");
    useEffect(() => {
        if (!loggedIn) {
            window.location.href = '/';
        }
    },);
    return (
        <>
            <Navbar add={"active"} />
            <PageHeader title={["Hi Admin", "Hello Montana", "Welcome to Company Name", "Welcome to your Add Puppies"]}
            des={"Manage your website with ease as an admin and showcase the cute personalities of your bulldog puppies with high-quality photos and videos. Keep the supply chain and payment details organized and efficient, and add personalized comments to make your customers feel special. By doing so, you'll help your puppies find their forever homes faster and bring joy to families everywhere."}
            />
            <AddNewPuppie />
            <Footer />
        </>
    );
}

export default Add;
