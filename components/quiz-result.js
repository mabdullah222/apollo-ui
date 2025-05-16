import React from 'react';
import { useRouter } from 'next/navigation';

const QuizResult = ({ questions, answers, lectureId }) => {
  const router = useRouter();
  
  if (!questions || !answers || questions.length !== answers.length) {
    return <div className="p-4 border rounded-lg shadow-md text-red-600">
      Invalid quiz results data
    </div>;
  }

  // Calculate score
  const correctAnswers = questions.filter((question, index) => 
    question.answer === answers[index]
  ).length;
  
  const score = Math.round((correctAnswers / questions.length) * 100);

  const handleBackToVideo = () => {
    // Navigate back to the video page using the lecture ID
    router.push("/explore");
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Quiz Results</h2>
      
      <div className="mb-8 text-center">
        <div className="text-3xl font-bold mb-2">{score}%</div>
        <div className="text-lg">
          You got {correctAnswers} out of {questions.length} questions correct
        </div>
      </div>
      
      <div className="mb-8 flex justify-center">
        <button
          onClick={handleBackToVideo}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Explore More Courses
        </button>
      </div>
      
      <div className="space-y-6">
        {questions.map((question, index) => {
          const isCorrect = question.answer === answers[index];
          
          return (
            <div 
              key={index} 
              className={`p-4 border rounded-lg ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
            >
              <div className="text-lg font-semibold mb-2">{question.question}</div>
              
              <div className="mb-2">
                <span className="font-medium">Your answer: </span>
                <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                  {answers[index]}
                </span>
              </div>
              
              {!isCorrect && (
                <div className="text-green-600">
                  <span className="font-medium">Correct answer: </span>
                  {question.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizResult;