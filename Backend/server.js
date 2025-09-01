const express = require("express");
const fs = require("fs");
const app = express();

// Parse JSON in post requests
app.use(express.json());

// Serve frontend
app.use(express.static("public"));

// Load verbs from JSON
const verbs = JSON.parse(fs.readFileSync("verbs.json", "utf-8"));

// Helper: shuffle array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Endpoint: get random question
app.get("/api/question", (req, res) => {
  const index = Math.floor(Math.random() * verbs.length);
  const correct = verbs[index];

  let options = [correct.en];
  while (options.length < 4) {
    let r = verbs[Math.floor(Math.random() * verbs.length)].en;
    if (!options.includes(r)) options.push(r);
  }

  res.json({
    id: index,
    lt: correct.lt,
    options: shuffle(options),
  });
});

// Endpoint: Check answers
app.post("/api/answer", (req, res) => {
  const { id, answer } = req.body;
  const correct = verbs[id].en;
  res.json({ correct: answer === correct });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);


