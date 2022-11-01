import React from 'react';
import Link from 'next/link';
import PMALogo from "../../public/images/datascience/PMA2.svg";

const PMAContent = () => {
		return (
			<div className="project-details-area ptb-100">
				<div className="container">
					<div className="project-details-image">
						<PMALogo alt="image"/>
						<figcaption className='text-center'>Average solution gas produced between 2016 and 2019 by in situ production regions.
						</figcaption>


					</div>
					<div className="projects-details-desc">
						<div className="row align-items-center">
							<p>
								Canada’s in situ oil sands can help meet the global oil demand. Because of the energy-intensive
								extraction processes, in situ oil sands operations also play a critical role in meeting
								the global carbon budget. The steam oil ratio (SOR) is an indicator used to measure energy
								efficiency and assess greenhouse gas (GHG) emissions in the in situ oil sands industry.
								A low SOR indicates an extraction process that is more energy efficient and less carbon
								intensive.

							</p>
							<br/>
							<p>
								We can help in situ oil sands industry to measure energy efficiency and GHG emission.
								Our team understand the data-driven approaches are critical to the Canadian oil and gas
								data warehouse or to any oil and gas data warehouse. We use our machine learning knowledge
								to discover the steam consumption pattern with unsupervised machine learning algorithms
								for in situ oil sand operations to reduce GHG emission from the extraction process.
							</p>
							<br/>
							<p>
								For example, we applied machine learning methods for data-driven discovery to a public
								database, Petrinex, containing operating data from 2015 to 2019 extracted from over 35
								million records for 20 in situ oil sands extraction operations. Two unsupervised machine
								learning methods, including clustering and association rules, showed that the cyclic
								steam stimulation (CSS) recovery method was less efficient than the steam assisted gravity
								drainage (SAGD) recovery method. Chi-square tests showed a statistically significant
								association between the CSS recovery method and high SOR (<i>p</i> &lt; 0.005). Two association
								rules suggested that the occurrence of non-condensable gas (NCG) co-injection produced
								a low SOR. Chi-square tests on the two rules identified a statistically significant
								relationship between gas co-injection and low SOR (<i>p</i> &lt; 0.005).
							</p>
							<br/>
							<p>
								We also discovered that on average, between 2015 and 2019, in situ oil sands extractions
								produced 21 m<sup>3</sup> of solution gas/1 m<sup>3</sup> of bitumen, with a median of 14
								m<sup>3</sup>/m<sup>3</sup>. The Peace River region only had one scheme: CNULPR. The arithmetic mean of the
								solution gas oil ratio (SGOR) for CNULPR was 81 m<sup>3</sup>/m<sup>3</sup>. The arithmetic mean of the SGOR
								for the Cold Lake region was 36 m<sup>3</sup>/m<sup>3</sup>, and for the Athabasca region, it was 11 m<sup>3</sup>/m<sup>3</sup>.
							</p>
							<p>
								<a href="/contact" target="_blank">Contact us for more information. </a>
							</p>
						</div>

						<p></p>

						<p></p>

						<div className="project-details-info">
							<div className="single-info-box">
								<h4>Client</h4>
								<span>James Anderson</span>
							</div>

							<div className="single-info-box">
								<h4>Category</h4>
								<span>Network, Marketing</span>
							</div>

							<div className="single-info-box">
								<h4>Date</h4>
								<span>February 28, 2020</span>
							</div>

							<div className="single-info-box">
								<h4>Share</h4>
								<ul className="social">
									<li>
										<a href="https://www.facebook.com/" target="_blank">
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a href="https://twitter.com/" target="_blank">
											<i className="fab fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="https://www.linkedin.com/" target="_blank">
											<i className="fab fa-linkedin-in"></i>
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/" target="_blank">
											<i className="fab fa-instagram"></i>
										</a>
									</li>
								</ul>
							</div>

							<div className="single-info-box">
								<Link href="/contact">
									<a className="default-btn">Contact us for more information</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default PMAContent;