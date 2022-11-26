import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import LCAContent from "../../components/EmissionX/LCAContent";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";
import Script from "next/script";

const LifeCycleAssessment = () => {
	return (
		<>
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
				<title>EnviroByte Inc. | Life Cycle Assessment</title>
				<meta
					name="keywords"
					content={
						"envirobyte Environment GHG Calgary Alberta Life Cycle Assessment LCA"
					}
				/>
				<meta
					property="og:title"
					content="EnviroByte Inc. - Life Cycle Assessment"
				/>
				<meta property="og:PageType" content="website" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="https://www.envirobyte.com" />
				<meta
					property="og:url"
					content="https://www.envirobyte.com/pages/emissionx/life-cycle-assessment.js"
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
				pageTitle="Life Cycle Assessment"
				breadcrumbTextOne="Home"
				breadcrumbTextTwo="Life Cycle Assessment"
				breadcrumbUrl="/"
				bgImage=""
			/>

			<LCAContent />

			<Footer />
		</>
	);
};

export default LifeCycleAssessment;
