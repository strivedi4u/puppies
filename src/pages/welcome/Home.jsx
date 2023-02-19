import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HomeBanner from '../../components/HomeBanner';
import LatestPuppie from '../../components/LatestPuppie';
import BestFriend from '../../components/BestFriend';
import Features from '../../components/Features';
import LetsTalk from '../../components/LetsTalk';
function Home() {
    const URL = "/";
    const API1 = URL + 'api/puppie/gender/Boy/';
    const API2 = URL + 'api/puppie/gender/Girl/';
    return (
        <>
            <Navbar home={"active"} />
            <HomeBanner />
            <LatestPuppie API={API1} Title="Boy" />
            <LatestPuppie API={API2} Title="Girl" />
            <BestFriend />
            <Features />
            <LetsTalk />
            <Footer />
        </>
    );
}

export default Home;
