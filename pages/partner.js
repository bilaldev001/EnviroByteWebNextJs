import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CustomerStyleTwo from "../components/Common/CustomerStyleTwo";
import Customers from "../components/Common/Customers";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";

const Partner = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Partner"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Partner"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg-3.jpg"
      />

      <CustomerStyleTwo />

      <Customers />

      <div className="ptb-100">
        <SubscribeStyleThree />
      </div>


      <Footer />
    </>
  );
};

export default Partner;
