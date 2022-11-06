import React from "react";
import Link from "next/link";
import BriefLogo from "../../public/images/emisssionx/Brieflogo.svg";

const BriefEmissionX = () => {
  return (
    <>
      <div className="about-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <BriefLogo width={480} alt="logo"/>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>A Scalable and Customizable Emissions Reporting Tool</span>
                <h2>EmissionX</h2>
                <p>
                  We build the products that we want to use ourselves. This is why we design EmissionX with easy
                  verification and assurance in mind by integrating data science tools (e.g. Jupyter Lab) with CI/CD
                  processes, which offers the most flexibility, transparency, and customization.
                </p>

                <ul className="about-list">
                  <li>
                    <i className="flaticon-tick"></i>
                    Alberta TIER, BC GHG, SK OBPS, ECCC OBPS
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    GHG Protocol
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    US EPA GHGRP
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    ECCC NPRI, ECCC GHGRP
                  </li>
                </ul>

                <Link href="/emissionx">
                  <a className="default-btn">
                    Read More <span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BriefEmissionX;
