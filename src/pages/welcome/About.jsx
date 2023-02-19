import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import AboutPuppie from '../../components/AboutPuppie';
function About() {
    const URL = "/";
    return (
        <>
            <Navbar about={"active"} />
            <PageHeader title={["a truly special",
                "cherish your time",
                "from the fun",
                "love and affection"]}
                des={"Playing with puppies is a great stress-reliever, and their boundless energy and enthusiasm can be infectious. Whether it's running around the yard or chasing after a toy, the puppies are always up for a good time. And there's nothing quite like the feeling of a puppy cuddling up to you, looking up at you with those big, innocent eyes"}
            />
            <AboutPuppie URL={URL} />
            <Footer />
        </>
    );
}

export default About;
