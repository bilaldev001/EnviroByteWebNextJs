import React from "react";
import Link from "next/link";

const GetStartedProject = () => {
  return (
    <>
      <div className="productive-section ptb-100 dark:bg-[#151719]">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="productive-content">
                <span>Let’s Get Started</span>
                <h3 className="dark:text-[#D9E3EA]">
                  Are you ready for a better, more productive emission reporting{" "}
                </h3>
                <p className="text-[#666666] dark:text-[#9BA9B4]">
                  We build the products that we want to use ourselves. This is
                  why we design EmissionX with easy verification and assurance
                  in mind by integrating data science tools (e.g. Jupyter Lab)
                  with CI/CD processes, which offers the most flexibility,
                  transparency, and customization.
                </p>

                <div className="productive-btn">
                  <Link legacyBehavior href="/emissionx">
                    <a className="productive-btn">
                      Read More
                      <span></span>
                    </a>
                  </Link>

                  <Link legacyBehavior href="/contact">
                    <a className="productive-btn-one">
                      Contact Us
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="productive-image">
                <img src="/images/emisssionx/EmissionX_fact.svg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedProject;
