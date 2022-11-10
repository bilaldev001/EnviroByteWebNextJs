import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ProjectDetailsContent from "../../components/Projects/ProjectDetailsContent";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

const ProjectDetails = () => {
	return (
		<>
			<Head>
				<title>EnviroByte Inc. | Decarbonization Pathway</title>
				<meta
					name="keywords"
					content={
						"envirobyte Environment GHG Calgary Alberta Decarbonization Pathway"
					}
				/>
				<meta
					property="og:title"
					content="EnviroByte Inc. - Decarbonization Pathway"
				/>
				<meta property="og:PageType" content="website" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="https://www.envirobyte.com" />
				<meta
					property="og:url"
					content="https://www.envirobyte.com/pages/emissionx/decarbonization-pathway.js"
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
				pageTitle="Decarbonization Pathway"
				breadcrumbTextOne="Home"
				breadcrumbTextTwo="Decarbonization Pathway"
				breadcrumbUrl="/"
				bgImage=""
			/>

			<ProjectDetailsContent />

			<Footer />
		</>
	);
};

export default ProjectDetails;
