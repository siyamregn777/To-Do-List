"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend
);

const ComparisonGraph = ({ percentile }) => {
  const averagePercentile = 72;
  const totalStudents = 90;

  // Generate distribution data based on average
  const generateDistribution = () => {
    const baseData = [5, 15, 40, 25, 5]; // Base distribution percentages
    
    // Adjust based on user's position relative to average
    if (percentile > averagePercentile) {
      return [3, 10, 35, 35, 7]; // Shift right
    } else if (percentile < averagePercentile) {
      return [7, 20, 45, 20, 3]; // Shift left
    }
    return baseData;
  };

  const distributionData = generateDistribution();

  const data = {
    labels: ["0%", "25%", "50%", "75%", "100%"],
    datasets: [
      {
        label: "Number of Students",
        data: distributionData,
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed.y;
            const percentage = Math.round((value / totalStudents) * 100);
            return `${value} students (${percentage}%)`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...distributionData) + 10,
        title: {
          display: true,
          text: "Number of Students",
        },
      },
      x: {
        title: {
          display: true,
          text: "Percentile",
        },
      },
    },
  };

  const comparisonText = percentile > averagePercentile
    ? `higher than the average percentile ${averagePercentile}%`
    : percentile < averagePercentile
    ? `lower than the average percentile ${averagePercentile}%`
    : `equal to the average percentile ${averagePercentile}%`;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Comparison Graph</h2>
      <p className="text-gray-700 mb-4">
        You scored {percentile}% percentile which is {comparisonText} of all engineers who took this assessment.
      </p>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Total students: {totalStudents}</p>
        <p>Average percentile: {averagePercentile}%</p>
      </div>
    </div>
  );
};

export default ComparisonGraph;
