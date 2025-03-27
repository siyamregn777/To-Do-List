'use client';
import { useState } from "react";

export default function InternshipPage() {
  const [activeTab, setActiveTab] = useState('ongoing');

  const internships = {
    ongoing: [
      { 
        id: 1, 
        title: "Frontend Developer Intern", 
        company: "TechCorp", 
        duration: "June 2023 - Present", 
        description: "Working on React and Next.js projects with a focus on responsive design and accessibility improvements." 
      }
    ],
    completed: [
      { 
        id: 3, 
        title: "Web Development Intern", 
        company: "WebSolutions", 
        duration: "Jan 2023 - April 2023", 
        description: "Built and maintained client websites using modern web technologies including responsive layouts and performance optimization." 
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Internship Programs</h1>
        
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === 'ongoing' 
                ? 'text-blue-500 border-b-2 border-blue-500' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('ongoing')}
          >
            Ongoing Internships
          </button>
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === 'completed' 
                ? 'text-blue-500 border-b-2 border-blue-500' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('completed')}
          >
            Completed Internships
          </button>
        </div>
        
        {/* Internship Cards */}
        <div className="space-y-4 md:space-y-6">
          {internships[activeTab].map((internship) => (
            <div 
              key={internship.id} 
              className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                    {internship.title}
                  </h2>
                  <p className="text-gray-600">{internship.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{internship.duration}</p>
                  <p className="mt-3 md:mt-4 text-gray-700">
                    {internship.description}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium self-start sm:self-center ${
                  activeTab === 'ongoing' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {activeTab === 'ongoing' ? 'Active' : 'Completed'}
                </span>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3">
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm md:text-base"
                >
                  View Details
                </button>
                {activeTab === 'ongoing' && (
                  <button 
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors text-sm md:text-base"
                  >
                    Submit Work
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {internships[activeTab].length === 0 && (
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-gray-500">
              No {activeTab === 'ongoing' ? 'ongoing' : 'completed'} internships found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}