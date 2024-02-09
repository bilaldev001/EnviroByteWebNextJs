import React from "react";
import Link from "../../utils/ActiveLink";
import WhiteLogo from "../../public/images/logo/whitemark.svg";
import BlackLogo from "../../public/images/logo/blackmarkv2.svg";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const [top, setTop] = React.useState(true);

  const scrollHandler = () => {
    window.pageYOffset > 170 ? setTop(false) : setTop(true);
  };

  React.useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

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
    ? "collapse sm:visible navbar-collapse mean-menu"
    : "collapse sm:visible navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div
        id="navbar"
        className={`navbar-area fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out  ${
          !top
            ? "bg-[#ffffff] dark:bg-[#000000a8] backdrop-blur-sm shadow-lg"
            : ""
        }`}
      >
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand mr-0">
                  <WhiteLogo
                    className="white-logo"
                    width={150}
                    height={30}
                    alt="logo"
                  />
                  <BlackLogo
                    className="black-logo"
                    width={170}
                    height={30}
                    alt="logo"
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={`${classTwo} dark:bg-transparent bg-white`}
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
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a className="nav-link">
                        About <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul
                      className={`dropdown-menu ${
                        !menu ? "shadow-none m-0" : ""
                      }`}
                    >
                      <li className="nav-item">
                        <Link href="/team" activeClassName="active">
                          <a className="nav-link">Team</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/data-driven-approach"
                          activeClassName="active"
                        >
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

                    <ul
                      className={`dropdown-menu ${
                        !menu ? "shadow-none m-0" : ""
                      }`}
                    >
                      <li className="nav-item">
                        <Link href="/emissionx" activeClassName="active">
                          <a className="nav-link" target="_blank">
                            Emission
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/emissionx/life-cycle-assessment"
                          activeClassName="active"
                        >
                          <a className="nav-link">LCA</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/emissionx/climate-change"
                          activeClassName="active"
                        >
                          <a className="nav-link">Climate Change</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Data Science <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul
                      className={`dropdown-menu ${
                        !menu ? "shadow-none m-0" : ""
                      }`}
                    >
                      <li className="nav-item">
                        <Link
                          href="/data-science/advanced-data-analytics"
                          activeClassName="active"
                        >
                          <a className="nav-link">Advanced Data Analytics</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/data-science/IoT-Air-Quality-Monitoring"
                          activeClassName="active"
                        >
                          <a className="nav-link">IoT Air Quality Monitoring</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/data-science/predictive-emissions-monitoring"
                          activeClassName="active"
                        >
                          <a className="nav-link">OpenPEMS&trade;</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/data-science/predictive-analytics"
                          activeClassName="active"
                        >
                          <a className="nav-link">Predictive Analytics</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        App <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul
                      className={`dropdown-menu ${
                        !menu ? "shadow-none m-0" : ""
                      }`}
                    >
                      <li className="nav-item">
                        <Link
                          href="https://ghg.envirobyte.com"
                          activeClassName="active"
                        >
                          <a className="nav-link" target="_blank">
                            Emission Factor Hub
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://airemission.envirobyte.com"
                          activeClassName="active"
                        >
                          <a className="nav-link" target="_blank">
                            Air Emission Factor Hub
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://steamapp.envirobyte.com"
                          activeClassName="active"
                        >
                          <a className="nav-link" target="_blank">
                            Steam App
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact Us</a>
                    </Link>
                  </li>

                  {/*<li className="nav-item">
                    <Link href="https://www.google.ca" activeClassName="active">
                      <a target="_blank">
                        Login
                      </a>
                    </Link>
                  </li>*/}
                </ul>
              </div>
              {menu && <ThemeSwitcher />}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
