import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="data-service-section pb-100">
        <div className="container">
          <div className="section-title">
            <span>Be the Change</span>
            <h2>Data-driven Reporting and Planning
            </h2>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="data-services-item">
                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-big-data"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>
                        Regulatory and ESG
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-science"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>
                        Materiality Assessment
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-document"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>
                        Life Cycle Assessment
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="data-services-item">
                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-data-analytics"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>
                        Decarbonization Pathway
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-chart"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>
                        Climate Change Adaptation
                        <i className="flaticon-right"></i>
                      </a>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-data"></i>
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>
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
                <img src="/images/data-service.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
