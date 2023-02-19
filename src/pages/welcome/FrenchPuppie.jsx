import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import TwoPuppieItem from '../../components/TwoPuppieItem';
function FrenchPuppie() {
    const URL = "/";
    const API = URL + 'api/puppie/breed/French';
    return (
        <>
            <Navbar french={"active"} />
            <PageHeader title={["Our French puppies are",
                "playful spirit and charming looks",
                "waiting to charm you!",
                "Open your heart and ",
                "let a French bulldog's puppy",
                "fill it with love",
                "Bring home an French puppy",
                "and create endless memories"
            ]}
                des={"Our French puppies are the perfect blend of beauty and brains. They are quick learners and love to show off their tricks. Our French puppies are always ready to play and make the perfect addition to an active household. French puppies are known for their intelligence and adaptability. They make great family pets and will quickly become a beloved member of your family."}
            />
            <TwoPuppieItem API={API} URL={URL} />
            <Footer />
        </>
    );
}

export default FrenchPuppie;
