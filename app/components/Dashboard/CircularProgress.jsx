import React from "react";
import { Target } from "lucide-react";

const CircularProgress = ({score }) => {
  const percentage = (score / 15) * 100;
  const circumference = 2 * Math.PI * 45; 
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full max-w-lg p-5 rounded-lg bg-white border border-slate-300">
      <div className="flex justify-between items-start mb-3.5">
        <h2 className="text-xl font-bold">Question Analysis</h2>
        <span className="text-blue-600 font-bold text-lg">{score}/15 </span>
      </div>

      <p className="text-gray-600 text-base mb-6">
        You scored {score} question correct out of 15.
        {score < 15 && " However it still needs some improvements"}
      </p>

      <div className="relative w-56 h-56 mx-auto">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            className="fill-none stroke-gray-200"
            cx="50"
            cy="50"
            r="45"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            className="fill-none stroke-blue-500"
            cx="50"
            cy="50"
            r="45"
            strokeWidth="8"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        {/* Center target icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Target className="w-10 h-10 text-red-500" />{" "}
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
