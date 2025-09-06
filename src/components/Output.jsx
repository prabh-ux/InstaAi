import React, { useState } from "react";
import { Copy, Check } from "lucide-react"; // icons

const Output = ({ caption=[], hashtags=[], name=[], bio=[], activeTab }) => {


  

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);

      // Reset after 1.5 sec
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  let demoOutputs = [];
  if (activeTab === "captions") demoOutputs = caption;
  else if (activeTab === "hashtags") demoOutputs = hashtags;
  else if (activeTab === "bio") demoOutputs = bio;
  else if (activeTab === "name") demoOutputs = name;

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-300">
        Generated Output
      </h2>

      <div className="space-y-3">
        {demoOutputs.length>0?demoOutputs.map((text, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 rounded-xl shadow-md bg-gray-700 border hover:shadow-lg transition"
          >
            <p className="text-gray-200">{text}</p>

            <button
              onClick={() => handleCopy(text, index)}
              className="ml-3 p-2 rounded-lg bg-gray-600 hover:bg-gray-500 transition"
            >
              {copiedIndex === index ? (
                <Check className="w-5 h-5 text-green-400 animate-bounce" />
              ) : (
                <Copy className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        )):<div
            
            className="flex justify-center items-center p-3 rounded-xl shadow-md bg-gray-700 border hover:shadow-lg transition"
          >
            <p className="text-gray-200">Your Generated result will be shown here</p>

          
          </div>}
      </div>
    </div>
  );
};

export default Output;
