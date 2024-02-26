import Link from "next/link";
import React from "react";

export default function OurServices() {
  return (
    <section className="dark:bg-[#151719] transition">
      <div className="container">
        <div className="py-12 md:py-20 border-b border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 section-title">
            <div className="font-architects-daughter text-xl text-purple-600 mb-2">
              Be the Change
            </div>
            <h2 className="h2 mb-3 dark:text-[#D9E3EA] font-bold">
              Data-driven Reporting and Planning
            </h2>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center group"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 hover:bg-purple-700 h-[64px] w-[64px] rounded-full flex justify-center items-center mb-4">
                <i className="flaticon-big-data text-[22px] text-[#D9E3EA]"></i>
              </div>

              <Link legacyBehavior href="/emissionx/climate-change">
                <a
                  className="text-[24px] mb-2 dark:text-[#D9E3EA] text-center font-bold"
                  target="_blank"
                >
                  GHG and Air Emissions
                </a>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center group"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 hover:bg-purple-700 h-[64px] w-[64px] rounded-full flex justify-center items-center mb-4">
                <i className="flaticon-science text-[22px] text-[#D9E3EA]"></i>
              </div>
              <Link legacyBehavior href="/emissionx/life-cycle-assessment">
                <a
                  className="text-[24px] mb-2 dark:text-[#D9E3EA] text-center font-bold"
                  target="_blank"
                >
                  Life Cycle Assessment
                </a>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center group"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 group-hover:bg-purple-700 h-[64px] w-[64px] rounded-full flex justify-center items-center mb-4">
                <i className="flaticon-document text-[22px] text-[#D9E3EA]"></i>
              </div>
              <Link legacyBehavior href="/emissionx/climate-change">
                <a
                  className="text-[24px] mb-2 dark:text-[#D9E3EA] text-center font-bold"
                  target="_blank"
                >
                  Climate Change Adaptation
                </a>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center group"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 hover:bg-purple-700 h-[64px] w-[64px] rounded-full flex justify-center items-center mb-4">
                <i className="flaticon-data-analytics text-[22px] text-[#D9E3EA]"></i>
              </div>
              <Link legacyBehavior href="/emissionx/climate-change">
                <a
                  className="text-[24px] mb-2 dark:text-[#D9E3EA] text-center font-bold"
                  target="_blank"
                >
                  Climate Change Risk Assessment
                </a>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center group"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 hover:bg-purple-700 h-[64px] w-[64px] rounded-full flex justify-center items-center mb-4">
                <i className="flaticon-chart text-[22px] text-[#D9E3EA]"></i>
              </div>
              <Link legacyBehavior href="/emissionx/climate-change">
                <a
                  className="text-[24px] mb-2 dark:text-[#D9E3EA] text-center font-bold"
                  target="_blank"
                >
                  Climate Change Mitigation
                </a>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center group"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 hover:bg-purple-700 h-[64px] w-[64px] rounded-full flex justify-center items-center mb-4">
                <i className="flaticon-data text-[22px] text-[#D9E3EA]"></i>
              </div>
              <Link legacyBehavior href="/emissionx/climate-change">
                <a
                  className="text-[24px] mb-2 dark:text-[#D9E3EA] text-center font-bold"
                  target="_blank"
                >
                  TCFD Scenario Analysis
                </a>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
