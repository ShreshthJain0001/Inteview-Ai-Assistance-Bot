import React from "react";

const VoiceRecorder = ({ setAnswer }) => {
  const startSpeaking = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      setAnswer(event.results[0][0].transcript);
    };

    recognition.onerror = (event) => {
      alert("Error recording voice: " + event.error);
    };

    recognition.start();
  };

  return (
    <button onClick={startSpeaking} style={{ marginBottom: "20px" }}>
      🎤 Start Speaking
    </button>
  );
};

export default VoiceRecorder;
