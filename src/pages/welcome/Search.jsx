import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FindPuppie from '../../components/FindPuppie';
function Search() {
    return (
       <>
       <Navbar more={"active"}/>
       <FindPuppie />
       <Footer/>
       </>
    );
}

export default Search;
