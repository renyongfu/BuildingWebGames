import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import util from './util.m.js';

dotenv.config();
const app = express();
const port = process.env.PORT | 80;
const apiKey = process.env.OPENAI_API_KEY;
console.log(`apiKey=${apiKey}`);

const ipAddresses = util.getLocalIPs();
console.log('local IP addresses = ', JSON.stringify(ipAddresses));

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public', { index: 'flappyBird.html' }));

app.post('/ask', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Missing question parameter' });
  }

  console.log(`question: ${question}`);
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // or use "gpt-3.5-turbo" as needed
        messages: [{ role: "user", content: question }]
      })
    });

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error calling OpenAI API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
