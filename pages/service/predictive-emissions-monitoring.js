import React  from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import PEMContent from '../../components/About/PEMContent';
import Footer from '../../components/Layouts/Footer';
import Head from "next/head";

const PredictiveEmissionsMonitoring  = () => {
		return (
			<>
				<Head><title>EnviroByte Inc. | Predictive Emissions Monitoring</title>
					<meta name="keywords" content={"envirobyte Environment GHG Calgary Alberta Predictive Emissions Monitoring"}/>
					<meta property="og:title" content="EnviroByte Inc. - Predictive Emissions Monitoring"/>
					<meta property="og:PageType" content="website"/>
					<meta property="og:type" content="website"/>
					<meta property="og:site_name" content="https://www.envirobyte.com"/>
					<meta property="og:url" content="https://www.envirobyte.com/pages/datascience/predictive-emissions-monitoring.js"/>
					<meta property="og:locale" content="en"/>
					<meta name="twitter:site" content="@envirobyte"/>
					<meta property="twitter:title" content="EnviroByte Inc. - Predictive Analytics"/>
					<meta property="twitter:url" content="https://www.envirobyte.com/pages/datascience/predictive-emissions-monitoring.js"/>
					<meta name="viewport" content="width=device-width,initial-scale=1.0" />
					<meta name="description" content="Envirobyte services are here to help you and your business...Official web site of EnviroByte, located in Calgary, Alberta, Canada." />
				</Head>
				<Navbar />

				<PageBanner
					pageTitle="Predictive Emissions Monitoring"
					breadcrumbTextOne="Home"
					breadcrumbTextTwo="Predictive Emissions Monitoring"
					breadcrumbUrl="/"
					bgImage="banner-bg-img3"
				/>

				<PEMContent />

				<Footer />
			</>
		);
}

export default PredictiveEmissionsMonitoring;