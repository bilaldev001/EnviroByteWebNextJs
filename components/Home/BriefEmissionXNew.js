import React from "react";
import Link from "next/link";
import BriefLogo from "../../public/images/emisssionx/Brieflogo-2.svg";

export default function BriefEmissionX() {
  return (
    <section className="dark:bg-[#151719] transition">
      <div className="container">
        <div className="py-12 md:py-20 border-b border-gray-800">
          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 flex md:justify-end justify-center"
                data-aos="fade-up"
              >
                <BriefLogo
                  width={480}
                  alt="logo"
                  className="w-full sm:max-w-[480px]"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16 about-content">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    A Scalable and Customizable Emissions Reporting Tool
                  </div>
                  <h2 className="h3 mb-3 dark:text-[#D9E3EA] font-bold">
                    EmissionX&trade;
                  </h2>
                  <p className="text-xl text-[#666666] dark:text-[#9BA9B4] mb-4">
                    We build the products that we want to use ourselves. This is
                    why we design EmissionX with easy verification and assurance
                    in mind by integrating data science tools (e.g. Jupyter Lab)
                    with CI/CD processes, which offers the most flexibility,
                    transparency, and customization.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span> Alberta TIER, BC GHG, SK OBPS, ECCC OBPS</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>GHG Protocol</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>US EPA GHGRP</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>ECCC NPRI, ECCC GHGRP</span>
                    </li>
                  </ul>
                  <Link legacyBehavior href="/emissionx">
                    <a className="default-btn">
                      Read More <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
