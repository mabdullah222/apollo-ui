import React from 'react';

const QuizLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg">Loading quiz...</p>
    </div>
  );
};

export default QuizLoader;