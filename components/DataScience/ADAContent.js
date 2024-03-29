import React from "react";
import Link from "next/link";
import ADALogo from "../../public/images/datascience/ADA2.svg";

const ADAContent = () => {
  return (
    <div className="project-details-area pt-[10rem] pb-100 dark:bg-[#151719]">
      <div className="container">
        <div className="projects-details-desc">
          <h1 className=" text-[#393953] dark:text-[#D9E3EA] font-[800] text-3xl md:text-[40px] lg:text-[3.25rem] text-center mb-[48px]">
            Advanced Data Analytics
          </h1>
          <h3 className="dark:text-[#D9E3EA] text-[#393953]">
            Fuel Consumption Analysis for Canadian In Situ Oil Sands Extraction
          </h3>
          <div className="row align-items-center">
            <p className="dark:text-[#9BA9B4]">
              Greenhouse gas (GHG) emissions from the oil and gas (O&G) sector
              account for approximately 10% of global anthropogenic GHG
              emissions, and emission mitigation has an important role in
              combating climate change. Alberta, is the world’s fourth largest
              O&G production region located in Canada. In the medium to long
              term, Canada’s oil sands has a critical role in meeting global oil
              demands. Canada faces great challenges in balancing the economic
              benefits with reductions in GHG emissions from oil sands
              extraction.
            </p>
            <br />
            <p className="dark:text-[#9BA9B4]">
              A better understanding of fuel use and greenhouse gas (GHG)
              emissions resulting from Canadian oil sands (bitumen) extraction
              can help to meet the global carbon budget and design effective
              climate policies. Previously, no researchers have published actual
              fuel use data, analyzed drivers for the decline of emission
              intensities (EIs) from in situ oil sands extraction, and evaluated
              the effectiveness of the cap and trade system in Alberta that aims
              to control GHG emissions.
            </p>
            <br />
            <p className="dark:text-[#9BA9B4]">
              In this project, we extracted actual operating data from a public
              database- Petrinex (Canada’s Petroleum Information Network), which
              contains more than 35 million records for 18 in situ oil sands
              extraction schemes. The operating data covered the period from
              2015 to 2019. The data obtained related to fuel gas use, steam
              injection, solvent co-injection, oil production, flare, and vent
              volumes. We found that the weighted average of fuel use was 0.23
              10<sup>3</sup>m<sup>3</sup>/m<sup>3</sup> undiluted bitumen
              between 2015 to 2019.The weighted averages of fuel use for the
              schemes using Steam Assisted Gravity Drainage (SAGD) and Cyclic
              Steam Stimulation (CSS) were 0.20 10<sup>3</sup>m<sup>3</sup>{" "}
              fuel/m<sup>3</sup> of undiluted bitumen and 0.34 10<sup>3</sup>m
              <sup>3</sup> fuel /m<sup>3</sup> of undiluted bitumen,
              respectively. The average EIs for SAGD ranged from 0.25 metric ton
              (t) CO<sub>2</sub>e/m<sup>3</sup> to 0.98 t CO<sub>2</sub>e/m
              <sup>3</sup>, and the average EIs for CSS ranged from 0.61 t CO
              <sub>2</sub>e/m<sup>3</sup> to 1.18 t CO<sub>2</sub>e/m
              <sup>3</sup> . In addition, the project pointed out that
              production ramping up and maturity of reservoirs contributed to
              the decline in EIs.
            </p>
            <br />
          </div>
          <div className="project-details-image">
            <ADALogo alt="image" />
            <figcaption className="text-center dark:text-[#9BA9B4] mt-3">
              Scheme-specific emissions intensity between 2015 and 2019.
            </figcaption>
            <figcaption className="text-center dark:text-[#9BA9B4]">
              X represents the arithmetic mean of the EIs over the five years.
              The length between the upper bar and the lower bar represents
              three times the interquartile range.
            </figcaption>
          </div>
          <br />
          <div className="project-details-info">
            <div className="single-info-box">
              <h4 className="dark:text-[#D9E3EA] text-[#393953]">Language</h4>
              <span className="dark:text-[#9BA9B4]">Python, R</span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#D9E3EA] text-[#393953]">
                Application
              </h4>
              <span className="dark:text-[#9BA9B4]">
                GHG, Carbon Management
              </span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#D9E3EA] text-[#393953]">
                Data Sources
              </h4>
              <span className="dark:text-[#9BA9B4]">Petrinex</span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#D9E3EA] text-[#393953]">Program</h4>
              <span className="dark:text-[#9BA9B4]">Alberta TIER</span>
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

export default ADAContent;
