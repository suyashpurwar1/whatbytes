// src/components/Dashboard/ProgressBar.jsx
const ProgressBar = ({ label, percentage, color }) => (
  <div className="mb-4 ">
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);
export default ProgressBar;

