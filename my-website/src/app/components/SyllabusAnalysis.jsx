// components/SyllabusAnalysis.tsx

/**
 * SyllabusAnalysis Component
 * Displays a visual breakdown of syllabus topics with completion percentages.
 * Features color-coded progress bars and percentage indicators based on performance tiers.
 * Key Features:
 * - Responsive design with scrollable content area
 * - Visual progress indicators with semantic coloring
 * - Performance-tiered color coding (90+% green, 80+% blue, etc.)
 * - Clean, accessible typography and spacing
 */
const SyllabusAnalysis = () => {
  // Mock data - in a real app this would likely come from an API
  const syllabusData = [
    { topic: "HTML Tools, Forms, History", percentage: 80 },
    { topic: "Tags & References in HTML", percentage: 60 },
    { topic: "Tables & References in HTML", percentage: 24 },
    { topic: "Tables & CSS Basics", percentage: 96 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Component Header */}
      <h2 className="text-sm mb-5 font-semibold">Syllabus Wise Analysis</h2>
      
      {/* Scrollable Content Area */}
      <div className="space-y-8 mt-5 text-sm h-70 overflow-y-auto">
        {syllabusData.map((item, index) => {
          /**
           * Determine color classes based on percentage thresholds
           * - 90-100%: Green (excellent)
           * - 80-89%: Blue (good)
           * - 40-79%: Yellow (needs improvement)
           * - Below 40%: Red (poor)
           */
          const textColorClass = 
            item.percentage >= 90 ? 'text-green-500' :
            item.percentage >= 80 ? 'text-blue-500' :
            item.percentage >= 40 ? 'text-yellow-500' : 'text-red-500';
          
          const barColorClass = 
            item.percentage >= 90 ? 'bg-green-500' :
            item.percentage >= 80 ? 'bg-blue-500' :
            item.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500';

          return (
            <div key={`syllabus-item-${index}`} className="mb-8">
              {/* Topic and Percentage Row */}
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">
                  {item.topic}
                </span>
                <span className={`font-medium ${textColorClass}`}>
                  {item.percentage}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded">
                <div 
                  className={`h-2 rounded transition-all duration-300 ${barColorClass}`}
                  style={{ 
                    width: `${item.percentage}%`,
                    // Smooth width transitions if percentages change
                    transitionProperty: 'width' 
                  }}
                  role="progressbar"
                  aria-valuenow={item.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SyllabusAnalysis;