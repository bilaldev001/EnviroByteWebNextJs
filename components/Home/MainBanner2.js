import React from "react";
import Link from "next/link";
import DDSLogo from "../../public/images/main-banner-shape/DataDriven.svg";
import { useTheme } from "next-themes";

const MainBanner = () => {
  const theme = useTheme();
  return (
    <>
      <div className=" pt-[10rem] dark:bg-[#151719]">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content max-w-[100%] flex flex-col justify-center items-center">
                <div
                  data-aos="zoom-in-left"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <h1 className="text-[40px] md:text-[52px] font-extrabold leading-tighter tracking-tighter text-[#393953] dark:text-[#D9E3EA]">
                    Data-driven Sustainability
                  </h1>
                </div>

                <div
                  data-aos="zoom-in-left"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <p className="text-center home-banner-text dark:text-[#9BA9B4]">
                    EnviroByte applies data-driven methods with environmental
                    science, software engineering, and machine learning to
                    increase efficiency and effectiveness of sustainability
                    reporting, planning, monitoring and management, including
                    Greenhouse Gas emissions, Criteria Air Contaminants, etc.
                  </p>
                </div>

                <div
                  data-aos="zoom-in-left"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <div className="banner-btn">
                    <Link legacyBehavior href="/about-us">
                      <a className="default-btn-one  transition">
                        About Us <span></span>
                      </a>
                    </Link>

                    <Link legacyBehavior href="/contact">
                      <a className="default-btn">
                        Contact Us <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 flex items-center justify-center mt-[64px]">
                {/* Main Image */}
                <DDSLogo
                  width={660}
                  height={555}
                  alt="logo"
                  className="lg:w-full md:w-1/2 w-2/3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
