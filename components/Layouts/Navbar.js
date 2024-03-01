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
    icon: <i className="flaticon-science"></i>,
  },
  {
    name: "Data Driven Approach",
    href: "/data-driven-approach",
    icon: <i className="flaticon-document"></i>,
  },
];
const emission = [
  {
    name: "Emission",
    href: "/emissionx",
    target: "_blank",
    icon: <i className="flaticon-big-data"></i>,
  },
  {
    name: "Life Cycle Assessment",
    href: "/emissionx/life-cycle-assessment",
    icon: <i className="flaticon-science"></i>,
  },
  {
    name: "Climate Change",
    href: "/emissionx/climate-change",
    icon: <i className="flaticon-document"></i>,
  },
];
const dataScienceLinks = [
  {
    name: "Advanced Data Analytics",
    href: "/data-science/advanced-data-analytics",
    icon: <i className="flaticon-data"></i>,
  },
  {
    name: "IoT Air Quality Monitoring",
    href: "/data-science/IoT-Air-Quality-Monitoring",
    icon: <i className="flaticon-big-data"></i>,
  },
  {
    name: "OpenPEMS™",
    href: "/data-science/predictive-emissions-monitoring",
    icon: <i className="flaticon-science"></i>,
  },
  {
    name: "Predictive Analytics",
    href: "/data-science/predictive-analytics",
    icon: <i className="flaticon-document"></i>,
  },
];
const externalLinks = [
  {
    name: "Emission Factor Hub",
    href: "https://ghg.envirobyte.com",
    target: "_blank",
    icon: <i className="flaticon-big-data"></i>,
  },
  {
    name: "Air Emission Factor Hub",
    href: "https://airemission.envirobyte.com",
    target: "_blank",
    icon: <i className="flaticon-data"></i>,
  },
  {
    name: "Steam App",
    href: "https://steamapp.envirobyte.com",
    target: "_blank",
    icon: <i className="flaticon-document"></i>,
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
        className={`navbar-area fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out is-sticky ${
          !top
            ? "bg-[#ffffff] dark:bg-[#000000a8] backdrop-blur-sm shadow-lg"
            : "bg-[#ffffff] dark:bg-transparent"
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
                  <li className="nav-item">
                    <Link legacyBehavior href="/blogs">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>
                  <li className="nav-item relative lg:hidden">
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
                          <h3 className="text-[18px] mb-2 dark:text-[#D9E3EA] text-[#393953]">
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
                                  {data.icon} {data.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </div>
                        <div>
                          <h3 className="text-[18px] mb-2 dark:text-[#D9E3EA] text-[#393953]">
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
                                  {data.icon} {data.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                      <div className="sm:pl-3 flex flex-col gap-3">
                        <div>
                          <h3 className="text-[18px] mb-2 dark:text-[#D9E3EA] text-[#393953]">
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
                                  {data.icon} {data.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </div>
                        <div>
                          <h3 className="text-[18px] mb-2 dark:text-[#D9E3EA] text-[#393953]">
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
                                  {data.icon} {data.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="nav-item relative lg:block hidden">
                    <Link legacyBehavior href="#" activeClassName="active">
                      <a className="nav-link">
                        About <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul
                      className={`dropdown-menu grid sm:grid-cols-1 px-3 dark:bg-[#151719] bg-[#ffffff] ${
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
                            <a className="nav-link pl-[16px]">
                              {data.icon} {data.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item relative lg:block hidden">
                    <Link legacyBehavior href="#" activeClassName="active">
                      <a className="nav-link">
                        EmissionX <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul
                      className={`dropdown-menu grid sm:grid-cols-1 px-3 dark:bg-[#151719] bg-[#ffffff] ${
                        !menu ? "shadow-none m-0" : ""
                      }`}
                    >
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
                              {data.icon} {data.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item relative lg:block hidden">
                    <Link legacyBehavior href="#" activeClassName="active">
                      <a className="nav-link">
                        Data Science <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul
                      className={`dropdown-menu grid sm:grid-cols-1 px-3 dark:bg-[#151719] bg-[#ffffff] ${
                        !menu ? "shadow-none m-0" : ""
                      }`}
                    >
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
                              {data.icon} {data.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item relative lg:block hidden">
                    <Link legacyBehavior href="#" activeClassName="active">
                      <a className="nav-link">
                        App <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul
                      className={`dropdown-menu grid sm:grid-cols-1 px-3 dark:bg-[#151719] bg-[#ffffff] ${
                        !menu ? "shadow-none m-0" : ""
                      }`}
                    >
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
                              {data.icon} {data.name}
                            </a>
                          </Link>
                        </li>
                      ))}
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
                </ul>
              </div>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav md:flex align-items-md-center align-items-start">
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
