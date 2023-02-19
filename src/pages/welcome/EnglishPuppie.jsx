import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import TwoPuppieItem from '../../components/TwoPuppieItem';
function EnglishPuppie() {
    const URL = "/";
    const API = URL + 'api/puppie/breed/English';
    return (
        <>
            <Navbar english={"active"} />
            <PageHeader title={["Experience the joy of owning",
                "Experience the joy of living",
                "Experience the pure love and",
                "devotion of a beautiful",
                "English bulldog's puppy"]}
                des={"With their striking appearance and outgoing personalities, English puppies are sure to turn heads wherever you go. If you want a loyal and devoted friend, our English bulldog's puppies are the perfect choice. They are known for their loyalty and affectionate nature. English puppies are known for their charming personalities and love for human companionship. Bring home one of these charming puppies today!"}
            />
            <TwoPuppieItem API={API} URL={URL} />
            <Footer />
        </>
    );
}

export default EnglishPuppie;
