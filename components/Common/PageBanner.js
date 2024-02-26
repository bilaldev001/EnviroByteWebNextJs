import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  breadcrumbTextOne,
  breadcrumbTextTwo,
  breadcrumbUrl,
  bgImage,
  subHeading,
}) => {
  return (
    <>
      <div
        className={`page-title-area dark:bg-[#25282C] transition`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content max-w-3xl mx-auto">
                <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
                  {pageTitle}
                </h2>
                <p className="text-xl text-[#9BA9B4]">{subHeading}</p>
                {!subHeading && (
                  <ul>
                    {breadcrumbTextOne && (
                      <li>
                        <Link legacyBehavior href={breadcrumbUrl}>
                          <a>{breadcrumbTextOne}</a>
                        </Link>
                      </li>
                    )}
                    {breadcrumbTextTwo && <li>{breadcrumbTextTwo}</li>}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
