import React from "react";

const Captions = ({ captionTopic, setCaptionTopic, handleGenerate, loading }) => {
  const inputStyle =
    "w-full p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all placeholder-gray-400";

  return (
    <section
      className="space-y-6 bg-gray-900 p-6 rounded-2xl shadow-2xl"
      aria-label="AI Instagram Caption Generator Tool for Social Media Growth"
    >
      {/* Input and Button at the Top for Immediate Access */}
      <div className="space-y-4">
        <label htmlFor="caption-topic" className="block text-gray-300 font-medium">
          Caption Topic
        </label>
        <input
          id="caption-topic"
          type="text"
          placeholder="Enter a topic: Travel, Fitness, Food, Fashion, Tech..."
          value={captionTopic}
          onChange={(e) => setCaptionTopic(e.target.value)}
          className={inputStyle}
          aria-label="Enter topic to generate Instagram captions for posts or reels"
        />
        <button
          onClick={() => handleGenerate("captions")}
          disabled={loading || !captionTopic}
          className={`w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${loading || !captionTopic ? "opacity-50 cursor-not-allowed" : ""
            }`}
          aria-busy={loading ? "true" : "false"}
          aria-disabled={loading || !captionTopic ? "true" : "false"}
        >
          {loading ? "Generating Captions..." : "Generate Viral Captions"}
        </button>
      </div>

    



    </section>
  );
};

export default Captions;
