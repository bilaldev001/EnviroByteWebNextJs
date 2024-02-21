import React from "react";
import TeamCard from "./TeamCard";

const TeamMemberContent = () => {
  const Advisors = [
    {
      name: "John Parr",
      image: "/images/team/John.jpg",
      linkedIn: "https://www.linkedin.com/in/john-parr-yyc/",
    },
    {
      name: "Perry Toms",
      image: "/images/team/Perry.jpg",
      linkedIn: "https://www.linkedin.com/in/perry-toms-4567666/",
    },
  ];
  const Experts = [
    {
      name: "Brian Sloof",
      image: "/images/team/Brian.jpg",
      linkedIn: "https://www.linkedin.com/in/briansloof/",
    },
    {
      name: "Nelson Lee",
      image: "/images/team/Nelson.jpg",
      linkedIn: "https://www.linkedin.com/in/ghgoffsetter/",
    },
    {
      name: "Kevin Poirier",
      image: "/images/team/Kevin.jpg",
      linkedIn: "https://www.linkedin.com/in/pubkevinpoirier791/",
    },
    {
      name: "Minxing Si",
      image: "/images/team/Minxing.jpg",
      linkedIn: "https://www.linkedin.com/in/minxingsi/",
    },
  ];
  return (
    <>
      <div className="team-section pt-100 pb-70 dark:bg-[#282828] transition">
        <div className="container">
          <div className="section-title">
            <span>Our Experts</span>
            <h2 className="dark:text-[#ffffff]">
              People who started EnviroByte
            </h2>
          </div>

          <div className="row">
            {Experts.map((data, index) => (
              <div key={index} className="col-xl-3 col-md-4 col-sm-6 col-12">
                <TeamCard data={data} />
              </div>
            ))}

            <div className="section-title pt-5">
              <span>Our Advisors</span>
              <h2 className="dark:text-[#ffffff]">
                People who advise EnviroByte
              </h2>
            </div>
            {Advisors.map((data, index) => (
              <div key={index} className="col-lg-3 col-sm-3">
                <TeamCard data={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberContent;
