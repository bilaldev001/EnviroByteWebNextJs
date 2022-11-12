import React from "react";
import Link from "next/link";

const EmissionXContent = () => {
  return (
    <>
      <div className="project-details-area ptb-100">
        <div className="container">
          <div className="projects-details-desc">
            <h3>Why We Do This</h3>
            <img
              src="/images/emisssionx/EmissionX_Blue.svg"
              align="right"
              alt="image"
              width="500"
              height="400"
            />

            <p>
              On May 30, 2007, Steve Jobs and Bill Gates joined together for an
              interview at the
              <a
                href="https://podcasts.apple.com/us/podcast/steve-jobs-at-the-d-all-things-digital-conference-video/id529997900"
                target="_blank"
              >
                {" "}
                D5 conference
              </a>
              . Gates explained why and how Apple and Microsoft developed their
              products, he said:
            </p>
            <p>
              “Steve gave a speech once, which was one of my favorites where he
              talked about, in a certain sense, we build the products that we
              want to use ourselves.”
              <a
                href="https://www.youtube.com/watch?v=wvhW8cp15tk"
                target="_blank"
              >
                {" "}
                See the video
              </a>
            </p>
            <p>
              Our team has been performing GHG reporting and verifications for
              over 10 years, and in that time have become frustrated and left
              wondering about the software that was being used for regulatory
              reporting with the Alberta Specified Gas Emitter Regulation
              (SGER)/ Carbon Competitiveness Incentive Regulation (CCIR)/
              Technology Innovation and Emissions Reduction (TIER), and other
              GHG reporting programs.
            </p>
            <p>
              The black box nature of some software presents challenges for
              reporters, verifiers, and auditors to do their jobs. This results
              in the reporting company investing greater amounts of manpower and
              resources to respond to clarifying questions. The “one
              quantification fits all” approach that is used by existing GHG
              reporting software does not consider the differences between
              jurisdictions, facilities, and industries.
            </p>
            <p>
              We designed EmissionX&trade; with easy verification and assurance in mind
              by integrating data science tools (e.g., Jupyter Lab) with CI/CD
              processes, offering the most flexibility, transparency, and
              customization. This not only leads to smoother verifications and
              audits, but also provides reporting companies with the freedom to
              do their own, in-house, analysis and dashboard reporting.
            </p>

            <text>
              EmissionX&trade; is programed for many different regulatory and voluntary
              reporting frameworks, including but not limited to:
              <p></p>
              <ul>
                <li>
                  Alberta TIER, BC GHG Reporting Regulation, ECCC OBPS, SK OBPS,
                  ON EPS
                </li>
                <li>ECCC GHGRP</li>
                <li>US EPA GHGRP</li>
                <li>ECCC NPRI</li>
                <li>ECCC MSAPR (Multi-Sector Air Pollutants Regulation)</li>
                <li>GHG Protocol</li>
                <li>more</li>
              </ul>
            </text>

            <p></p>

            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmissionXContent;
