import React from "react";
import br from "../assets/home/Asset10.png";
import tl from "../assets/leaderboard/Asset 6.png";
import stages from "../assets/texts/stages.png";
import { Stack } from "@mui/material";

const Stages = () => {
  return (
    <div className="bg-black  w-full bg22 h-[100vh]">
        <img src={tl} className="absolute top-10 left-8 h-[40%]" alt="" />
        <img src={br} className="absolute bottom-2 right-6 w-[30%]" alt="" />

        <Stack
      alignItems="center"
      justifyContent="center"
      className="pt-16 mb-6"
    >
        <img src={stages} className=" w-[30%]" alt="" />
      </Stack>


    </div>
  );
};

export default Stages;
