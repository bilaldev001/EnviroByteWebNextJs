import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BioDetail from "../components/About/BioDetailsContent";
import Footer from "../components/Layouts/Footer";

const BioDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Blog Grid"
                breadcrumbTextOne="Home"
                breadcrumbTextTwo="Blog Grid"
                breadcrumbUrl="/"
                bgImage="/images/page-title-bg-3.jpeg"
            />

            <BioDetail />

            <Footer />
        </>
    );
};

export default BioDetails;
