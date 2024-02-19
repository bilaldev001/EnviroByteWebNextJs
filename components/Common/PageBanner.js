import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  breadcrumbTextOne,
  breadcrumbTextTwo,
  breadcrumbUrl,
  bgImage,
}) => {
  return (
    <>
      <div
        className="page-title-area"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>{pageTitle}</h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
