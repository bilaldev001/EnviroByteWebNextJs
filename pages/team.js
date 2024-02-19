import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamMemberContent from "../components/Team/TeamMemberContent";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import withMainLayout from "../components/Layouts";

const Team = () => {
  return (
    <div>
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
          content="EmissionX, developed by EnviroByte, can be used as Predictive Emission Monitoring Systems (PEMSs) that provide real-time data on emissions from industrial facilities."
        />
      </Head>

      <PageBanner
        pageTitle="Team"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Our Team Member"
        breadcrumbUrl="/"
        bgImage=""
      />

      <TeamMemberContent />
    </div>
  );
};

export default withMainLayout(Team);
