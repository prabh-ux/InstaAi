import React from "react";

const Hashtag = ({ hashtagText, setHashtagText, reelDescription, setReelDescription, handleGenerate, loading }) => {
  const inputStyle =
    "w-full p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all placeholder-gray-400";

  return (
    <div className="space-y-4 bg-gray-900 p-6 rounded-2xl shadow-2xl">
      {/* Main Topic */}
      <div>
        <label className="block mb-1 text-gray-300 font-medium">
          Hashtag Topic:
        </label>
        <input
          type="text"
          placeholder="Enter a topic for your hashtags"
          value={hashtagText}
          onChange={(e) => setHashtagText(e.target.value)}
          className={inputStyle}
        />
      </div>

      {/* Reel Description */}
      <div>
        <label className="block mb-1 text-gray-300 font-medium">
           Description:
        </label>
        <textarea
          placeholder="Describe more details about the content for better hashtags"
          value={reelDescription}
          onChange={(e) => setReelDescription(e.target.value)}
          className={inputStyle}
          rows={4}
        ></textarea>
      </div>

      {/* Generate Button */}
      <button
        onClick={() => handleGenerate("hashtags")}
        disabled={loading || !hashtagText}
        className={`w-full py-3 mt-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
          loading || !hashtagText ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Generating..." : "Generate Hashtags"}
      </button>
    </div>
  );
};

export default Hashtag;
