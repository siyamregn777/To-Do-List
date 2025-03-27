// skill-test/page.tsx
"use client";

import { useState } from "react";
import QuickStatistics from "../components/QuickStatistics";
import ComparisonGraph from "../components/ComparisonGraph";
import SkillTestCard from "../components/SkillTestCard";
import SyllabusAnalysis from "../components/SyllabusAnalysis";
import QuestionAnalysis from "../components/QuestionAnalysis";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SkillTestPage() {
  const [rank, setRank] = useState(12);
  const [percentile, setPercentile] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(10);
  const totalQuestions = 15;

  const [tempRank, setTempRank] = useState(rank);
  const [tempPercentile, setTempPercentile] = useState(percentile);
  const [tempCorrectAnswers, setTempCorrectAnswers] = useState(correctAnswers);
  const [showPopup, setShowPopup] = useState(false);

  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    correctAnswers: "",
  });

  const handleUpdate = () => {
    let valid = true;
    const newErrors = { rank: "", percentile: "", correctAnswers: "" };

    if (tempRank < 0 || tempRank > 90) {
      newErrors.rank = "Rank must be between 1 and 90";
      valid = false;
    }

    if (tempPercentile < 0 || tempPercentile > 100) {
      newErrors.percentile = "Percentile must be between 0 and 100";
      valid = false;
    }

    if (tempCorrectAnswers < 0 || tempCorrectAnswers > totalQuestions) {
      newErrors.correctAnswers = `Correct Answers must be between 0 and ${totalQuestions}`;
      valid = false;
    }

    if (valid) {
      setRank(tempRank);
      setPercentile(tempPercentile);
      setCorrectAnswers(tempCorrectAnswers);
      setShowPopup(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-sm md:text-base font-bold text-gray-800 mb-4 md:mb-6">Skill Test</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column - spans full width on mobile, 2/3 on desktop */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <SkillTestCard onUpdateClick={() => setShowPopup(true)} />
            
            <QuickStatistics 
              rank={rank}
              percentile={percentile}
              correctAnswers={correctAnswers}
              totalQuestions={totalQuestions}
            />
            
            <ComparisonGraph percentile={percentile} />
          </div>
          
          {/* Right Column - stacks below on mobile, 1/3 on desktop */}
          <div className="space-y-4 md:space-y-6">
            <SyllabusAnalysis />
            <QuestionAnalysis 
              correctAnswers={correctAnswers} 
              totalQuestions={totalQuestions} 
            />
          </div>
        </div>
      </div>

      {/* Update Scores Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Update Scores</h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Update Your Rank *
                </label>
                <input 
                  type="number" 
                  value={tempRank}
                  max={90}
                  onChange={(e) => setTempRank(Number(e.target.value))}
                  className={`w-full border ${errors.rank ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.rank && <p className="text-red-500 text-xs mt-1">{errors.rank}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Update Your Percentile (0-100)
                </label>
                <input 
                  type="number" 
                  value={tempPercentile}
                  onChange={(e) => setTempPercentile(Number(e.target.value))}
                  className={`w-full border ${errors.percentile ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500`}
                  min="0"
                  max="100"
                />
                {errors.percentile && <p className="text-red-500 text-xs mt-1">{errors.percentile}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Update Your Correct Answers (0-15)
                </label>
                <input 
                  type="number" 
                  value={tempCorrectAnswers}
                  onChange={(e) => setTempCorrectAnswers(Number(e.target.value))}
                  className={`w-full border ${errors.correctAnswers ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500`}
                  min="0"
                  max="15"
                />
                {errors.correctAnswers && <p className="text-red-500 text-xs mt-1">{errors.correctAnswers}</p>}
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4 md:mt-6">
              <button 
                onClick={() => setShowPopup(false)} 
                className="px-3 py-1 md:px-4 md:py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors text-sm md:text-base"
              >
                Cancel
              </button>
              <button 
                onClick={handleUpdate} 
                className="px-3 py-1 md:px-4 md:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm md:text-base"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}