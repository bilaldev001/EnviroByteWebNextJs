import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import ToastContainer from "../components/Shared/Toast";
import withMainLayout from "../components/Layouts";
import ProfileComponent from "../components/Profile/ProfileComponent";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/signin");
    }
  }, []);

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
      {/* <PageBanner
        pageTitle="Profile"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Profile"
        breadcrumbUrl="/"
        bgImage=""
      /> */}

      {/* Form Component */}
      {isAuthenticated ? (
        <ProfileComponent />
      ) : (
        <div className="pb-100 pt-[10rem] dark:bg-[#151719] h-[50vh]"></div>
      )}
    </div>
  );
};

export default withMainLayout(Profile);
