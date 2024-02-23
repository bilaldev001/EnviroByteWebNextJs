import React from "react";
import Head from "next/head";
import Script from "next/script";
import PageBanner from "../components/Common/PageBanner";
import SignupForm from "../components/Auth/SignupForm";
import ToastContainer from "../components/Shared/Toast";
import withMainLayout from "../components/Layouts";
import ProfileComponent from "../components/Profile/ProfileComponent";

const Profile = () => {
  return (
    <div className={"duration-200 --font-inter font-inter"}>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          				})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          				ga('create', 'G-RMCG4QY4VP', 'auto');
          				ga('send', 'pageview');
          				ga(function(tracker) {
  						console.log(ga.q);
						});

        			`}
        </Script>
        <title>Profile | EnviroByte </title>
        <meta name="keywords" content={"TIER, GHGRP, NPRI, EPA CRF Part 98"} />
        <meta property="og:title" content="EnviroByte Inc. - Profile" />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EnviroByte" />
        <meta property="og:url" content="https://www.envirobyte.com/profile/" />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <ToastContainer />
      <PageBanner
        pageTitle="Profile"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Profile"
        breadcrumbUrl="/"
        bgImage=""
      />

          {/* Form Component */}
          <ProfileComponent/>
    </div>
  );
};

export default withMainLayout(Profile);
