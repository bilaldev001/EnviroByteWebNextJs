import React from "react";
import Link from "../../utils/ActiveLink";
import WhiteLogo from "../../public/images/logo/whitemark.svg";
import BlackLogo from "../../public/images/logo/blackmark.svg";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <WhiteLogo className="white-logo" width ={200} alt ="logo"/>
                  <BlackLogo className="black-logo" width= {200} alt="logo"/>
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">
                        Home one
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a className="nav-link">
                        About <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/team" activeClassName="active">
                          <a className="nav-link">Team</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">Data Driven Approach</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        EmissionX <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="https://ghg.mzcodelab.com/" activeClassName="active">
                          <a className="nav-link" target="_blank">Regulatory and ESG</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/emissionx/decarbonization-pathway" activeClassName="active">
                          <a className="nav-link">Decarbonization Pathway</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/emissionx/materiality-assessment" activeClassName="active">
                          <a className="nav-link">Materiality Assessment</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/emissionx/climate-change-adaption" activeClassName="active">
                          <a className="nav-link">Climate Change Adaptation</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/emissionx/life-cycle-assessment" activeClassName="active">
                          <a className="nav-link">Life Cycle Assessment</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/emissionx/tcfd-scenario-analysis" activeClassName="active">
                          <a className="nav-link">TCFD Scenario Analysis</a>
                        </Link>
                      </li>

                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Data Science<i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/service/advanced-data-analytics" activeClassName="active">
                          <a className="nav-link">Advanced Data Analytics</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/service/IoT-Air-Quality-Monitoring" activeClassName="active">
                          <a className="nav-link">IoT Air Quality Monitoring</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service/predictive-emissions-monitoring" activeClassName="active">
                          <a className="nav-link">Predictive Emissions Monitoring</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service/predictive-analytics" activeClassName="active">
                          <a className="nav-link">Predictive Analytics</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        APP <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="https://ghg.mzcodelab.com" activeClassName="active">
                          <a className="nav-link" target="_blank">Emission Factor Hub</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact Us</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="https://www.google.ca" target="_blank">Login</a>
                    </Link>
                  </li>
                </ul>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
