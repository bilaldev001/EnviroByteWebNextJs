import React from "react";

const TeamMemberDetailView = ({ member }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 align-items-start">
        <div className="lg:col-span-1 col-span-3">
          <div className="services-details-image m-0 sm:block flex justify-center items-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded sm:max-w-full max-w-[300px]"
            />
          </div>
        </div>

        <div className="lg:col-span-2 col-span-3">
          <div className="services-details-desc">
            <h3 className="dark:text-[#ffffff] leading-[20px]">
              {member.name}
            </h3>

            <div className="features-text">
              <p className="text-[18px] dark:text-[#9BA9B4]">
                {member.description}
              </p>
              {member.isoStandards && (
                <text className="text-[18px] dark:text-[#9BA9B4]">
                  <ul>
                    {member.isoStandards.map((standard, i) => (
                      <li key={i}>{standard}</li>
                    ))}
                  </ul>
                </text>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberDetailView;
