import React from "react";
import Link from "next/link";

const EmissionXContent = () => {
  return (
    <>
      <div className="project-details-area ptb-100 dark:bg-[#151719]">
        <div className="container">
          <div className="projects-details-desc">
            <h3 className="dark:text-[#ffffff]">
              Environmental Product Declaration (EPD)
            </h3>
            <p className="dark:text-[#9BA9B4]">
              An Environmental Product Declaration (EPD) is a thorough, single
              written report of a product's lifecycle story that offers details
              on a product's environmental impact, such as greenhouse gas (GHG)
              emissions. EPDs can be created based on applicable product
              category rules (PCRs) following the completion of a product life
              cycle assessment (LCA). The following three factors affect the
              dependability, transparency, and quality of Environmental Product
              Declarations:
            </p>
            <ol>
              <li className="dark:text-[#9BA9B4]">
                Product Category Rules (PCRs): According to the international
                standard for EPDs (ISO 14025), certified EPDs must be created
                using PCRs that satisfy particular requirements. The life cycle
                assessment (LCA) scope, the product category, and categories of
                potential impacts that need to be assessed and reported are all
                described in the PCRs.
              </li>
              <br />
              <li className="dark:text-[#9BA9B4]">
                Life Cycle Assessment (LCA): The LCA is often carried out in
                compliance with international LCA standards ISO 14040 series.
                Each impact on the environment mentioned in the PCR must be at
                least partially addressed by the assessment.
              </li>
              <br />
              <li className="dark:text-[#9BA9B4]">
                EPD Report: The results of this assessment serve as the
                foundation for the quality of the resultant EPD. It must include
                a description of the study's scope, the product, results, and
                any additional environmental details regarding the product that
                are required by ISO 14025 and specified in the PCR.
              </li>
            </ol>

            <text className="dark:text-[#9BA9B4]">
              A skilled life cycle assessment (LCA) team at EnviroByte oversees
              each step of the EPD process and works with you to ensure a quick,
              effective LCA and precise EPD. The following services are provided
              by EnviroByte as a program operator:
              <p className="dark:text-[#9BA9B4]"></p>
              <ul>
                <li className="dark:text-[#9BA9B4]">
                  Create an appropriate Product Category Rules (PCR) according
                  to ISO 14025
                </li>
                <li className="dark:text-[#9BA9B4]">US EPA GHGRP</li>
                <li className="dark:text-[#9BA9B4]">
                  Conduct GHG Life cycle assessments (LCA) according to ISO
                  14040 and 14044
                </li>
                <li className="dark:text-[#9BA9B4]">LCA Review</li>
                <li className="dark:text-[#9BA9B4]">
                  Prepare Environmental Product Declarations (EPDs) report based
                  on PCR and have the EPD verified by an independent 3
                  <sup>rd</sup> party
                </li>
              </ul>
            </text>

            <p className="dark:text-[#9BA9B4]">
              Please contact with us if you have any inquiries or want to know
              more about Environmental Product Declaration (EPD).
            </p>

            <p className="dark:text-[#9BA9B4]"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmissionXContent;
