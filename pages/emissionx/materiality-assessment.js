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
				pageTitle="Materiality Assessment"
				breadcrumbTextOne="Home"
				breadcrumbTextTwo="Materiality Assessment"
				breadcrumbUrl="/"
				bgImage=""
			/>

			<ProjectDetailsContent />

			<Footer />
		</>
	);
};

export default ProjectDetails;
