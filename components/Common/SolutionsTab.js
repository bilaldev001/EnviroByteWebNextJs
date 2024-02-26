import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PredictiveLogo from "../../public/images/solution-tab/tab3.svg";
import ADALogo from "../../public/images/solution-tab/Envirobyte_AdvancedDataAnalytics_Graphic.svg";
import PMaintainceLogo from "../../public/images/solution-tab/Envirobyte_DataDrivenPredictive_Graphic.svg";
import IOTAQMLogo from "../../public/images/solution-tab/IoT_AQM.svg";
const SolutionsTab = () => {
  return (
    <>
      <div className="tab-section ptb-100 dark:bg-[#151719] transition">
        <div className="container">
          <div className="solutions-list-tab">
            <Tabs>
              <TabList>
                <Tab className="rounded-pill transition duration-200 shadow-teamCard text-[#0e3496] dark:text-gray-400 dark:bg-gray-800/50 flex justify-center items-center">
                  Advanced Data Analytics
                </Tab>
                <Tab className="rounded-pill transition duration-200 shadow-teamCard text-[#0e3496] dark:text-gray-400 dark:bg-gray-800/50 flex justify-center items-center">
                  IoT Air Quality Monitoring
                </Tab>
                <Tab className="rounded-pill transition duration-200 shadow-teamCard text-[#0e3496] dark:text-gray-400 dark:bg-gray-800/50 flex justify-center items-center">
                  OpenPEMS&trade;
                </Tab>
                <Tab className="rounded-pill transition duration-200 shadow-teamCard text-[#0e3496] dark:text-gray-400 dark:bg-gray-800/50 flex justify-center items-center">
                  Predictive Maintenance/Analytics
                </Tab>
              </TabList>

              <TabPanel>
                {/* Tabs item 1 */}
                <div className="row align-items-center mx-0 dark:bg-[#25282C] py-8 md:py-16 px-6 md:pl-16 shadow-teamCard">
                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3 className="dark:text-[#D9E3EA]">
                        Advanced Data Analytics
                      </h3>
                      <p className="dark:text-[#9BA9B4]">
                        In this project, we extracted actual operating data from
                        a public database- Petrinex (Canada’s Petroleum
                        Information Network), which contains more than 35
                        million records for 18 in situ oil sands extraction
                        schemes. We analyze fuel gas use, steam injection,
                        solvent co-injection, oil production, flare, and vent
                        volumes.
                      </p>

                      <ul className="tab-list">
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Data mining for in situ oil extraction
                        </li>
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Fuel consumption benchmarking
                        </li>
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Carbon/emission intensity benchmarking
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link
                          legacyBehavior
                          href="/data-science/advanced-data-analytics"
                        >
                          <a className="default-btn">
                            Read More <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="tab-image-right">
                      <ADALogo alt="logo" className="w-full" />
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* Tabs item 2 */}
              <TabPanel>
                <div className="row align-items-center mx-0 dark:bg-[#25282C] py-8 md:py-16 px-6 md:pl-16 shadow-teamCard">
                  <div className="col-lg-5">
                    <div className="tab-image-left">
                      <IOTAQMLogo width={450} height={500} alt="logo" />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3 className="dark:text-[#D9E3EA]">
                        Air emissions/quality monitoring by
                      </h3>
                      <h3 className="dark:text-[#D9E3EA]">
                        cost-effective sensors
                      </h3>
                      <p className="dark:text-[#9BA9B4]">
                        We calibrated a low-cost particle sensor using machine
                        learning techniques. The particle senor was used to
                        monitor ambient air quality. The internet of thing (IoT)
                        enabled low-cost sensors can be used to construct a
                        high-resolution PM monitoring network and provide
                        real-time emission monitoring data.
                      </p>

                      <ul className="tab-list">
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Air emissions monitoring
                        </li>
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Sensor calibration using machine learning methods
                        </li>
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Neural network and gradient boosting
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link
                          legacyBehavior
                          href="/data-science/IoT-Air-Quality-Monitoring"
                        >
                          <a className="default-btn">
                            Read More <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* Tabs item 3 */}
              <TabPanel>
                <div className="row align-items-center mx-0 dark:bg-[#25282C] py-8 md:py-16 px-6 md:pl-16 shadow-teamCard">
                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3 className="dark:text-[#D9E3EA]">
                        Free AI-Based Emission Monitoring
                      </h3>
                      <p className="dark:text-[#9BA9B4]">
                        OpenPEMS&trade; is a free and open source predictive
                        emissions monitoring system (PEMS) that trains models to
                        predictive air emissions, such as NOx and SO2, which are
                        typically monitored by Continuous Emissions Monitoring
                        Systems (CEMSs).
                      </p>

                      <ul className="tab-list">
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Predictive emission monitoring system
                        </li>
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Machine learning methods for emission monitoring
                        </li>
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Emission monitoring and reporting
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link
                          legacyBehavior
                          href="/data-science/predictive-emissions-monitoring"
                        >
                          <a className="default-btn">
                            Read More <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="tab-image-right">
                      {/*<img src="/images/projects/project1.png" alt="image" />*/}
                      <PredictiveLogo alt="logo" />
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* Tabs item 4 */}
              <TabPanel>
                <div className="row align-items-center mx-0 dark:bg-[#25282C] py-8 md:py-16 px-6 md:pl-16 shadow-teamCard">
                  <div className="col-lg-5">
                    <div className="tab-image-left">
                      <PMaintainceLogo alt="logo" />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3 className="dark:text-[#D9E3EA]">
                        Data-driven approaches for predictive analytics
                      </h3>
                      <p className="dark:text-[#9BA9B4]">
                        Data-driven discovery from Petrinex using unsupervised
                        machine learning algorithms to discover steam
                        consumption patterns for in situ oil sand operations to
                        reduce GHG emission from extraction processes. The study
                        showed that the cyclic steam stimulation (CSS) recovery
                        method was less efficient than the steam assisted
                        gravity drainage (SAGD) recovery method.
                      </p>

                      <ul className="tab-list">
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Data-driven for in situ oil sand operations
                        </li>
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          Steam consumption patterns
                        </li>
                        <li className="dark:text-[#9BA9B4] text-[#737b9a]">
                          <i className="flaticon-tick-1"></i>
                          SOR and carbon intensity
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link
                          legacyBehavior
                          href="/data-science/predictive-analytics"
                        >
                          <a className="default-btn">
                            Read More <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsTab;
