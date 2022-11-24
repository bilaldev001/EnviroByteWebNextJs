import React from "react";
import Link from "next/link";

const DataDrivenApproachContent = () => {
  return (
    <>
      <div className="project-details-area ptb-100">
        <div className="container">
          <div className="projects-details-desc">
            <h3>Data-Driven Sustainability Framework</h3>
            <p>
              Data-driven sustainability is the process of making decisions that
              are centered on sustainability and are informed by the collecting,
              processing, and analysis of data. The data is then visualized to
              produce a greater, significant impact and more ethical business
              practices. Insights from sustainability data can create huge
              improvement while boosting revenue, whether it's reducing
              greenhouse gas emissions, improving supply chains, or reducing
              waste.
            </p>

            <div className="features-text">
              <text>
                The three major stages to follow when using a data-driven
                sustainability strategy are:
                <p></p>
                <ul>
                  <li>
                    Establish industry-specific sustainability objectives: It is
                    essential to have an industry-led strategy.
                  </li>
                  <li>
                    Create a framework using artificial intelligence and machine
                    learning so that businesses may use data modelling and
                    forecasting methods to examine how current processes relate
                    to sustainability objectives.
                  </li>
                  <li>
                    Combine human and machine intelligence: machine learning
                    takes over many data processing duties, revealing insights
                    quickly so that teams can make sure data-driven decisions.
                  </li>
                </ul>
              </text>
            </div>

            <div className="features-text">
              <p>
                A growing amount of pressure is being placed on organizations to
                manage their sustainability performance as a result of reliable
                data gathering, reporting, and analytics. In order to empower
                industries to make strategic, real-time decisions to meet
                sustainability goals (i.e Emission monitoring, GHG reporting and
                reduction etc), we apply data-driven sustainability frameworks
                to emission monitoring, reporting, and reduction through
                automatic data gathering, processing, and analytics.
              </p>
            </div>
          </div>
          <div className="project-details-image">
            <img src="/images/projects/Data-Framework-2.svg" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataDrivenApproachContent;
