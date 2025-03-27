"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register only the necessary Chart.js components to optimize bundle size
// ArcElement - Required for doughnut chart segments
// Tooltip - For hover interactions (disabled in this implementation)
// Legend - For chart legend (disabled in favor of custom UI)
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * QuestionAnalysis Component
 * 
 * Visualizes test/quiz results in a digestible doughnut chart format with supporting metrics.
 * Key Features:
 * - Clean visualization of correct/incorrect answer ratio
 * - Percentage score displayed in the chart center
 * - Responsive feedback based on performance
 * - Optimized to prevent unnecessary re-renders
 */
const QuestionAnalysis = ({ correctAnswers, totalQuestions }) => {
  // Calculate percentage score (rounded to nearest integer)
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  return (
    <div 
      className="bg-white p-4 rounded-sm shadow w-full" 
      style={{ minHeight: '300px' }} // Ensure consistent card height
    >
      {/* Header Section - Title and raw score display */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-bold">Question Analysis</h2>
        {/* Score badge - shows correct/total in pill format */}
        <span className="text-sm font-bold bg-gray-100 px-3 py-1.5 rounded">
          {correctAnswers}/{totalQuestions}
        </span>
      </div>

      {/* Performance Summary Section */}
      <div className="text-center mb-4">
        <p className="text-sm font-semibold mb-1.5">
          You scored {correctAnswers} out of {totalQuestions}.
        </p>
        {/* Dynamic feedback message based on performance */}
        <p className="text-sm text-gray-600">
          {correctAnswers < totalQuestions 
            ? "Needs some improvement." 
            : "Great job! Keep it up!"}
        </p>
      </div>

      {/* Visualization Section - Doughnut Chart with Central Percentage */}
      <div className="relative h-52 w-full flex justify-center items-center">
        {/* Chart Container - Fixed aspect ratio for consistent rendering */}
        <div className="absolute w-40 h-40">
          <Doughnut 
            data={{
              labels: ["Correct", "Incorrect"],
              datasets: [{
                data: [correctAnswers, totalQuestions - correctAnswers],
                backgroundColor: [
                  "#4F46E5", // Indigo-600 (correct answers)
                  "#E5E7EB"  // Gray-200 (incorrect answers)
                ],
                borderWidth: 0, // Remove segment borders for cleaner look
              }],
            }}
            options={{
              cutout: '70%', // Large center hole for percentage display
              plugins: {
                legend: {
                  display: false, // Disable default legend (using our own UI)
                },
                tooltip: {
                  enabled: false, // Disable tooltips for simpler UX
                }
              },
              // Additional performance optimizations:
              animation: {
                duration: 800 // Smooth but not distracting animation
              },
              maintainAspectRatio: false // Required for custom sizing
            }}
          />
        </div>
        
        {/* Central Percentage Display */}
        <div className="absolute flex flex-col items-center">
          {/* Decorative icon with brand color background */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm">
            🎯
          </div>
          {/* Large percentage display - primary metric */}
          <span className="text-sm font-bold mt-1.5">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;