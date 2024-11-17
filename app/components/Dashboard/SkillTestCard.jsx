import React, { useState } from "react";
import { Trophy, ClipboardCheck, CheckCircle2 } from "lucide-react";
import Modal from "./Model";
import ComparisonGraph from "./GraphSection";
import CircularProgress from "./CircularProgress";
import SyllabusCard from "./SyllabusCard";
const SkillTestCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(10);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const saveChanges = () => {
    console.log("Changes saved successfully!");
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-5xl space-y-4">
      <div className="grid grid-cols-3 md:grid-cols-8 gap-6">
        <div className="col-span-5 space-y-6">
          {/* Main Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-slate-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* HTML5 Logo */}
                <div className="w-10 h-10">
                  <svg viewBox="0 0 452 520" className="fill-red-500">
                    <path d="M41 460L0 0h451l-41 460-185 52" />
                    <path d="M226 472l149-41 35-394H226" />
                    <path
                      fill="#EBEBEB"
                      d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
                    />
                    <path
                      fill="#FFF"
                      d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
                    />
                  </svg>
                </div>

                <div>
                  <h2 className="text-black text-xl font-bold">
                    Hyper Text Markup Language
                  </h2>
                  <p className="text-gray-600 mt-1 text-sm">
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                  </p>
                </div>
              </div>

              <button
                className="bg-blue-900 text-white px-6 py-2 text-sm rounded-md hover:bg-blue-800 transition-colors"
                onClick={openModal}
              >
                Update
              </button>
            </div>
          </div>
          {/* Statistics Section */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-slate-300">
            <h3 className="text-lg font-bold mb-4">Quick Statistics</h3>
            <div className="grid grid-cols-3 gap-6">
              {/* Rank */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-full">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{rank}</div>
                  <div className="text-black uppercase text-xs">YOUR RANK</div>
                </div>
              </div>

              {/* Percentile */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-full">
                  <ClipboardCheck className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{percentile}%</div>
                  <div className="text-black uppercase text-xs">PERCENTILE</div>
                </div>
              </div>

              {/* Correct Answers */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {" "}
                    {correctAnswers} / 15
                  </div>
                  <div className="text-black uppercase text-xs">
                    CORRECT ANSWERS
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ComparisonGraph percentile={percentile} />
        </div>
        <div className="col-span-3 space-y-6">
          <SyllabusCard />
          <CircularProgress score={correctAnswers} />
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={saveChanges}
          rank={rank}
          setRank={setRank}
          percentile={percentile}
          setPercentile={setPercentile}
          correctAnswers={correctAnswers}
          setCorrectAnswers={setCorrectAnswers}
        />
      </div>
    </div>
  );
};
export default SkillTestCard;
