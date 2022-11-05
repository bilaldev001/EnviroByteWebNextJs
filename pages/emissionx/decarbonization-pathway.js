import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ProjectDetailsContent from "../../components/Projects/ProjectDetailsContent";
import Footer from "../../components/Layouts/Footer";

const ProjectDetails = () => {
	return (
		<>
			<Navbar />

			<PageBanner
				pageTitle="Decarbonization Pathway"
				breadcrumbTextOne="Home"
				breadcrumbTextTwo="Decarbonization Pathway"
				breadcrumbUrl="/"
				bgImage="/images/page-title-bg-3.jpeg"
			/>

			<ProjectDetailsContent />

			<Footer />
		</>
	);
};

export default ProjectDetails;