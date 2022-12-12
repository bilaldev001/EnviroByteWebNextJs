import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamMemberContent from "../components/Team/TeamMemberContent";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

const Team = () => {
  return (
    <>
      <Head>
        <title>Team | EnviroByte </title>
        <meta
          name="keywords"
          content={"PEMS, Predictive Emission Monitoring System, EnviroByte"}
        />
        <meta property="og:title" content="EnviroByte Inc. - Team" />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://www.envirobyte.com" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/pages/team.js"
        />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="Envirobyte services are here to help you and your business...Official web site of EnviroByte, located in Calgary, Alberta, Canada."
        />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Team"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Our Team Member"
        breadcrumbUrl="/"
        bgImage=""
      />

      <TeamMemberContent />

      <Footer />
    </>
  );
};

export default Team;
