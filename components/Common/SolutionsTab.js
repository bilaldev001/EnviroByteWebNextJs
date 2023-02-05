import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PredictiveLogo from "../../public/images/solution-tab/tab3.svg";
const SolutionsTab = () => {
  return (
    <>
      <div className="tab-section ptb-100">
        <div className="container">
          <div className="solutions-list-tab">
            <Tabs>
              <TabList>
                <Tab>Advanced Data Analytics</Tab>
                <Tab>IoT Air Quality Monitoring</Tab>
                <Tab>Predictive Emissions Monitoring</Tab>
                <Tab>Predictive Maintenance/Analytics</Tab>
              </TabList>

              <TabPanel>
                {/* Tabs item 1 */}
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>Advanced Data Analytics</h3>
                      <p>
                        In this project, we extracted actual operating data from a public database- Petrinex (Canada’s
                        Petroleum Information Network), which contains more than 35 million records for 18 in situ oil
                        sands extraction schemes. We analyze fuel gas use, steam injection, solvent co-injection, oil
                        production, flare, and vent volumes.
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Data mining for in situ oil extraction
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Fuel consumption benchmarking
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Carbon/emission intensity benchmarking
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/data-science/advanced-data-analytics">
                          <a className="default-btn">
                            Read More <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="tab-image-right">
                      <img src="/images/tab-solution.png" alt="image" />
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* Tabs item 2 */}
              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image-left">
                      <img src="/images/projects/project4.png" alt="image" />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>Air emissions/quality monitoring by</h3>
                      <h3>cost-effective sensors</h3>
                      <p>
                        We calibrated a low-cost particle sensor using machine learning techniques. The particle senor
                        was used to monitor ambient air quality. The internet of thing (IoT) enabled low-cost sensors
                        can be used to construct a high-resolution PM monitoring network and provide real-time emission
                        monitoring data.
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Air emissions monitoring
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Sensor calibration using machine learning methods
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Neural network and gradient boosting
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/data-science/IoT-Air-Quality-Monitoring">
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
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>AI-Based Emission Monitoring</h3>
                      <p>
                        EnviroByte helps facility operators with machine learning methods to develop their predictive
                        emission models by themselves for emissions monitoring and reporting.
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Predictive emission monitoring system
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Machine learning methods for emission monitoring
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Emission monitoring and reporting
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/data-science/predictive-emissions-monitoring">
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
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image-left">
                      <img src="/images/projects/project3.png" alt="image" />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>Data-driven approaches for predictive analytics</h3>
                      <p>
                        Data-driven discovery from Petrinex using unsupervised machine learning algorithms to discover
                        steam consumption patterns for in situ oil sand operations to reduce GHG emission from
                        extraction processes. The study showed that the cyclic steam stimulation (CSS) recovery method
                        was less efficient than the steam assisted gravity drainage (SAGD) recovery method.
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Data-driven for in situ oil sand operations
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Steam consumption patterns
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          SOR and carbon intensity
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/data-science/predictive-analytics">
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
