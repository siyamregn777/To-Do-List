"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = ({ correctAnswers, totalQuestions }) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  return (
    <div className="bg-white p-4 rounded-sm shadow w-full" style={{ minHeight: '300px' }}>
      {/* Header with title and score */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-bold">Question Analysis</h2>
        <span className="text-sm font-bold bg-gray-100 px-3 py-1.5 rounded">
          {correctAnswers}/{totalQuestions}
        </span>
      </div>

      {/* Score details */}
      <div className="text-center mb-4">
        <p className="text-sm font-semibold mb-1.5">
          You scored {correctAnswers} out of {totalQuestions}.
        </p>
        <p className="text-sm text-gray-600">
          {correctAnswers < totalQuestions ? "Needs some improvement." : "Great job! Keep it up!"}
        </p>
      </div>

      {/* Doughnut Chart */}
      <div className="relative h-52 w-full flex justify-center items-center">
        <div className="absolute w-40 h-40">
          <Doughnut 
            data={{
              labels: ["Correct", "Incorrect"],
              datasets: [{
                data: [correctAnswers, totalQuestions - correctAnswers],
                backgroundColor: ["#4F46E5", "#E5E7EB"],
                borderWidth: 0,
              }],
            }}
            options={{
              cutout: '70%',
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: false,
                }
              }
            }}
          />
        </div>
        <div className="absolute flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm">
            🎯
          </div>
          <span className="text-sm font-bold mt-1.5">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
