import React from "react";
import Link from "next/link";
import PEMLogo from "../../public/images/datascience/PEM.svg";

const PEMContent = () => {
  return (
    <div className="project-details-area ptb-100">
      <div className="container">
        <div className="projects-details-desc">
          <h3>OpenPEMS&trade;</h3>
          <div className="row align-items-center">
            <p>
              The nitrogen oxides (NO<sub>x</sub>) has significant adverse
              environmental and health effects, contributing to acid rain and
              smog and forming fine particles (PM) and ozone in the ambient air
              (tropospheric ozone or ground-level ozone). Industrial facilities
              with large stationary combustion sources are typically required to
              be equipped with one or more continuous emissions monitoring
              systems (CEMSs) to monitor NO<sub>x</sub> emissions for compliance
              with regulatory emission limits. Due to the high CEMSs operating
              costs and frequent maintenance, there is an alternative for
              monitoring NO<sub>x</sub>, a predictive emissions monitoring
              system (PEMS).
            </p>
            <br />
            <p>
              OpenPEMS&trade; is an open source PEMS inspired by OpenAI's ethos
              of accessibility and empowerment. Our vision is to make the
              Artificial Intelligent (AI) and Machine Learning (ML) technologies
              accessible to a wider industrial audience, reducing costs
              associated with air emissions monitoring. OpenPEMS&trade; is a
              free and open source software (FOSS) that trains models to
              predictive air emissions, such as NOx and SO2, which are typically
              monitored by Continuous Emissions Monitoring Systems (CEMSs)
            </p>
            <br />
            <p>
              OpenPEMS&trade; was licensed by KeeWee Solutions Inc (KeeWee). Dr.
              Minxing Si of KeeWee was the first to introduce open-source
              machine learning libraries for PEMS development and conducted
              extensive research on machine learning for environmental
              monitoring. The PEMS developed by Dr. Si was the first PEMS that
              was approved by Alberta Environment and Alberta Energy Regulator
            </p>
            <br />
            <p>
              PEMS is used for environmental monitoring worldwide, the major
              regulatory frameworks for PEMS were developed by the United States
              Environmental Protection Agency (US EPA) and the European Union.
              Many countries outside of the US and Europe have adopted these
              standards, especially the US EPA’s PEMS certification standards.
              The main US federal regulation that accepts PEMS as an emission
              monitoring and reporting tool is Title 40 of the Code of Federal
              Regulations (CFR 40), Part 60, 61, 63, and 75.
            </p>
            <br />
            <p>
              In Canada, PEMS is an accepted alternative monitoring method to
              CEMS at federal and provincial levels. For example, Alberta 2021
              CEMS code outlines the requirements of PEMS.
            </p>

            <div className="project-details-image-wrapleft">
              <PEMLogo alt="image" width="900" />
            </div>
            <h3>Predictive Emissions for GHG monitoring</h3>
            <p>
              Contact us to learn more about OpenPEMS&trade; and how we transfer
              PEMS to GHG monitoring
            </p>
          </div>

          <p></p>

          <p></p>

          <div className="project-details-info">
            <div className="single-info-box">
              <h4>Language</h4>
              <span>Python, R</span>
            </div>

            <div className="single-info-box">
              <h4>Application</h4>
              <span>Emission Monitoring</span>
            </div>

            <div className="single-info-box">
              <h4>Data Sources</h4>
              <span>Measurement/PI</span>
            </div>

            <div className="single-info-box">
              <h4>Algorithm</h4>
              <span>Neural Network, Gradient Boosting</span>
            </div>

            <div className="single-info-box">
              <Link href="/contact">
                <a className="default-btn" target="_blank">
                  Contact us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PEMContent;
