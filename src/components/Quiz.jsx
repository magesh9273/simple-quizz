import { useState, useEffect } from 'react';
import { quizQuestions } from '../data';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) navigate('/');
  }, [navigate]);

  const handleAnswer = (answer) => {
    if (answer === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(answer);
    setTimeout(() => {
      setSelectedAnswer('');
      setTimeLeft(10);
      setCurrentQuestion((prev) => prev + 1);
    }, 500);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setSelectedAnswer('');
      setTimeLeft(10);
      setCurrentQuestion((prev) => prev + 1);
    } else if (currentQuestion < quizQuestions.length) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, currentQuestion]);

  useEffect(() => {
    if (currentQuestion >= quizQuestions.length) {
      setIsQuizCompleted(true);
    }
  }, [currentQuestion]);

  if (isQuizCompleted) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
        <div className="bg-white p-4 rounded text-center" style={{ maxWidth: '600px', width: '100%' }}>
          <h2 className="text-warning">Quizz Completed!!!</h2>
          <h5 className='mt-3'>Your score is {score}/{quizQuestions.length}</h5>
          <button className="btn btn-danger mt-4" onClick={() => window.location.reload()}>
            Restart Quizz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="bg-white p-4 rounded shadow" style={{ maxWidth: '700px', width: '100%' }}>
        <h4 className="text-center text-secondary">Question {currentQuestion + 1}</h4>
        <p className="text-center fw-semibold">
          {quizQuestions[currentQuestion]?.question}
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3 my-4">
          {quizQuestions[currentQuestion]?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="btn px-4 py-2 rounded-pill"
              style={{
                minWidth: '200px',
                backgroundColor: selectedAnswer === option ? '#343a40' : '#3b3b6d',
                color: 'white',
                border: 'none'
              }}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="text-center mt-3 text-muted">
          <span className="fw-semibold">Time left: </span>
          <span className="fw-bold">{timeLeft}s</span>
        </div>
      </div>
    </div>
  );
}

export default Quiz;