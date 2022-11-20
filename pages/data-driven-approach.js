import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import DataDrivenApproachContent from "../components/About/DataDrivenApproachContent";
import Head from "next/head";

const DataDrivenApproach = () => {
	return (
		<>
			<Head>
				<!-- Google tag (gtag.js) -->
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-RMCG4QY4VP"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date());
					gtag('config', 'G-RMCG4QY4VP');
				</script>
				<title>EnviroByte Inc. | Data Driven Approach</title>
				<meta name="keywords" content={"envirobyte Environment GHG Calgary Alberta Data Driven Approach"} />
				<meta property="og:title" content="EnviroByte Inc. - Data Driven Approach" />
				<meta property="og:PageType" content="website" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="https://www.envirobyte.com" />
				<meta property="og:url" content="https://www.envirobyte.com/pages/service/data-driven-approach.js" />
				<meta property="og:locale" content="en" />
				<meta name="viewport" content="width=device-width,initial-scale=1.0" />
				<meta name="description" content="Envirobyte services are here to help you and your business...Official web site of EnviroByte, located in Calgary, Alberta, Canada." />
			</Head>
			<Navbar />

			<PageBanner
				pageTitle="Data Driven Approach"
				breadcrumbTextOne="Home"
				breadcrumbTextTwo="Data Driven Approach"
				breadcrumbUrl="/"
				bgImage=""
			/>

			<DataDrivenApproachContent />

			<Footer />
		</>
	);
};

export default DataDrivenApproach;
