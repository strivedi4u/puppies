import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import LetsTalk from '../../components/LetsTalk';
function ContactUs() {
    const URL = "/";
    return (
        <>
            <Navbar contact={"active"} />
            <PageHeader title={["We are here",
                "We are committed to",
                "providing you the best customer service.",
                "We welcome any questions",
                "We welcome any concerns",
                "We welcome any feedback",
                "We want to hear from you",
                "Let's talk!"]}
                des={"Are you interested in bringing one of our bulldog puppies into your home, we would love to hear from you. We can provide you with more information about each puppy, as well as answer any questions you might have about their care and training. We believe that every puppy deserves a loving and responsible owner, and we are committed to helping our puppies find the perfect homes. Please don't hesitate to contact us if you have any questions or if you're interested in adopting one of our puppies."}
            />
            <LetsTalk />
            <Footer />
        </>
    );
}

export default ContactUs;
