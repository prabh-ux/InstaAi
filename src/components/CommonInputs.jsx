import React from "react";

const CommonInputs = ({ mood, setMood, location, setLocation }) => {
  const inputStyle =
    "w-full p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all placeholder-gray-400";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {/* Mood */}
      <div>
        <label htmlFor="mood-select" className="block mb-1 text-gray-300 font-medium">
          Mood:
        </label>
        <select
          id="mood-select"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className={inputStyle}
        >
          <option value="trendy">Trendy</option>
          <option value="funny">Funny</option>
          <option value="inspirational">Inspirational</option>
          <option value="romantic">Romantic</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location-input" className="block mb-1 text-gray-300 font-medium">
          Location (Optional):
        </label>
        <input
          id="location-input"
          type="text"
          placeholder="e.g., Paris"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={inputStyle}
        />
      </div>
    </div>
  );
};

export default CommonInputs;
