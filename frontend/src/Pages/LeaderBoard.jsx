import br from "../assets/leaderboard/Asset 5.png";
import tl from "../assets/leaderboard/Asset 6.png";
import leaderboard from "../assets/texts/leaderboard.png";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const dataLao = async () => {
      const response = await fetch("http://localhost:8080/leaderboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setLeaderboardData(data);
    };

    dataLao();
    const interval = setInterval(() => {
      dataLao();
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  // const leaderboardData = [
  //   { rank: "1st", teamName: "Team Alpha", score: 250 },
  //   { rank: "2nd", teamName: "Team Beta", score: 200 },
  //   { rank: "3rd", teamName: "Team Gamma", score: 180 },
  //   { rank: "4th", teamName: "Team Delta", score: 150 },
  //   { rank: "5th", teamName: "Team Epsilon", score: 120 },
  // ];

  return (
    <div className="bg-black  w-full bg22 min-h-[100vh]">
      <img src={tl} className="absolute top-10 left-8 w-[3%]" alt="" />
      <img src={br} className="absolute bottom-2 right-6 w-[38%]" alt="" />

      <Stack alignItems="center" justifyContent="center" className="mt-20 mb-6">
        <img src={leaderboard} className=" w-[40%]" alt="" />
      </Stack>

      {/* Leaderboard Container */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-3/4 lg:w-2/3 xl:w-1/2 z-10">
        {leaderboardData.map((item, index) => (
          <div
            className="relative flex justify-between items-center p-4 my-4 text-lg font-bold shadow-md "
            key={index}
            style={{
              backgroundColor: index === 0 ? "#D42BC2" : "#C4C4C4",
              color: index === 0 ? "white" : "black",
            }}
          >
            {/* Left Triangle */}
            <div
              className={`absolute top-[-30px] left-[-15px] md:left-[-30px] h-0 w-0`}
              style={{
                borderTop: "60px solid transparent",
                borderBottom: "60px solid transparent",
                rotate: "90deg",
                borderRight: `60px solid ${
                  index === 0 ? "#D42BC2" : "#C4C4C4"
                }`,
              }}
            />
            {/* Right Triangle */}
            <div
              className={`absolute top-[-5px] right-[-15px] md:right-[-25px] h-0 w-0`}
              style={{
                borderTop: "30px solid transparent",
                borderBottom: "40px solid transparent",
                rotate: "90deg",
                borderLeft: `60px solid ${index === 0 ? "#D42BC2" : "#C4C4C4"}`,
              }}
            />

            {/* Row Content */}
            <span className="z-50">{index + 1}</span>
            <span className="z-50">{item.id}</span>
            <span className="z-50">{item.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
