import React from "react";
import Link from "next/link";
import DDRPLogo from "../../public/images/our_service/Data-Drived-Landing Page.svg";
const OurServices = () => {
  return (
    <>
      <div className="data-service-section ptb-100 dark:bg-[#151719] transition">
        <div className="container">
          <div className="section-title">
            <span className="text-[#666666] dark:text-[#9BA9B4]">
              Be the Change
            </span>
            <h2 className="text-[#393953] dark:text-[#D9E3EA]">
              Data-driven Reporting and Planning
            </h2>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="data-services-item">
                <div className="single-data-service-box shadow-teamCard dark:shadow-[#00b0ee26]">
                  <div className="icon">
                    <i className="flaticon-big-data"></i>
                  </div>
                  <h3>
                    <Link legacyBehavior href="/emissionx/climate-change">
                      <a className="dark:text-[#D9E3EA]" target="_blank">
                        GHG and Air Emissions
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box shadow-teamCard dark:shadow-[#00b0ee26]">
                  <div className="icon">
                    <i className="flaticon-science"></i>
                  </div>
                  <h3>
                    <Link
                      legacyBehavior
                      href="/emissionx/life-cycle-assessment"
                    >
                      <a className="dark:text-[#D9E3EA]" target="_blank">
                        Life Cycle Assessment
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box shadow-teamCard dark:shadow-[#00b0ee26]">
                  <div className="icon">
                    <i className="flaticon-document"></i>
                  </div>
                  <h3>
                    <Link legacyBehavior href="/emissionx/climate-change">
                      <a className="dark:text-[#D9E3EA]" target="_blank">
                        Climate Change Adaptation
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="data-services-item">
                <div className="single-data-service-box shadow-teamCard dark:shadow-[#00b0ee26]">
                  <div className="icon">
                    <i className="flaticon-data-analytics"></i>
                  </div>
                  <h3>
                    <Link legacyBehavior href="/emissionx/climate-change">
                      <a className="dark:text-[#D9E3EA]" target="_blank">
                        Climate Change Risk Assessment
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box shadow-teamCard dark:shadow-[#00b0ee26]">
                  <div className="icon">
                    <i className="flaticon-chart"></i>
                  </div>
                  <h3>
                    <Link legacyBehavior href="/emissionx/climate-change">
                      <a className="dark:text-[#D9E3EA]" target="_blank">
                        Climate Change Mitigation
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box shadow-teamCard dark:shadow-[#00b0ee26]">
                  <div className="icon">
                    <i className="flaticon-data"></i>
                  </div>
                  <h3>
                    <Link legacyBehavior href="/emissionx/climate-change">
                      <a className="dark:text-[#D9E3EA]" target="_blank">
                        TCFD Scenario Analysis
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="data-service-image">
                {/*<img src="/images/data-service.png" alt="image" />*/}
                <DDRPLogo height={425} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
