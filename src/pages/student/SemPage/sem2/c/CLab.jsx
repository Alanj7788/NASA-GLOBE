import React, { useState } from 'react';

const CLab = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'You’ve landed on a moon where the atmosphere contains unusual particles. Which GLOBE protocol could help you monitor the composition of these particles?',
      answerOptions: [
        { answerText: 'Aerosol Measurement', isCorrect: true },
        { answerText: 'pH Level', isCorrect: false },
        { answerText: 'Soil Moisture', isCorrect: false },
        { answerText: 'Cloud Observation', isCorrect: false },
      ],
    },
    {
      questionText: 'You observe strange plant-like organisms on this moon that change color over time. Which GLOBE protocol would help you track these changes?',
      answerOptions: [
        { answerText: 'Tree Height', isCorrect: false },
        { answerText: 'Phenology', isCorrect: true },
        { answerText: 'Precipitation', isCorrect: false },
        { answerText: 'Water Clarity', isCorrect: false },
      ],
    },
    {
      questionText: 'The moon’s soil has a dusty texture. You want to test if it can support plant life. Which GLOBE soil protocol should you use first?',
      answerOptions: [
        { answerText: 'Soil Structure', isCorrect: true },
        { answerText: 'Water Temperature', isCorrect: false },
        { answerText: 'Cloud Cover', isCorrect: false },
        { answerText: 'Leaf Growth', isCorrect: false },
      ],
    },
    
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {showScore ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
          <p className="text-lg">You scored {score} out of {questions.length}</p>
        </div>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md">
            <div className="question-count text-center mb-2">
              <span className="font-semibold">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="question-text text-lg mb-4">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section flex flex-col space-y-2 w-full max-w-md">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CLab;
