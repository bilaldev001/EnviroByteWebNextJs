import React from "react";
import Link from "next/link";
import IoTLogo from "../../public/images/datascience/IoT.svg";

const IoTContent = () => {
  return (
    <div className="project-details-area pt-[10rem] pb-100 dark:bg-[#151719]">
      <div className="container">
        <div className="projects-details-desc">
          <h1 className="  dark:text-[#D9E3EA] text-[#393953] font-[800] text-3xl md:text-[40px] lg:text-[3.25rem] text-center mb-[48px]">
            IoT Air Quality Monitoring
          </h1>
          <h3 className="dark:text-[#D9E3EA] text-[#393953]">
            Machine learning approach to calibration low-cost IoT sensors
          </h3>
          <div className="row align-items-center">
            <p className="dark:text-[#9BA9B4]">
              Particle sensing technology has shown great potential for
              monitoring particulate matter (PM) with very few temporal and
              spatial restrictions because of its low-cost, compact size, and
              easy operation. However, the performance of low-cost sensors for
              PM monitoring in ambient conditions has been questionable.
            </p>
            <br />
            <p className="dark:text-[#9BA9B4]">
              We calibrated a low-cost sensor in ambient conditions using
              machine-learning methods. The sensor is Plantower PMS 5003, and it
              measured outdoor fine particle (PM<sub>2.5</sub>) concentrations
              (µg m<sup>-3</sup>), air temperature (°C), and RH (%) every six
              seconds. The sensor was internet enabled and transferred real-time
              data to a cloud storage. The sensor was installed at Calgary
              Varsity air monitoring and the reading was compared with a
              government approved PM monitoring equipment - named Synchronized
              Hybrid Ambient Real-time Particulate (SHARP)
            </p>
            <br />
            <p className="dark:text-[#9BA9B4]">
              Field evaluation showed that the Pearson r between the low-cost
              sensor and the SHARP instrument was 0.78. Fligner and Killeen
              (F-K) test indicated a statistically significant difference
              between the variances of the PM<sub>2.5</sub> values by the
              low-cost sensor and by the SHARP instrument. Large overestimations
              by the low-cost sensor before calibration were observed in the
              field and were believed to be caused by the variation of ambient
              relative humidity. The root mean square error (RMSE) was 9.93 when
              comparing the low-cost sensor with the SHARP instrument. The
              calibration by the neural network had the smallest RMSE of 3.91.
              After calibrations, the F-K test showed that the variances of the
              PM<sub>2.5</sub> values by the neural network and the gradient
              boosting and by the reference method were not statistically
              significantly different.
            </p>
            <br />
          </div>

          <p className="dark:text-[#9BA9B4]"></p>

          <p className="dark:text-[#9BA9B4]"></p>

          <div className="project-details-image">
            <IoTLogo alt="image" />
            <figcaption className="text-center dark:text-[#9BA9B4] mt-3">
              Comparison of the Hourly PM2.5 Values between the Low-Cost PM
              Sensor and SHARP.
            </figcaption>
          </div>
          <br />
          <br />
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
                Air Quality/Emission Monitoring, Internet of Things
              </span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#D9E3EA] text-[#393953]">
                Data Sources
              </h4>
              <span className="dark:text-[#9BA9B4]">Sensor</span>
            </div>

            <div className="single-info-box">
              <h4 className="dark:text-[#D9E3EA] text-[#393953]">Algorithm</h4>
              <span className="dark:text-[#9BA9B4]">
                Neural Network, Gradient Boosting
              </span>
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

export default IoTContent;
