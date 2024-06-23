const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const questions = {
    technology: [
        'What is your preferred code editor?',
        'Do you contribute to open source projects?',
    ],
    health: [
        'How many hours do you sleep?',
        'Do you have any dietary restrictions?',
    ],
    education: [
        'What was your favorite subject in school?',
        'Do you prefer online or in-person classes?',
    ],
};

app.get('/api/questions/:topic', (req, res) => {
    const topic = req.params.topic.toLowerCase();
    const response = questions[topic];
    if (response) {
        res.json({ questions: response });
    } else {
        res.status(404).json({ error: 'Topic not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
