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

// Register ChartJS components - this is required for the chart to work
// We're specifically registering only the components we need to keep the bundle size small
ChartJS.register(
  CategoryScale,  // For category (x-axis) scale
  LinearScale,    // For linear (y-axis) scale
  PointElement,   // For data points on the line
  LineElement,    // For the line itself
  Title,          // For chart title
  Tooltip,        // For hover tooltips
  Legend          // For chart legend (though we disable it in options)
);

/**
 * ComparisonGraph Component
 * 
 * Displays a student distribution chart comparing the user's percentile score against peers.
 * 
 * Key Features:
 * - Visualizes how the user's score compares to an average distribution
 * - Dynamically adjusts distribution curve based on user's position
 * - Provides interactive tooltips with student counts and percentages
 */
const ComparisonGraph = ({ percentile }) => {
  // Constants that would typically come from a config or API in a production environment
  const averagePercentile = 72;  //  average score of student
  const totalStudents = 90;      // Total sample size for normalization

  /**
   * Generates distribution data based on user's percentile relative to average 
   * Note: The distribution shifts based on whether the user scored above/below average:
   * - Above average: More students in higher percentiles (right-skewed)
   * - Below average: More students in lower percentiles (left-skewed)
   * - Average: Balanced normal distribution
   */
  const generateDistribution = () => {
    // Base normal distribution percentages [bottom 25%, 25-50%, 50-75%, top 25%]
    const baseData = [5, 15, 40, 25, 5]; 
    
    // Adjust distribution curve based on user's performance
    if (percentile > averagePercentile) {
      return [3, 10, 35, 35, 7]; // Right-shifted distribution
    } else if (percentile < averagePercentile) {
      return [7, 20, 45, 20, 3]; // Left-shifted distribution
    }
    return baseData; // Default balanced distribution
  };

  const distributionData = generateDistribution();

  // Chart.js data configuration
  const data = {
    labels: ["0%", "25%", "50%", "75%", "100%"], // Percentile buckets
    datasets: [
      {
        label: "Number of Students",
        data: distributionData,
        borderColor: "#4F46E5",          // Indigo-600 from Tailwind
        backgroundColor: "rgba(79, 70, 229, 0.2)", // Indigo-600 with 20% opacity
        pointRadius: 4,                  // Optimal size for visibility
        pointHoverRadius: 6,             // Slightly larger on hover for UX
        tension: 0.4,                    // Smooth curve (0 = straight lines)
        fill: true,                      // Area under curve is filled
      },
    ],
  };

  // Chart.js configuration options
  const options = {
    responsive: true,  // Makes chart responsive to container size
    plugins: {
      legend: {
        display: false, // Hide legend since we only have one dataset
      },
      tooltip: {
        callbacks: {
          // Custom tooltip that shows both count and percentage
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
        max: Math.max(...distributionData) + 10, // Add padding to top
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

  // Generate comparison text based on user's percentile
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
      <div className="h-64">  {/* Fixed height container for consistent chart sizing */}
        <Line data={data} options={options} />
      </div>
      <div className="mt-4 text-sm text-gray-600">  {/* Metadata footer */}
        <p>Total students: {totalStudents}</p>
        <p>Average percentile: {averagePercentile}%</p>
      </div>
    </div>
  );
};

export default ComparisonGraph;