import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => (
  <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4">
    {["captions", "hashtags", "bio", "name"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`
          py-2 px-4 sm:px-6 rounded-full font-semibold text-sm sm:text-base transition-all duration-300
          ${activeTab === tab 
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl transform scale-105" 
            : "bg-gray-800 text-gray-400 hover:text-white hover:scale-105 hover:shadow-lg"}
        `}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </nav>
);

export default Tabs;
