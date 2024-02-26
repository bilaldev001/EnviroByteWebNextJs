import React from "react";

const FunFacts = () => {
  return (
    <>
      <div className="fun-facts-area ptb-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3 className="dark:text-[#393953]">
                  500
                  <span className="sign-icon">+</span>
                </h3>
                <p className="dark:text-[#393953]">GHG Project</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3 className="dark:text-[#393953]">
                  10
                  <span className="sign-icon">+</span>
                </h3>
                <p className="dark:text-[#393953]">Life Cycle Assessment</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3 className="dark:text-[#393953]">
                  20
                  <span className="sign-icon">+</span>
                </h3>
                <p className="dark:text-[#393953]">Climate Change Adaptation</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3 className="dark:text-[#393953]">
                  120
                  <span className="sign-icon">+</span>
                </h3>
                <p className="dark:text-[#393953]">Big Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
