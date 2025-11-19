import React, { useState } from "react";
import VoiceRecorder from "./components/VoiceRecorder";
import AIQuestion from "./components/AIQuestion";
import AIFeedback from "./components/AIFeedback";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1>🤖 Smart Interview Mentor</h1>

      {/* Question Generator */}
      <AIQuestion setQuestion={setQuestion} />

      {question && (
        <>
          <p>🎯 {question}</p>

          {/* Voice Recorder */}
          <VoiceRecorder setAnswer={setAnswer} />

          <p>
            Your Answer: "{answer || "Start speaking above..."}"
          </p>

          {/* AI Feedback */}
          <AIFeedback question={question} answer={answer} />
        </>
      )}

      <footer style={{ marginTop: "50px", textAlign: "center" }}>
        Built by Shreshtha Jain
      </footer>
    </div>
  );
}

export default App;
