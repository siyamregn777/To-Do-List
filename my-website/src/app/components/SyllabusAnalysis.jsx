// components/SyllabusAnalysis.tsx
const SyllabusAnalysis = () => {
  const syllabusData = [
    { topic: "HTML Tools, Forms, History", percentage: 80 },
    { topic: "Tags & References in HTML", percentage: 60 },
    { topic: "Tables & References in HTML", percentage: 24 },
    { topic: "Tables & CSS Basics", percentage: 96 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow ">
      <h2 className="text-sm mb-5 font-semibold">Syllabus Wise Analysis</h2>
      <div className="space-y-8 text-sm h-70 overflow-y-auto">
        {syllabusData.map((item, index) => {
          // Determine color class based on percentage
          const colorClass = 
            item.percentage >= 90 ? 'text-green-500 mb-2' :
            item.percentage >= 80 ? 'text-blue-500 mb-2' :
            item.percentage >= 40 ? 'text-yellow-500 mb-2' : 'text-red-500 mb-2';
          
          return (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">{item.topic}</span>
                <span className={`font-medium ${colorClass}`}>{item.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div 
                  className={`h-2 rounded ${
                    item.percentage >= 90 ? 'bg-green-500' :
                    item.percentage >= 80 ? 'bg-blue-500' :
                    item.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${item.percentage}%` }}
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