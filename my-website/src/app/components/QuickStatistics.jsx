"use client";

/**
 * QuickStatistics Component
 * 
 * Displays key performance metrics in a compact, visually scannable format.
n Principles:
 * - Mobile-first responsive grid layout
 * - Visual hierarchy with icon + numeric value + label pattern
 * - Accessible text contrast ratios
 */
const QuickStatistics = ({ rank, percentile, correctAnswers, totalQuestions }) => {
  return (
    <div className="bg-white p-6 rounded-sm shadow text-sm">
      {/* Component Header */}
      <h2 className="text-sm font-semibold mb-4">Quick Statistics</h2>
      
      {/* Metrics Grid - 3 column layout for balanced information density */}
      <div className="grid grid-cols-3 gap-4 text-center">
        {/* Rank Metric */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1 gap-2">
            <span className="text-base" aria-hidden="true">🏆</span> 
            <div className="text-left">
              {/* Formatted number with locale-specific thousands separators */}
              <p className="text-sm font-bold">{rank.toLocaleString()}</p>
              <p className="text-xs text-gray-600">YOUR RANK</p>
            </div>
          </div>
        </div>

        {/* Percentile Metric */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1 gap-2">
            <span className="text-base" aria-hidden="true">📊</span>
            <div className="text-left">
              {/* Percentage value (already formatted as 0-100 from parent) */}
              <p className="text-sm font-bold">{percentile}%</p>
              <p className="text-xs text-gray-600">PERCENTILE</p>
            </div>
          </div>
        </div>

        {/* Accuracy Metric */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1 gap-2">
            <span className="text-base" aria-hidden="true">✅</span> 
            <div className="text-left">
              {/* Score fraction - shows progress toward perfect score */}
              <p className="text-sm font-bold">{correctAnswers}/{totalQuestions}</p>
              <p className="text-xs text-gray-600">CORRECT ANSWERS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;