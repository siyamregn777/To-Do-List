"use client";

const QuickStatistics = ({ rank, percentile, correctAnswers, totalQuestions }) => {
  return (
    <div className="bg-white p-6 rounded-sm shadow text-sm">
      <h2 className="text-sm font-semibold mb-4">Quick Statistics</h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        {/* Rank with Trophy Icon */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1 gap-2">
            <span className="text-base">🏆</span>
            <div className="text-left">
              <p className="text-sm font-bold">{rank.toLocaleString()}</p>
              <p className="text-xs text-gray-600">YOUR RANK</p>
            </div>
          </div>
        </div>

        {/* Percentile with Chart Icon */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1 gap-2">
            <span className="text-base">📊</span>
            <div className="text-left">
              <p className="text-sm font-bold">{percentile}%</p>
              <p className="text-xs text-gray-600">PERCENTILE</p>
            </div>
          </div>
        </div>

        {/* Correct Answers with Checkmark Icon */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1 gap-2">
            <span className="text-base">✅</span>
            <div className="text-left">
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
