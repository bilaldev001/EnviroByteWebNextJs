import React from "react";

const TeamCard = ({ data }) => {
  return (
    <div className="shadow-teamCard dark:bg-[#25282C] p-4 rounded-2xl flex flex-col items-center mb-4 group hover:transform hover:translate-y-[-5px] transition duration-500">
      <div className="team-image">
        <img
          src={data?.image}
          alt="team"
          className="rounded-circle xl:h-[14rem] xl:w-[14rem] lg:w-[12rem] lg:h-[12rem] w-[12rem] h-[12rem] group-hover:transform group-hover:scale-110 transition duration-500"
        />
      </div>
      <h3 className="text-[24px] text-center py-[25px] dark:text-[#D9E3EA] text-[#393953]">
        {data.name}
      </h3>
      <div className="team-social flex items-center gap-[10px] ">
        <a
          href="/bio-details"
          target="_blank"
          className="text-15 m-0 6 text-whit flex items-center justify-center h-[40px] w-[40px] leading-[40px]  bg-[#00b0ee] rounded-full hover:bg-white hover:text-[#00b0ee] dark:hover:text-[#00b0ee] dark:text-[#D9E3EA] group-hover:transform group-hover:scale-110"
        >
          <i className="fa fa-id-badge"></i>
        </a>
        <a
          href={data.linkedIn}
          target="_blank"
          className="text-15 m-0 6 text-whit flex items-center justify-center h-[40px] w-[40px] leading-[40px]  bg-[#00b0ee] rounded-full hover:bg-white hover:text-[#00b0ee] dark:hover:text-[#00b0ee] dark:text-[#D9E3EA] group-hover:transform group-hover:scale-110"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="/contact"
          target="_blank"
          className="text-15 m-0 6 text-whit flex items-center justify-center h-[40px] w-[40px] leading-[40px]  bg-[#00b0ee] rounded-full hover:bg-white hover:text-[#00b0ee] dark:hover:text-[#00b0ee] dark:text-[#D9E3EA] group-hover:transform group-hover:scale-110"
        >
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
