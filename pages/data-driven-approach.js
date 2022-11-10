import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import DataDrivenApproachContent from "../components/About/DataDrivenApproachContent";

const DataDrivenApproach = () => {
	return (
		<>
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
