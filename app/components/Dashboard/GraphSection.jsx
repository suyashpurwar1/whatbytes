import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { percentile: 0, count: 1 },
  { percentile: 10, count: 2 },
  { percentile: 20, count: 4 },
  { percentile: 25, count: 6 },
  { percentile: 30, count: 12 },
  { percentile: 35, count: 15 },
  { percentile: 40, count: 20 },
  { percentile: 45, count: 25 },
  { percentile: 50, count: 28 },
  { percentile: 55, count: 22 },
  { percentile: 60, count: 18 },
  { percentile: 70, count: 8 },
  { percentile: 80, count: 4 },
  { percentile: 90, count: 4 },
  { percentile: 95, count: 6 },
  { percentile: 100, count: 2 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded-lg shadow-lg">
        <p className="text-base">
          {payload[0].value}
          <span className="text-blue-500 ml-1">numberOfStudent</span>
        </p>
      </div>
    );
  }
  return null;
};

const ComparisonGraph = ({ percentile }) => {
  return (
    <div className="w-full max-w-4xl p-5 bg-white rounded-lg shadow-sm border border-slate-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Comparison Graph</h2>
          <p className="text-gray-600 text-base">
            You scored{" "}
            <span className="font-semibold">{percentile}% percentile</span>{" "}
            which is lower than the average percentile 72% of all the engineers
            who took this assessment
          </p>
        </div>
        <div className="bg-gray-100 p-1.5 rounded-full">
          <TrendingUp className="w-5.5 h-5.5 text-blue-500" />
        </div>
      </div>
      <div className="mt-5 w-full h-[300px]">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 18, right: 25, left: 18, bottom: 18 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="percentile"
              type="number"
              domain={[0, 100]}
              tickCount={5}
              stroke="#555"
              fontSize={11}
            />
            <YAxis stroke="#555" hide />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              x={percentile}
              stroke="#555"
              strokeDasharray="3 3"
              label={{
                value: "your percentile",
                position: "top",
                fill: "#555",
                fontSize: 11,
              }}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#4F46E5"
              strokeWidth={1.75}
              dot={{ r: 3, fill: "#4F46E5" }}
              activeDot={{ r: 5, fill: "#4F46E5" }}
              animationDuration={900}
              connectNulls
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparisonGraph;
