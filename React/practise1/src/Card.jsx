import React from "react";

const Card = ({ props }) => {
  return (
    <div className="card h-90 w-80 bg-[#fff] rounded-3xl px-6 py-2">
      {/* Top Section */}
      <div className="top flex justify-between items-center text-2xl">
        <div className="h-10 w-10 rounded-full border border-gray-400 flex items-center justify-center overflow-hidden bg-white">
          <img className="h-6 w-6 object-contain" src={props.logo} alt="logo" />
        </div>

        <button className="flex items-center gap-2 px-4 py-1 border border-[#111] rounded-full text-sm hover:bg-[#111] hover:text-white  transition-all duration-500">
          Save
          <i className="ri-bookmark-line"></i>
        </button>
      </div>

      {/* Center Section */}
      <div className="center flex flex-col py-4 gap-2 mt-2">
        {/* Company + time */}
        <h2 className="text-2xl text-gray-700 font-medium">
          {props.company}{" "}
          <span className="text-xs text-gray-400">• {props.time}</span>
        </h2>

        {/* Job Title */}
        <h1 className="text-2xl font-bold text-[#111]">{props.role}</h1>

        {/* Buttons */}
        <div className="btn flex gap-2 mt-2">
          <button className="px-3 py-1 text-xs border border-[#111] rounded-full hover:bg-[#111] hover:text-white transition-all duration-500">
            {props.type}
          </button>

          <button className="px-3 py-1 text-xs border border-[#111] rounded-full hover:bg-[#111] hover:text-white transition-all duration-500">
            {props.level}
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom flex justify-between items-center py-6 border-t-1 border-gray-400 mt-15">
        <div className="bottom1">
          <h1 className="font-bold text-xl ">{props.salary}</h1>
          <h2>{props.location}</h2>
        </div>
        <button className="px-5 py-1 text-[#fff] bg-black text-center rounded-sm">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Card;
