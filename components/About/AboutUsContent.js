import React from "react";
import Link from "next/link";

const AboutUsContent = () => {
  return (
    <>
      <div className="project-details-area ptb-100 dark:bg-[#151719]">
        <div className="container">
          <div className="projects-details-desc">
            <h3 className="dark:text-[#D9E3EA]">
              Valuable Services are What We're Dedicated to
            </h3>
            <p className="text-[#666666] dark:text-[#9BA9B4]">
              Data-driven approach for sustainability is a combination of
              multiple disciplines, including environmental engineering,
              software engineering, machine learning, predictive analytics, and
              more. Many sustainability challenges could greatly benefit from
              data- driven tools.
            </p>

            <div className="features-text">
              <h4 className="dark:text-[#D9E3EA]">Core Development</h4>
              <p className="text-[#666666] dark:text-[#9BA9B4]">
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
              <h4 className="dark:text-[#D9E3EA]">Our Solutions</h4>
              <p className="text-[#666666] dark:text-[#9BA9B4]">
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
                <h4 className="dark:text-[#D9E3EA]">
                  Explore our data driven Reporting and Planning
                </h4>
                <ul>
                  <li className="text-[#666666] dark:text-[#9BA9B4]">
                    Regulatory and ESG Reporting
                  </li>
                  <li className="text-[#666666] dark:text-[#9BA9B4]">
                    Decarbonization Pathway
                  </li>
                  <li className="text-[#666666] dark:text-[#9BA9B4]">
                    Materiality Assessment
                  </li>
                  <li className="text-[#666666] dark:text-[#9BA9B4]">
                    Climate Change Adaptation
                  </li>
                  <li className="text-[#666666] dark:text-[#9BA9B4]">
                    Life Cycle Assessment
                  </li>
                  <li className="text-[#666666] dark:text-[#9BA9B4]">
                    TCFD Scenario Analysis
                  </li>
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
