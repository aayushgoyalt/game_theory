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
      white: "First white content here. Lorem ipsum dolor sit amet...",
      pink: "First pink content here. Lorem ipsum dolor sit amet...",
    },
    {
      white: "Second white content here. Lorem ipsum dolor sit amet...",
      pink: "Second pink content here. Lorem ipsum dolor sit amet...",
    },
    {
      white: "Third white content here. Lorem ipsum dolor sit amet...",
      pink: "Third pink content here. Lorem ipsum dolor sit amet...",
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
          setContentIndex((prevIndex) =>
            (prevIndex - 1 + content.length) % content.length
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
          className="absolute left-[-40px] text-white text-3xl lg:text-4xl transform -translate-y-1/2 top-1/2 hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div
          ref={whiteDivRef}
          className="bg-white w-[90%] sm:w-[70%] md:w-[600px] lg:w-[500px] xl:w-[600px] h-[400px] md:h-[500px] lg:h-[550px] xl:h-[550px] border shadow-md rounded-lg"
        >
          {content[contentIndex].white}
        </div>

        <div
          ref={pinkDivRef}
          className="bg-pink-500 w-[90%] sm:w-[70%] md:w-[500px] lg:w-[400px] xl:w-[500px] h-[400px] md:h-[500px] lg:h-[550px] xl:h-[550px] border shadow-md rounded-lg"
        >
          {content[contentIndex].pink}
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