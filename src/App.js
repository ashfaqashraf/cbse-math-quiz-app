import React, { useState } from 'react';
import questionsPool from './questions';

function getRandomQuestions() {
  // Pick 5 random questions from pool
  let shuffled = [...questionsPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
}

const initialQuestions = getRandomQuestions();

function App() {
  const [questions] = useState(initialQuestions);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce((acc, q, idx) => {
    const userAns = answers[idx];
    if (!submitted) return acc;
    if (q.type === 'mcq' && userAns === q.answer) return acc + 1;
    if (q.type === 'desc' && userAns && userAns.length > 3) return acc + 0.5;
    return acc;
  }, 0);

  function handleChange(idx, value) {
    setAnswers({ ...answers, [idx]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ margin: '2rem', fontFamily: 'sans-serif' }}>
      <h1>CBSE Math Daily Quiz (Class 4)</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q, idx) => (
          <div key={idx} style={{ marginBottom: '1.5rem' }}>
            <div><b>Q{idx + 1}: {q.question}</b></div>
            {q.type === 'mcq' ? (
              q.options.map((opt, oIdx) => (
                <label key={oIdx}>
                  <input
                    type="radio"
                    name={`q${idx}`}
                    value={opt}
                    disabled={submitted}
                    checked={answers[idx] === opt}
                    onChange={() => handleChange(idx, opt)}
                  />
                  {` ${opt}`}
                </label>
              ))
            ) : (
              <textarea
                rows={2} cols={30}
                placeholder="Your answer..."
                disabled={submitted}
                value={answers[idx] || ''}
                onChange={e => handleChange(idx, e.target.value)}
              />
            )}
          </div>
        ))}
        {!submitted && <button type="submit">Submit Answers</button>}
      </form>
      {submitted && (
        <div>
          <h2>Your Score: {score} / 5 {score >= 4 ? '⭐' : ''}</h2>
          <p>{score >= 4 ? 'Great job! You earned a star!' : 'Keep practicing daily for more stars.'}</p>
        </div>
      )}
    </div>
  );
}

export default App;
