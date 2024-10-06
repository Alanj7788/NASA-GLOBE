import React, { useState } from 'react';

const DsLab = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "After a solar flare, Earth's surface temperature spikes. Which GLOBE protocol can help you monitor the changes in different regions?",
      answerOptions: [
        { answerText: 'A) Cloud Observation', isCorrect: false },
        { answerText: 'B) Surface Temperature', isCorrect: true },
        { answerText: 'C) Precipitation', isCorrect: false },
        { answerText: 'D) pH Level', isCorrect: false },
      ],
    },
    {
      questionText: 'The solar flare introduces new particles into the atmosphere. Which GLOBE protocol would you use to track their movement?',
      answerOptions: [
        { answerText: 'A) pH Measurement', isCorrect: false },
        { answerText: 'B) Tree Height', isCorrect: false },
        { answerText: 'C) Aerosol Measurement', isCorrect: true },
        { answerText: 'D) Turbidity', isCorrect: false },
      ],
    },
    {
      questionText: "Some regions experience a change in cloud patterns after the solar flare. Which GLOBE protocol would help you understand these changes?",
      answerOptions: [
        { answerText: 'A) Precipitation', isCorrect: false },
        { answerText: 'B) Cloud Observation', isCorrect: true },
        { answerText: 'C) Aerosol Measurement', isCorrect: false },
        { answerText: 'D) Water Clarity', isCorrect: false },
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

export default DsLab;
