import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Target } from "lucide-react";

const CircularProgress = ({ score }) => {
  const percentage = (score / 15) * 100;

  // Data for Pie Chart
  const data = [
    { name: "Achieved", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  const COLORS = ["#4F46E5", "#E5E7EB"]; // Progress and background colors

  return (
    <div className="w-full max-w-lg p-5 rounded-lg bg-white border border-slate-300">
      <div className="flex justify-between items-start mb-3.5">
        <h2 className="text-xl font-bold">Question Analysis</h2>
        <span className="text-blue-600 font-bold text-lg">{score}/15</span>
      </div>

      <p className="text-gray-600 text-base mb-6">
        You scored {score} questions correct out of 15.
        {score < 15 && " However, it still needs some improvements."}
      </p>

      <div className="relative w-56 h-56 mx-auto">
        {/* Pie Chart */}
        <PieChart width={224} height={224}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            startAngle={90}
            endAngle={-270} 
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Center target icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Target className="w-10 h-10 text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
