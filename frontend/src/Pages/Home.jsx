import React from "react";

const Homee = () => {
  return (
    <div className="flex bg-black w-full justify-center items-center">
      <img
        src="../../Public/home.webp"
        className=" border border-white h-[100vh]"
        alt=""
      />
      <button className="z-50  absolute text-4xl mt-[270px]  xl:mt-[300px] px-[170px] py-5 ">
        LOG IN
      </button>
    </div>
  );
};

export default Homee;
