import React from "react";
import Link from "../../utils/ActiveLink";
import WhiteLogo from "../../public/images/logo/whitemark.svg";
import BlackLogo from "../../public/images/logo/blackmarkv2.svg";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { logoutUser } from "../Redux/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

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
const emission = [
  {
    name: "Emission",
    href: "/emissionx",
    target: "_blank",
  },
  {
    name: "Life Cycle Assessment",
    href: "/emissionx/life-cycle-assessment",
  },
  {
    name: "Climate Change",
    href: "/emissionx/climate-change",
  },
];
const dataScienceLinks = [
  {
    name: "Advanced Data Analytics",
    href: "/data-science/advanced-data-analytics",
  },
  {
    name: "IoT Air Quality Monitoring",
    href: "/data-science/IoT-Air-Quality-Monitoring",
  },
  {
    name: "OpenPEMS™",
    href: "/data-science/predictive-emissions-monitoring",
  },
  {
    name: "Predictive Analytics",
    href: "/data-science/predictive-analytics",
  },
];
const externalLinks = [
  {
    name: "Emission Factor Hub",
    href: "https://ghg.envirobyte.com",
    target: "_blank",
  },
  {
    name: "Air Emission Factor Hub",
    href: "https://airemission.envirobyte.com",
    target: "_blank",
  },
  {
    name: "Steam App",
    href: "https://steamapp.envirobyte.com",
    target: "_blank",
  },
  // Add more items as needed
];
const Navbar = () => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const dispatch = useDispatch();
  const [menu, setMenu] = React.useState(true);
  const router = useRouter();
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const [top, setTop] = React.useState(true);

  const scrollHandler = () => {
    window.pageYOffset > 70 ? setTop(false) : setTop(true);
  };

  const handleLogout = () => {
    router.push("/");
    dispatch(logoutUser());
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
        className={`navbar-area fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out  ${
          !top
            ? "bg-[#ffffff] dark:bg-[#000000a8] backdrop-blur-sm shadow-lg"
            : ""
        }`}
      >
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
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

              <div className="flex items-center gap-3">
                <Link legacyBehavior href="/profile" activeClassName="active">
                  <a className="md:hidden">
                    <i className="fa-solid fa-circle-user fa-2xl text-[2rem]"></i>
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
              </div>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav md:flex align-items-md-center align-items-start">
                  <li className="nav-item">
                    <Link legacyBehavior href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  {isAuthenticated && (
                    <li className="nav-item">
                      <Link legacyBehavior href="/blogs">
                        <a className="nav-link">Blog</a>
                      </Link>
                    </li>
                  )}

                  <li className="nav-item relative">
                    <Link legacyBehavior href="#" activeClassName="active">
                      <a className="nav-link">
                        Features <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul
                      className={`dropdown-menu px-4 sm:px-0 grid sm:grid-cols-2 md:mt-0 mt-3 sm:divide-x gap-3 dark:bg-[#151719] bg-[#ffffff] ${
                        !menu ? "shadow-none m-0" : ""
                      }`}
                    >
                      <div className="flex flex-col gap-3">
                        <div>
                          <h3 className="md:text-[24px] text-[20px] mb-2 dark:text-[#ffffff]">
                            EmissionX
                          </h3>

                          {emission.map((data, index) => (
                            <li className="nav-item" key={index}>
                              <Link
                                legacyBehavior
                                href={data.href}
                                activeClassName="active"
                              >
                                <a
                                  className="nav-link pl-[16px]"
                                  target={data.target}
                                >
                                  {data.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </div>
                        <div>
                          <h3 className="md:text-[24px] text-[20px] mb-2 dark:text-[#ffffff]">
                            Data Science
                          </h3>

                          {dataScienceLinks.map((data, index) => (
                            <li className="nav-item" key={index}>
                              <Link
                                legacyBehavior
                                href={data.href}
                                activeClassName="active"
                              >
                                <a
                                  className="nav-link pl-[16px]"
                                  target={data.target}
                                >
                                  {data.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                      <div className="sm:pl-3 flex flex-col gap-3">
                        <div>
                          <h3 className="md:text-[24px] text-[20px] mb-2 dark:text-[#ffffff]">
                            App
                          </h3>
                          {externalLinks.map((data, index) => (
                            <li className="nav-item" key={index}>
                              <Link
                                legacyBehavior
                                href={data.href}
                                activeClassName="active"
                              >
                                <a
                                  className="nav-link pl-[16px]"
                                  target={data.target}
                                >
                                  {data.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </div>
                        <div>
                          <h3 className="md:text-[24px] text-[20px] mb-2 dark:text-[#ffffff]">
                            About
                          </h3>
                          {about.map((data, index) => (
                            <li className="nav-item" key={index}>
                              <Link
                                legacyBehavior
                                href={data.href}
                                activeClassName="active"
                              >
                                <a className="nav-link pl-[16px]">
                                  {data.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                    </ul>
                  </li>

                  {/* <li className="nav-item">
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
                  </li> */}

                  <li className="nav-item">
                    <Link
                      legacyBehavior
                      href="/contact"
                      activeClassName="active"
                    >
                      <a className="nav-link">Contact Us</a>
                    </Link>
                  </li>
                  {isAuthenticated ? (
                    <>
                      <li
                        className="md:mx-[12px] flex items-center justify-center"
                        onClick={handleLogout}
                      >
                        <a className="nav-link default-btn signup-btn flex items-center justify-center px-3 lg:px-4 w-full lg:w-fit cursor-pointer">
                          Sign Out <span></span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link
                          legacyBehavior
                          href="/profile"
                          activeClassName="active"
                        >
                          <a className="md:block hidden">
                            <i className="fa-solid fa-circle-user fa-2xl text-[2rem]"></i>
                          </a>
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item ">
                        <Link
                          legacyBehavior
                          href="/signin"
                          activeClassName="active"
                        >
                          <a className="nav-link">Sign in</a>
                        </Link>
                      </li>
                      <li className="md:mx-[12px] flex items-center justify-center">
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
                    </>
                  )}
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
