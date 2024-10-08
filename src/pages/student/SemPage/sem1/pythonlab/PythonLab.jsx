import React, { useState } from 'react';

const PythonLab = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'You’ve just landed on Mars and need to measure surface temperature. Which GLOBE protocol would you use to ensure consistency in your data collection?',
      answerOptions: [
        { answerText: 'Water Temperature', isCorrect: false },
        { answerText: 'Surface Temperature', isCorrect: true },
        { answerText: 'Soil Moisture', isCorrect: false },
        { answerText: 'pH Level', isCorrect: false },
      ],
    },
    {
      questionText: 'To ensure future crops can grow on Mars, you need to measure soil acidity. Which GLOBE protocol helps you measure this?',
      answerOptions: [
        { answerText: 'pH Measurement', isCorrect: true },
        { answerText: 'Tree Height', isCorrect: false },
        { answerText: 'Aerosol Measurement', isCorrect: false },
        { answerText: 'Turbidity', isCorrect: false },
      ],
    },
    {
      questionText: 'Mars has occasional dust storms that obscure the view of the planet\'s surface. Which GLOBE atmospheric protocol could help you monitor these storms?',
      answerOptions: [
        { answerText: 'Precipitation', isCorrect: false },
        { answerText: 'Cloud Observation', isCorrect: false },
        { answerText: 'Aerosol Measurement', isCorrect: true },
        { answerText: 'Water Clarity', isCorrect: false },
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

export default PythonLab;
