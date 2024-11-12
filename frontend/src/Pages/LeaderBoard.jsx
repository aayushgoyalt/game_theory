import React from "react";
import leader from "../assets/leader.png";

const LeaderBoard = () => {
  return (
    <div className=" bg-black min-h-screen overflow-hidden">
      <img src={leader} className=" w-full -mt-7  -ml-1" alt="" />
    </div>
  );
};

export default LeaderBoard;
