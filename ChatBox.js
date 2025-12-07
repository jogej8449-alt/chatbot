import React, { useState } from "react";
import api from "./api";

function ChatBox() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return;

    const reply = await api.ask(question);
    setAnswer(reply);
  };

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>AI Chatbot</h2>

      <input
        type="text"
        placeholder="Ask something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <button
        onClick={handleAsk}
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Ask
      </button>

      {answer && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f0f0f0",
            borderRadius: "5px"
          }}
        >
          <strong>Answer:</strong> {answer}
        </div>
      )}
    </div>
  );
}

export default ChatBox;
