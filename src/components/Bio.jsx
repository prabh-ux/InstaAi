import React from "react";

const Bio = ({ bioText, setBioText, handleGenerate, loading }) => {
  const inputStyle =
    "w-full p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all placeholder-gray-400";

  return (
    <div className="space-y-4 bg-gray-900 p-6 rounded-2xl shadow-2xl">
      {/* Bio Input */}
      <div>
        <label className="block mb-1 text-gray-300 font-medium">
          Bio Topic:
        </label>
        <textarea
          placeholder="Describe yourself briefly for your Instagram bio"
          value={bioText}
          onChange={(e) => setBioText(e.target.value)}
          className={inputStyle}
          rows={4}
        ></textarea>
      </div>

      {/* Generate Button */}
      <button
        onClick={() => handleGenerate("bio")}
        disabled={loading || !bioText}
        className={`w-full py-3 mt-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
          loading || !bioText ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Generating..." : "Generate Bio"}
      </button>
    </div>
  );
};

export default Bio;
