import React, { useState } from "react";

const AIFeedback = ({ question, answer }) => {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const getFeedback = async () => {
    if (!question || !answer) {
      alert("Please generate a question and answer first!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_HF_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [question, answer] })
      });
      const result = await response.json();
      setFeedback(result.data[0]);
    } catch (err) {
      console.error(err);
      setFeedback("⚠️ Network or API error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={getFeedback}>🧠 Get AI Feedback</button>
      {loading ? <p>Loading feedback...</p> : feedback && <p>{feedback}</p>}
    </div>
  );
};

export default AIFeedback;
