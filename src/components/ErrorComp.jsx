import React from 'react';

const ErrorComp = () => {
  return (
   <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-md mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-2 text-center">Oops! Something went wrong</h1>
      <p className="text-gray-400 text-center mb-4 text-sm">
        There was an issue loading this section. Please try refreshing or check back later.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-all duration-300"
      >
        Refresh
      </button>
    </div>
  );
};

export default ErrorComp;
