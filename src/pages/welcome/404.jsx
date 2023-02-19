import React from 'react';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
function PageNotFound() {
    return (
        <>
            <Navbar />
            <PageHeader title={["Page Not Found",]}
                des={""}
            />
            <Footer />
        </>
    );
}

export default PageNotFound;
