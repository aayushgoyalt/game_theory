import React from "react";
import leader from "../assets/leader.png";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: "1st", teamName: "Team Alpha", score: 250 },
    { rank: "2nd", teamName: "Team Beta", score: 200 },
    { rank: "3rd", teamName: "Team Gamma", score: 180 },
    { rank: "4th", teamName: "Team Delta", score: 150 },
    { rank: "5th", teamName: "Team Epsilon", score: 120 },
  ];

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={leader}
        className="w-full h-auto absolute top-0 left-0"
        alt="Leaderboard Background"
      />

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
            <span className="z-50">{item.rank}</span>
            <span className="z-50">{item.teamName}</span>
            <span className="z-50">{item.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
