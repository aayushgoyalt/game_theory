import React from "react";
import "tailwindcss/tailwind.css";

const Rules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Rulebook
        </h1>
        <ul className="space-y-4">
          <li className="text-lg text-gray-700">
            <span className="font-semibold">Rule 1:</span> Always play fair.
          </li>
          <li className="text-lg text-gray-700">
            <span className="font-semibold">Rule 2:</span> Respect other
            players.
          </li>
          <li className="text-lg text-gray-700">
            <span className="font-semibold">Rule 3:</span> Follow the game
            instructions.
          </li>
          <li className="text-lg text-gray-700">
            <span className="font-semibold">Rule 4:</span> Have fun!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
