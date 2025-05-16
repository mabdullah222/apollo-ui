import React from 'react';

const QuizHeader = ({ title }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
    </div>
  );
};

export default QuizHeader;