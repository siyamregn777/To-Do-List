"use client";

import { FaHtml5 } from "react-icons/fa"; // Import HTML5 Icon

const SkillTestCard = ({ onUpdateClick }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-md shadow">
      <div className="flex items-center space-x-3">
        {/* Icon and Label */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold text-gray-600">HTML</span> 
          <FaHtml5 className="text-3xl text-orange-500" /> {/* HTML Icon */}
        </div>

        {/* Test Details */}
        <div>
          <h2 className="text-sm font-semibold">Hyper Text Markup Language</h2>
          <p className="text-sm text-gray-600">
            Questions: 8 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>

      {/* Update Button */}
      <button
        onClick={onUpdateClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-900 transition-colors"
      >
        Update
      </button>
    </div>
  );
};

export default SkillTestCard;
