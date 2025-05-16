import React from 'react';

const QuizQuestion = ({ question, onAnswer, questionIndex, totalQuestions }) => {
  if (!question || !question.options) {
    return <div className="p-4 border rounded-lg shadow-md text-red-600">
      Invalid question data
    </div>;
  }

  const handleOptionSelect = (option) => {
    onAnswer(option);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="mb-4 text-sm text-gray-500">
        Question {questionIndex + 1} of {totalQuestions}
      </div>
      
      <h2 className="text-xl font-bold mb-6">{question.question}</h2>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            className="w-full p-4 text-left border rounded-md hover:bg-blue-50 transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;