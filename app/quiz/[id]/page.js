'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import QuizHeader from '@/components/quiz-header';
import QuizQuestion from '@/components/quiz-question';
import QuizResult from '@/components/quiz-result';
import QuizLoader from '@/components/quiz-loader';

const QuizPage = () => {
  const { id } = useParams();
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const response = await fetch(`/api/quiz/${id}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch quiz: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate the data structure
        if (!data || !Array.isArray(data.questions)) {
          console.error('Invalid data format:', data);
          throw new Error('Invalid quiz data format');
        }
        
        setQuizData(data);
        // Initialize answers array with the correct length
        setAnswers(new Array(data.questions.length).fill(null));
      } catch (error) {
        console.error('Failed to fetch quiz:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleAnswer = (answer) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = answer;
      return newAnswers;
    });
    
    // Move to the next question
    if (currentQuestionIndex < (quizData?.questions?.length || 0) - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  if (loading) return <QuizLoader />;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!quizData) return <div className="p-6 text-red-600">Quiz not found.</div>;

  const isFinished = currentQuestionIndex >= quizData.questions.length - 1 && answers[answers.length - 1] !== null;

  return (
    <div className="min-h-screen p-6">
      <QuizHeader title={quizData.title || 'Quiz'} />
      
      {!isFinished ? (
        <QuizQuestion
          question={quizData.questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          questionIndex={currentQuestionIndex}
          totalQuestions={quizData.questions.length}
        />
      ) : (
        <QuizResult questions={quizData.questions} answers={answers} />
      )}
    </div>
  );
};

export default QuizPage;