import React from "react";
import Link from "next/link";
import BriefLogo from "../../public/images/emisssionx/Brieflogo-2.svg";

const BriefEmissionX = () => {
  return (
    <>
      <div className="about-section ptb-100 dark:bg-[#151719] transition">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image flex justify-center items-center">
                <BriefLogo
                  width={480}
                  alt="logo"
                  className="w-full sm:w-[480px]"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="text-[#666666] dark:text-[#9BA9B4]">
                  A Scalable and Customizable Emissions Reporting Tool
                </span>
                <h2 className="text-[#393953] dark:text-[#D9E3EA]">
                  EmissionX&trade;
                </h2>
                <p className="text-[#666666] dark:text-[#9BA9B4]">
                  We build the products that we want to use ourselves. This is
                  why we design EmissionX with easy verification and assurance
                  in mind by integrating data science tools (e.g. Jupyter Lab)
                  with CI/CD processes, which offers the most flexibility,
                  transparency, and customization.
                </p>

                <ul className="about-list">
                  <li className="text-[#393953] dark:text-[#D9E3EA]">
                    <i className="flaticon-tick text-[#393953] dark:text-[#D9E3EA]"></i>
                    Alberta TIER, BC GHG, SK OBPS, ECCC OBPS
                  </li>
                  <li className="text-[#393953] dark:text-[#D9E3EA]">
                    <i className="flaticon-tick text-[#393953] dark:text-[#D9E3EA]"></i>
                    GHG Protocol
                  </li>
                  <li className="text-[#393953] dark:text-[#D9E3EA]">
                    <i className="flaticon-tick text-[#393953] dark:text-[#D9E3EA]"></i>
                    US EPA GHGRP
                  </li>
                  <li className="text-[#393953] dark:text-[#D9E3EA]">
                    <i className="flaticon-tick text-[#393953] dark:text-[#D9E3EA]"></i>
                    ECCC NPRI, ECCC GHGRP
                  </li>
                </ul>

                <Link legacyBehavior href="/emissionx">
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
