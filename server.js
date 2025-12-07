// server.js
const express = require("express");
const cors = require("cors");

const app = express();

// --- Middleware ---
app.use(cors());          // Allow cross-origin requests
app.use(express.json());  // Parse JSON requests

// --- Request logging (optional but helpful) ---
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// --- Chatbot API ---
app.post("/ask", (req, res) => {
  const question = req.body.question || "";
  // Replace this with your AI logic later
  const answer = `You asked: ${question}`;
  res.json({ answer });
});
app.get('/ask', (req, res) => {
    const question = req.query.question;
    if (!question) return res.status(400).json({ error: "Provide a question" });
    res.json({ answer: `You asked: ${question}` });
});



// --- 404 Handler for undefined routes ---
app.all("/", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error("❌ Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// --- Start server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});

