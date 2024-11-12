import React from "react";
import bg from "../assets/bg.png";

const Stages = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      <img
        src={bg}
        className=" absolute object-cover h-[100vh] w-full"
        alt=""
      />
      STAGES
    </div>
  );
};

export default Stages;
