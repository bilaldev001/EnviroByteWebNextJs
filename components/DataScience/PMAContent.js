import React from "react";
import Link from "next/link";
import PMALogo from "../../public/images/datascience/PMA2.svg";

const PMAContent = () => {
  return (
    <div className="project-details-area pt-[10rem] pb-100 dark:bg-[#151719]">
      <div className="container">
        <div className="projects-details-desc">
          <h1 className=" text-[#393953] dark:text-[#D9E3EA] font-[800] text-3xl md:text-[40px] lg:text-[3.25rem] text-center mb-[48px]">
            Predictive Analytics
          </h1>
          <h3 className="dark:text-[#D9E3EA] text-[#393953]">
            Unsupervised machine learning on Canadian oil sands operations
          </h3>
          <div className="row align-items-center">
            <p className="dark:text-[#9BA9B4]">
              Canada’s in situ oil sands can help meet the global oil demand.
              Because of the energy-intensive extraction processes, in situ oil
              sands operations also play a critical role in meeting the global
              carbon budget. The steam oil ratio (SOR) is an indicator used to
              measure energy efficiency and assess greenhouse gas (GHG)
              emissions in the in situ oil sands industry. A low SOR indicates
              an extraction process that is more energy efficient and less
              carbon intensive.
            </p>
            <br />
            <p className="dark:text-[#9BA9B4]">
              We can help in situ oil sands industry to measure energy
              efficiency and GHG emission. Our team understand the data-driven
              approaches are critical to the Canadian oil and gas data warehouse
              or to any oil and gas data warehouse. We use our machine learning
              knowledge to discover the steam consumption pattern with
              unsupervised machine learning algorithms for in situ oil sand
              operations to reduce GHG emission from the extraction process.
            </p>
            <br />
            <p className="dark:text-[#9BA9B4]">
              For example, we applied machine learning methods for data-driven
              discovery to a public database, Petrinex, containing operating
              data from 2015 to 2019 extracted from over 35 million records for
              20 in situ oil sands extraction operations. Two unsupervised
              machine learning methods, including clustering and association
              rules, showed that the cyclic steam stimulation (CSS) recovery
              method was less efficient than the steam assisted gravity drainage
              (SAGD) recovery method. Chi-square tests showed a statistically
              significant association between the CSS recovery method and high
              SOR (<i>p</i> &lt; 0.005). Two association rules suggested that
              the occurrence of non-condensable gas (NCG) co-injection produced
              a low SOR. Chi-square tests on the two rules identified a
              statistically significant relationship between gas co-injection
              and low SOR (<i>p</i> &lt; 0.005).
            </p>
            <br />
            <p className="dark:text-[#9BA9B4]">
              We also discovered that on average, between 2015 and 2019, in situ
              oil sands extractions produced 21 m<sup>3</sup> of solution gas/1
              m<sup>3</sup> of bitumen, with a median of 14 m<sup>3</sup>/m
              <sup>3</sup>. The Peace River region only had one scheme: CNULPR.
              The arithmetic mean of the solution gas oil ratio (SGOR) for
              CNULPR was 81 m<sup>3</sup>/m<sup>3</sup>. The arithmetic mean of
              the SGOR for the Cold Lake region was 36 m<sup>3</sup>/m
              <sup>3</sup>, and for the Athabasca region, it was 11 m
              <sup>3</sup>/m<sup>3</sup>.
            </p>
          </div>

          <p className="dark:text-[#9BA9B4]"></p>
          <div className="project-details-image">
            <PMALogo alt="image" />
            <figcaption className="text-center dark:text-[#9BA9B4] mt-3">
              Average solution gas produced between 2016 and 2019 by in situ
              production regions.
            </figcaption>
          </div>
          <p className="dark:text-[#9BA9B4]"></p>

          <div className="project-details-info">
            <div className="single-info-box">
              <h4 className="dark:text-[#D9E3EA] text-[#393953]">Language</h4>
              <span className="dark:text-[#9BA9B4]">Python</span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#D9E3EA] text-[#393953]">
                Application
              </h4>
              <span className="dark:text-[#9BA9B4]">Data Analytics</span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#D9E3EA] text-[#393953]">
                Data Sources
              </h4>
              <span className="dark:text-[#9BA9B4]">Petrinex</span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#D9E3EA] text-[#393953]">Algorithm</h4>
              <span className="dark:text-[#9BA9B4]">Association Rules</span>
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

export default PMAContent;
