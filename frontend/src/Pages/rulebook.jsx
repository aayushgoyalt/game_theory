import React from "react";
import ruleimage from "../assets/rule.png";

function Rulebook() {
  return (
    <>
      <div className="relative h-screen w-full bg-black">
        <img
          src={ruleimage}
          className="h-full w-full object-cover -ml-1"
          alt="Rulebook"
        />
      </div>

      <div className="absolute top-[205px] left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="bg-white w-[90%] sm:w-[70%] md:w-[600px] lg:w-[500px] xl:w-[600px] h-[400px] md:h-[500px] lg:h-[550px] xl:h-[550px] border shadow-md rounded-lg"></div>
        <div className="bg-pink-500 w-[90%] sm:w-[70%] md:w-[500px] lg:w-[400px] xl:w-[500px] h-[400px] md:h-[500px] lg:h-[550px] xl:h-[550px] border shadow-md rounded-lg"></div>
      </div>
    </>
  );
}

export default Rulebook;
