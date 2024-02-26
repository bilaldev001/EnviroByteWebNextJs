import React from "react";
import Link from "next/link";
import WhiteLogo from "../../public/images/logo/whitemark.svg";
import BlackLogo from "../../public/images/logo/blackmarkv2.svg";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Top Footer Section */}
      <footer className="py-[64px] dark:bg-[#151719]">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-8 xl:gap-20 mb-8 md:mb-12">
            <div className="md:col-span-4 lg:col-span-5">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <WhiteLogo
                    className="white-logo"
                    width={150}
                    height={30}
                    alt="logo"
                  />
                  <BlackLogo
                    className="black-logo"
                    width={150}
                    height={30}
                    alt="logo"
                  />
                </div>
                <p className="dark:text-[#9BA9B4]">
                  At EnviroByte, we build the products that we want to use
                  ourselves. After over 10 years working with black box
                  software, we are tired of the GHG/air reporting tools that the
                  market is offering. We designed EmissionX with easy
                  verification and assurance in mind by integrating data science
                  tools (e.g. Jupyter Lab) with CI/CD processes, which offers
                  the most flexibility, transparency, and customization.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="single-footer-widget md:col-span-1 lg:col-span-1">
                <div className="footer-heading">
                  <h3>Important Links</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link legacyBehavior href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/team">
                      <a>Team</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="https://ghg.envirobyte.com/">
                      <a target="_blank">Emission Factor Hub</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/signin">
                      <a target="_blank">Login</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="single-footer-widget md:col-span-1 lg:col-span-1">
                <div className="footer-heading">
                  <h3>Featured Service</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link
                      legacyBehavior
                      href="/data-science/predictive-emissions-monitoring"
                    >
                      <a target="_blank">AI Emissions Monitoring</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/emissionx">
                      <a target="_blank">Regulatory Reporting</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      href="/emissionx/life-cycle-assessment"
                    >
                      <a target="_blank">Life Cycle Assessment</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/emissionx/climate-change">
                      <a target="_blank">Climate Change Adapatation</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/emissionx/climate-change">
                      <a target="_blank">Scenario Analysis</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="single-footer-widget md:col-span-1 lg:col-span-1">
                <div className="footer-heading">
                  <h3>Contact Info</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3>Phone</h3>
                  <span>+1 403.809.8844</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>info@envirobyte.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area dark:bg-[#151719] bg-transparent transition py-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p className="text-[#666466] dark:text-[#9BA9B4]">
                  &copy; {currentYear} EnviroByte. All Rights Reserved by
                  <a href="/team" target="_blank">
                    SmartPeople
                  </a>
                </p>
              </div>

              {/* <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link legacyBehavior   href="/terms-condition">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div> */}
            </div>
          </div>
        </div>
        {/*
        <div className="partner-shape-img1">
          <img src="/images/shape/partnar-shape-2.png" alt="image" />
        </div>
        */}
      </footer>
      {/* End Top Footer Section */}

      {/* Bottom Footer Section */}
      {/* End Bottom Footer Section */}
    </>
  );
};

export default Footer;
