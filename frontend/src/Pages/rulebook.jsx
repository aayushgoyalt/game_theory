import React, { useState, useRef } from "react";
import ruleimage from "../assets/rule.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

function Rulebook() {
  const [contentIndex, setContentIndex] = useState(0);
  const whiteDivRef = useRef(null);
  const pinkDivRef = useRef(null);

  const content = [
    {
      white: `In a world of high-stakes innovation, teams represent rival tech corporations battling for dominance in an industry worth billions. Each corporation is vying for a grand prize: an enormous sum of money or treasure hidden within an encrypted vault of tech patents, groundbreaking research, and exclusive industry partnerships. Only one corporation will walk away as the ultimate winner.
      
      Round 1

Each corporation has made an unexpected technological breakthrough, but word has leaked to the press. Now, their rivals may choose to either cooperate by keeping quiet or try to steal information to gain the upper hand.
`,
      pink: `Scoring Matrix

Both Teams Innovate: 
Both teams benefit from mutual innovation.
Score: Each team earns +10 points.

One Team Innovates, the Other Spies: 
The spying team gains an advantage, while the innovating team loses out.
Spying Team: +15 points
Innovating Team: -10 points

Both Teams Spy: 
Result: Both teams face losses due to mutual spying.
Score: Each team incurs a -5 penalty.
`,
    },
    {
      white: `Round 2

Objective

The initial rivalry round has ended, and the corporations have weathered their first test of trust and betrayal. Now, only the strongest competitors remain, and the stakes are higher than ever. 

In Round 2, each corporation is no longer limited to simple choices. Instead, they must navigate a complex, multi-faceted battlefield in the industry, balancing the pursuit of 

innovation, security, diplomacy, and economic expansion. 

Each team now has four possible actions, each representing a significant corporate decision that could lead to either dominance or downfall.
`,
      pink: `Base Scores:
+10 points: Awarded to both teams each round.

Bonus Points:
Diverse Choices: Teams earn a +20 bonus if they select each option (Military, Diplomacy, Economy, Espionage) exactly 5 times each over the 20 rounds.
Espionage/Diplomacy Advantage: Teams earn a +10 bonus if they select Espionage or Diplomacy more times than their opponent by the end of the rounds.
Economy/Military Advantage: Teams earn a +5 bonus if they select Economy or Military more times than their opponent by the end of the rounds.

Penalties:
Military Clash: If both teams select Military in the same round, they each receive a -3 penalty for that round.
Espionage Clash: If both teams select Espionage in the same round, they each receive a -1 penalty for that round.

Tie-Breaker:
If teams are tied after all 20 rounds, the team with fewer mutual penalties (e.g., fewer rounds where both chose Military) is declared the winner.
If still tied, the team that achieved the diverse choice bonus (5 of each choice) first wins.
`,
    },
    {
      white: `Final Round: Prisoner’s Dilemma - Split or Steal
      
The last two corporations have come neck-and-neck, each holding a digital key to unlock the encrypted vault holding the grand prize. However, only one key will open the vault entirely. The vault's AI requires both teams to input their choice: Split (share the prize) or Steal (attempt to take it all). But there’s a twist—they’ll have one last opportunity to talk it over before locking in their decisions.

Objective
Each team must decide between two options:
Split: Cooperate with the opponent, sharing rewards.
Steal: Attempt to gain all rewards at the risk of losing everything if the opponent also chooses to steal.`,
      pink: `Process
Chat Phases:
Teams are allowed a total of 1 minute 15 seconds of conversation before making their final decision:
- 30 seconds for Team 1 to speak (uninterrupted by Team 2)
- 30 seconds for Team 2 to speak (uninterrupted by Team 1)
- 15 seconds of open conversation, where both teams can communicate freely.

Decision Phase:
Following the chat, both teams have 1 minute to lock in their choice either Split or Steal without further discussion.
`,
    },
  ];

  const handleNext = () => {
    gsap.fromTo(
      [whiteDivRef.current, pinkDivRef.current],
      { x: 0, opacity: 1 },
      {
        x: -100,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setContentIndex((prevIndex) => (prevIndex + 1) % content.length);
          gsap.fromTo(
            [whiteDivRef.current, pinkDivRef.current],
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 }
          );
        },
      }
    );
  };

  const handlePrevious = () => {
    gsap.fromTo(
      [whiteDivRef.current, pinkDivRef.current],
      { x: 0, opacity: 1 },
      {
        x: 100,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setContentIndex(
            (prevIndex) => (prevIndex - 1 + content.length) % content.length
          );
          gsap.fromTo(
            [whiteDivRef.current, pinkDivRef.current],
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 }
          );
        },
      }
    );
  };

  const renderWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <>
      <div className="relative h-screen w-full bg-black">
        <img
          src={ruleimage}
          className="h-full w-full object-cover -ml-1"
          alt="Rulebook"
        />
      </div>

      <div className="absolute top-[205px] left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
        <button
          onClick={handlePrevious}
          className="absolute p-6 left-[-40px] text-white text-3xl lg:text-4xl transform -translate-y-1/2 top-1/2 hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div
          ref={whiteDivRef}
          className="bg-white p-6 w-[90%] sm:w-[70%] md:w-[600px] lg:w-[500px] xl:w-[600px] h-[400px] md:h-[500px] lg:h-[550px] xl:h-[550px] border shadow-md rounded-lg"
        >
          {renderWithLineBreaks(content[contentIndex].white)}
        </div>

        <div
          ref={pinkDivRef}
          className="bg-pink-500 p-6 w-[90%] sm:w-[70%] md:w-[500px] lg:w-[400px] xl:w-[500px] h-[400px] md:h-[500px] lg:h-[550px] xl:h-[550px] border shadow-md rounded-lg"
        >
          {renderWithLineBreaks(content[contentIndex].pink)}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-65px] text-white text-3xl lg:text-4xl transform -translate-y-1/2 top-1/2 hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
}

export default Rulebook;
