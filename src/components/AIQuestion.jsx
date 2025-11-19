import React from "react";

const questions = [
  "Tell me about yourself.",
  "Where do you see yourself in 5 years?",
  "What are your strengths and weaknesses?",
  "Describe a time when you worked in a team.",
  "Why do you want this job?"
];

const AIQuestion = ({ setQuestion }) => {
  const generateQuestion = () => {
    const q = questions[Math.floor(Math.random() * questions.length)];
    setQuestion(q);
  };

  return (
    <button onClick={generateQuestion} style={{ marginBottom: "20px" }}>
      🤖 Generate Question
    </button>
  );
};

export default AIQuestion;
