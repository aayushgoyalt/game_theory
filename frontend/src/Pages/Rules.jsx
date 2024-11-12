import React from "react";
import "tailwindcss/tailwind.css";

const RulesData = [
  {
    id: 1,
    title: "Rule 1",
    description: "Always play fair.",
  },
  {
    id: 2,
    title: "Rule 2",
    description: "Respect other players.",
  },
  {
    id: 3,
    title: "Rule 3",
    description: "Follow the game instructions.",
  },
  {
    id: 4,
    title: "Rule 4",

    description: "Have fun!",
  },
];

const Rules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Rulebook
        </h1>
        <ul className="space-y-4">
          {RulesData.map((rule) => (
            <li key={rule.id} className="flex items-center">
              <span className="font-semibold">{rule.title}:</span>
              <span className="ml-2">{rule.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rules;
