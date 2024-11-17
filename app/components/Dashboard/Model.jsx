import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  onSave,
  rank,
  setRank,
  percentile,
  setPercentile,
  correctAnswers,
  setCorrectAnswers,
}) => {
  const [errors, setErrors] = useState({});
  const [tempValues, setTempValues] = useState({
    rank: rank,
    percentile: percentile,
    correctAnswers: correctAnswers,
  });

  useEffect(() => {
    // Update temp values when modal opens
    if (isOpen) {
      setTempValues({
        rank: rank,
        percentile: percentile,
        correctAnswers: correctAnswers,
      });
    }
  }, [isOpen, rank, percentile, correctAnswers]);

  if (!isOpen) return null;

  const validateField = (name, value) => {
    switch (name) {
      case "rank":
        if (!value || value === "") {
          return `${name} is required | Must be greater than 0`;
        }
      case "percentile":
        if (!value || value === "") {
          return `${name} is required | Must be between 0-100`;
        }
      case "score":
        if (!value || value === "") {
          return `${name} is required | Must be between 0-15`;
        }
      default:
        return "";
    }
  };

  const handleInputChange = (field, value, setter) => {
    const errorMessage = validateField(field, value);
    setErrors((prev) => ({
      ...prev,
      [field]: errorMessage,
    }));
    setter(value);
    setTempValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClose = () => {
    // Restore original values
    setRank(rank);
    setPercentile(percentile);
    setCorrectAnswers(correctAnswers);
    setErrors({});
    onClose();
  };

  const validateForm = () => {
    const newErrors = {
      rank: validateField("rank", tempValues.rank),
      percentile: validateField("percentile", tempValues.percentile),
      score: validateField("score", tempValues.correctAnswers),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave();
    }
  };

  const inputClasses = `w-32 p-2 border rounded-lg text-sm ${
    errors ? "border-red-500" : "border-blue-200"
  }`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4 p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold">Update scores</h2>
          <div className="w-8 h-8">
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
        </div>

        <div className="space-y-6">
          {/* Rank Input */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 w-64">
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                1
              </div>
              <span className="text-sm">Update your Rank</span>
            </div>
            <div>
              <input
                type="number"
                value={tempValues.rank}
                onChange={(e) =>
                  handleInputChange("rank", e.target.value, setRank)
                }
                className={inputClasses}
              />
              {errors.rank && (
                <p className="text-red-500 text-xs mt-1">{errors.rank}</p>
              )}
            </div>
          </div>

          {/* Percentile Input */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 w-64">
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                2
              </div>
              <span className="text-sm">Update your Percentile</span>
            </div>
            <div>
              <input
                type="number"
                value={tempValues.percentile}
                onChange={(e) =>
                  handleInputChange("percentile", e.target.value, setPercentile)
                }
                className={inputClasses}
              />
              {errors.percentile && (
                <p className="text-red-500 text-xs mt-1">{errors.percentile}</p>
              )}
            </div>
          </div>

          {/* Score Input */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 w-64">
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                3
              </div>
              <span className="text-sm">Update your Score (out of 15)</span>
            </div>
            <div>
              <input
                type="number"
                value={tempValues.correctAnswers}
                onChange={(e) =>
                  handleInputChange("score", e.target.value, setCorrectAnswers)
                }
                className={inputClasses}
              />
              {errors.score && (
                <p className="text-red-500 text-xs mt-1">{errors.score}</p>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-4 mt-6">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm text-blue-900 font-semibold hover:bg-gray-50 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg flex items-center gap-2 hover:bg-blue-800"
          >
            Save <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
