import React from "react";

const Name = ({ nameTopic, setNameTopic, userName, setUserName, handleGenerate, loading }) => {
  const inputStyle =
    "w-full p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all placeholder-gray-400";

  return (
    <div className="space-y-4 bg-gray-900 p-6 rounded-2xl shadow-2xl">
      {/* Name Topic Input */}
      <div>
        <label className="block mb-1 text-gray-300 font-medium">
          Name Topic:
        </label>
        <input
          type="text"
          placeholder="Enter a topic or niche"
          value={nameTopic}
          onChange={(e) => setNameTopic(e.target.value)}
          className={inputStyle}
        />
      </div>

      {/* Optional User Name Input */}
      <div>
        <label className="block mb-1 text-gray-300 font-medium">
          Your Name (Optional):
        </label>
        <input
          type="text"
          placeholder="Enter your name (optional)"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={inputStyle}
        />
      </div>

      {/* Generate Button */}
      <button
        onClick={() => handleGenerate("name")}
        disabled={loading || !nameTopic}
        className={`w-full py-3 mt-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
          loading || !nameTopic ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Generating..." : "Generate Names"}
      </button>
    </div>
  );
};

export default Name;
