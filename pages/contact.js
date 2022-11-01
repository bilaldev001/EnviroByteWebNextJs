import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
// import ContactInfo from "../components/Contact/ContactInfo";
// import ContactForm from "../components/Contact/ContactForm";
import ContactForm from '../components/Contact/freecontact';
// import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Contact Us"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg.jpg"
      />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
