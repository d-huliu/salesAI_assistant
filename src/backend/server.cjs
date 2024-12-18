const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// GET handler for root
app.get('/', (req, res) => {
  res.send('Server is running! Use the /gpt endpoint to interact with GPT-4.');
});

// GPT-4 API POST endpoint
app.post('/gpt', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    res.json({ message: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error calling GPT-4 API:', error.response?.data || error.message);
    res.status(500).json({ error: 'An error occurred while calling the GPT-4 API' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

