import React from "react";
import Link from "../../utils/ActiveLink";
import WhiteLogo from "../../public/images/logo/whitemark.svg";
import BlackLogo from "../../public/images/logo/blackmarkv2.svg";
import { ThemeSwitcher } from "./ThemeSwitcher";

const about = [
  {
    name: "Team",
    href: "/team",
  },
  {
    name: "Data Driven Approach",
    href: "/data-driven-approach",
  },
];
const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const [top, setTop] = React.useState(true);

  const scrollHandler = () => {
    window.pageYOffset > 70 ? setTop(false) : setTop(true);
  };

  React.useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
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
        className={`navbar-area fixed w-full z-30 xl:bg-opacity-90 transition duration-300 ease-in-out  ${
          !top
            ? "bg-[#ffffff] dark:bg-[#000000a8] backdrop-blur-sm shadow-lg"
            : ""
        }`}
      >
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-xl navbar-light">
              <Link legacyBehavior href="/">
                <a className="navbar-brand mr-0">
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
                <ul className="navbar-nav xl:flex align-items-xl-center align-items-start">
                  <li className="nav-item">
                    <Link legacyBehavior href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link legacyBehavior href="/blogs">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>

                  <li className="nav-item relative">
                    <Link legacyBehavior href="#" activeClassName="active">
                      <a className="nav-link">
                        About <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul
                      className={`dropdown-menu px-4 sm:px-0 ${
                        !menu ? "shadow-none m-0" : ""
                      }`}
                    >
                      {about.map((data, index) => (
                        <li className="nav-item" key={index}>
                          <Link
                            legacyBehavior
                            href={data.href}
                            activeClassName="active"
                          >
                            <a className="nav-link">{data.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link legacyBehavior href="#">
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
                        <Link
                          legacyBehavior
                          href="/emissionx"
                          activeClassName="active"
                        >
                          <a className="nav-link" target="_blank">
                            Emission
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          legacyBehavior
                          href="/emissionx/life-cycle-assessment"
                          activeClassName="active"
                        >
                          <a className="nav-link">LCA</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          legacyBehavior
                          href="/emissionx/climate-change"
                          activeClassName="active"
                        >
                          <a className="nav-link">Climate Change</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link legacyBehavior href="#">
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
                          legacyBehavior
                          href="/data-science/advanced-data-analytics"
                          activeClassName="active"
                        >
                          <a className="nav-link">Advanced Data Analytics</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          legacyBehavior
                          href="/data-science/IoT-Air-Quality-Monitoring"
                          activeClassName="active"
                        >
                          <a className="nav-link">IoT Air Quality Monitoring</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          legacyBehavior
                          href="/data-science/predictive-emissions-monitoring"
                          activeClassName="active"
                        >
                          <a className="nav-link">OpenPEMS&trade;</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          legacyBehavior
                          href="/data-science/predictive-analytics"
                          activeClassName="active"
                        >
                          <a className="nav-link">Predictive Analytics</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link legacyBehavior href="#">
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
                          legacyBehavior
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
                          legacyBehavior
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
                          legacyBehavior
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
                    <Link
                      legacyBehavior
                      href="/contact"
                      activeClassName="active"
                    >
                      <a className="nav-link">Contact Us</a>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      legacyBehavior
                      href="/signin"
                      activeClassName="active"
                    >
                      <a className="nav-link">Sign in</a>
                    </Link>
                  </li>
                  <li className="xl:mx-[12px]">
                    <Link
                      legacyBehavior
                      href="/signup"
                      activeClassName="active"
                    >
                      <a className="nav-link default-btn signup-btn flex items-center justify-center px-3 lg:px-4 w-full lg:w-fit">
                        Sign up <span></span>
                      </a>
                    </Link>
                  </li>

                  {/*<li className="nav-item">
                      <Link legacyBehavior   href="https://www.google.ca" activeClassName="active">
                        <a target="_blank">
                          Login
                        </a>
                      </Link>
                    </li>*/}
                </ul>
              </div>
              {menu && <ThemeSwitcher />}
              {/* <div className="nav-item">
                  <Link legacyBehavior href="/contact" activeClassName="active">
                    <a className="nav-link">Sign In</a>
                  </Link>
                </div>
                <div className="nav-item">
                  <Link legacyBehavior href="/contact" activeClassName="active">
                    <a className="nav-link">Sign Up</a>
                  </Link>
                </div> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
