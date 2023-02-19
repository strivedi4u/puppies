import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import TwoPuppieItem from '../../components/TwoPuppieItem';
function AvailablePuppie() {
    const URL = "/";
    const API = URL + 'api/puppie/status/Available';
    return (
        <>
            <Navbar available={"active"} />
            <PageHeader title= {["Fall in love with our",
            "adorable bulldog's puppies",
            "They are intelligent",
            "They are easy to train",
            "They love to play",
            "They are looking for",
            "Loving homes like yours!"]}
            des={"We have a variety of adorable bulldog puppies that are looking for loving and caring homes. Here are some details about the puppies that we currently have available:"}
            />
            <TwoPuppieItem API={API} URL={URL} />
            <Footer />
        </>
    );
}

export default AvailablePuppie;
