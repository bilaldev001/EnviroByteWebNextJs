import React from "react";
import Link from "next/link";
import DDSLogo from "../../public/images/main-banner-shape/DataDriven.svg";
const MainBanner = () => {
  return (
    <>
      <div className="main-banner-three">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content max-w-[100%]">
                    <div
                      data-aos="zoom-in-left"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <h1 className="dark:text-[#191919] duration-200 text-4xl md:text-5xl lg:text-[5rem] xl:text-6xl font-extrabold leading-tighter tracking-tighter">
                        Data-driven Sustainability
                      </h1>
                    </div>

                    <div
                      data-aos="zoom-in-left"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <p className="dark:text-[#282828] duration-200 ">
                        EnviroByte applies data-driven methods with
                        environmental science, software engineering, and machine
                        learning to increase efficiency and effectiveness of
                        sustainability reporting, planning, monitoring and
                        management, including Greenhouse Gas emissions, Criteria
                        Air Contaminants, etc.
                      </p>
                    </div>

                    <div
                      data-aos="zoom-in-left"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <div className="banner-btn">
                        <Link href="/about-us">
                          <a className="default-btn-one dark:bg-[#282828]">
                            About Us <span></span>
                          </a>
                        </Link>

                        <Link href="/contact">
                          <a className="default-btn">
                            Contact Us <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 align-items-center">
                  {/* Main Image */}
                  <DDSLogo
                    width={660}
                    height={555}
                    alt="logo"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="creative-shape">
          <img src="/images/main-banner-shape/home-shape-3.png" alt="Image" />
        </div>
        <div className="shape-img1">
          <img
            src="/images/main-banner-shape/main-banner-shape2.png"
            alt="main-image"
          />
        </div>
        <div className="shape-img2">
          <img
            src="/images/main-banner-shape/main-banner-shape3.png"
            alt="main-image"
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
