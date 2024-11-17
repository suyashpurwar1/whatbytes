// src/components/Dashboard/SyllabusCard.jsx
import ProgressBar from "./ProgressBar";

const SyllabusCard = () => (
  <div className="p-4 bg-white rounded-lg shadow border border-slate-300">
    <h2 className="text-lg font-bold mb-4">Syllabus Wise Analysis</h2>
    <ProgressBar
      label="HTML Tools, Forms, History"
      percentage={80}
      color="bg-blue-500"
    />
    <br />
    <ProgressBar
      label="Tags & References in HTML"
      percentage={60}
      color="bg-orange-500"
    />
    <br />
    <ProgressBar
      label="Tables & References in HTML"
      percentage={24}
      color="bg-red-500"
    />
    <br />
    <ProgressBar
      label="Tables & CSS Basics"
      percentage={96}
      color="bg-green-500"
    />
  </div>
);

export default SyllabusCard;
