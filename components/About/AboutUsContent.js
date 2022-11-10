import React from "react";
import Link from "next/link";

const AboutUsContent = () => {
	return (
		<>
			<div className="project-details-area ptb-100">
				<div className="container">
					<div className="project-details-image">
						<img src="/images/about/flowchart_1200x700.png" alt="image"/>
					</div>

					<div className="projects-details-desc">
						<h3>Valuable Services are What We're Dedicated to</h3>
						<p>
							Data-driven approach for sustainability is a combination of
							multiple disciplines, including environmental engineering,
							software engineering, machine learning, predictive analytics, and
							more. Many sustainability challenges could greatly benefit from
							data- driven tools.
						</p>

						<div className="features-text">
							<h4>Core Development</h4>
							<p>
								EnviroByte applies data-driven approaches and developed tools to
								increase efficiency and effectiveness of sustainability
								reporting, planning, monitoring and management, including
								Greenhouse Gas (GHG) emissions, Criteria Air Contaminants (CAC),
								etc. Data-driven approach for Sustainability is a combination of
								multiple disciplines, including environmental science, software
								engineering, artificial intelligence (AI), machine learning
								(ML), predictive analytics, and more. Many sustainability
								challenges could greatly benefit from data-driven tools.
							</p>
						</div>

						<div className="features-text">
							<h4>Our Solutions</h4>
							<p>
								Our solutions are implemented with modern software development
								practices, namely CI and CD, which is a combination of software
								development and environmental reporting (commonly referred to as
								DevOps in software world). CI and CD stand for continuous
								integration and continuous delivery/continuous deployment. The
								CI/CD processes tailor each environmental report with its unique
								requirements and are easy to scale and integrate with other
								requirements.
							</p>
						</div>
						<div className="features-text">
							<text>
								<h4>Explore our data driven Reporting and Planning</h4>
								<ul>
									<li>Regulatory and ESG Reporting</li>
									<li>Decarbonization Pathway</li>
									<li>Materiality Assessment</li>
									<li>Climate Change Adaptation</li>
									<li>Life Cycle Assessment</li>
									<li>TCFD Scenario Analysis</li>
								</ul>
							</text>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUsContent;
