import React, { useState } from 'react';

const OsLab = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "As part of the early stages of terraforming a new planet, you plant Earth-like vegetation. Which GLOBE protocol will help you track the health of the plants over time?",
      answerOptions: [
        { answerText: 'A) pH Level', isCorrect: false },
        { answerText: 'B) Tree Height', isCorrect: false },
        { answerText: 'C) Soil Moisture', isCorrect: false },
        { answerText: 'D) Phenology', isCorrect: true },
      ],
    },
    {
      questionText: "You’ve introduced water to the planet and need to measure its quality. Which GLOBE protocol will help you assess water clarity in the planet’s new lakes?",
      answerOptions: [
        { answerText: 'A) pH Measurement', isCorrect: false },
        { answerText: 'B) Water Temperature', isCorrect: false },
        { answerText: 'C) Turbidity', isCorrect: true },
        { answerText: 'D) Surface Temperature', isCorrect: false },
      ],
    },
    {
      questionText: "To understand how well the new atmosphere is forming on the planet, you decide to monitor its composition. Which GLOBE protocol could be adapted to help track atmospheric particles?",
      answerOptions: [
        { answerText: 'A) Aerosol Measurement', isCorrect: true },
        { answerText: 'B) Soil Temperature', isCorrect: false },
        { answerText: 'C) Tree Height', isCorrect: false },
        { answerText: 'D) Water Temperature', isCorrect: false },
      ],
    },
    // Add more questions as needed
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

export default OsLab;
