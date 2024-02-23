import React from "react";
import Link from "next/link";
import PEMLogo from "../../public/images/datascience/PEM.svg";

const PEMContent = () => {
  return (
    <div className="project-details-area ptb-100 dark:bg-[#151719]">
      <div className="container">
        <div className="projects-details-desc">
          <h3 className="dark:text-[#ffffff]">OpenPEMS&trade;</h3>
          <div className="row align-items-center">
            <p className="dark:text-[#9BA9B4]">
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
            <p className="dark:text-[#9BA9B4]">
              OpenPEMS&trade; is a free and open source predictive emissions
              monitoring system that trains models to predictive air emissions,
              such as NOx and SO2, which are typically monitored by CEMSs.
              OpenPEMS&trade; is inspired by OpenAI's ethos of accessibility and
              empowerment. Our vision is to make the Artificial Intelligent (AI)
              and Machine Learning (ML) technologies accessible to a wider
              industrial audience, reducing costs associated with air emissions
              monitoring.
            </p>
            <br />
            <p className="dark:text-[#9BA9B4]">
              OpenPEMS&trade; was licensed by KeeWee Solutions Inc (KeeWee). Dr.
              Minxing Si of KeeWee was the first to introduce open-source
              machine learning libraries for PEMS development and conducted
              extensive research on machine learning for environmental
              monitoring. The PEMS developed by Dr. Si was the first PEMS that
              was approved by Alberta Environment and Alberta Energy Regulator.
            </p>
            <br />
            <p className="dark:text-[#9BA9B4]">
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
            <p className="dark:text-[#9BA9B4]">
              In Canada, PEMS is an accepted alternative monitoring method to
              CEMS at federal and provincial levels. For example, Alberta 2021
              CEMS code outlines the requirements of PEMS.
            </p>

            <div className="project-details-image-wrapleft">
              <PEMLogo alt="image" width="900" />
            </div>
            <h3 className="dark:text-[#ffffff]">
              Predictive Emissions for GHG monitoring
            </h3>
            <p className="dark:text-[#9BA9B4]">
              Contact us to learn more about OpenPEMS&trade; and how we transfer
              PEMS to GHG monitoring
            </p>
          </div>

          <p className="dark:text-[#9BA9B4]"></p>

          <p className="dark:text-[#9BA9B4]"></p>

          <div className="project-details-info">
            <div className="single-info-box">
              <h4 className="dark:text-[#ffffff]">Language</h4>
              <span className="dark:text-[#9BA9B4]">Python, R</span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#ffffff]">Application</h4>
              <span className="dark:text-[#9BA9B4]">Emission Monitoring</span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#ffffff]">Data Sources</h4>
              <span className="dark:text-[#9BA9B4]">Measurement/PI</span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#ffffff]">Algorithm</h4>
              <span className="dark:text-[#9BA9B4]">Neural Network, Gradient Boosting</span>
            </div>

            <div className="single-info-box">
              <Link legacyBehavior href="/contact">
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
