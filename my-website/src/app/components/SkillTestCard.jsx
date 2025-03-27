"use client";

import { FaHtml5 } from "react-icons/fa"; // Using react-icons for scalable vector icons

/**
 * SkillTestCard Component
 * 
 * Displays a test/assessment card with subject details and action button.
 * Features:
 * - Responsive layout with icon, details, and action button
 * - Clean typography hierarchy
 * - Hover state for interactive elements
 * - Accessible color contrast
 * - Reusable component structure
 */
const SkillTestCard = ({ onUpdateClick }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-md shadow">
      {/* Left Section: Icon and Details */}
      <div className="flex items-center space-x-3">
        {/* Icon with Label */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold text-gray-600">HTML</span>
          {/* Using react-icons for consistent, scalable vector graphics */}
          <FaHtml5 
            className="text-3xl text-orange-500" 
            aria-hidden="true" // Icon is decorative
          />
        </div>

        {/* Test Metadata */}
        <div>
          {/* Subject Title - Using semantic HTML for better accessibility */}
          <h3 className="text-sm font-semibold">Hyper Text Markup Language</h3>
          
          {/* Test Details - Concise metadata in readable format */}
          <p className="text-sm text-gray-600">
            Questions: 8 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>

      {/* Action Button - Right-aligned for clear CTAs */}
      <button
        onClick={onUpdateClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        aria-label="Update HTML skill test"
      >
        Update
      </button>
    </div>
  );
};

export default SkillTestCard;