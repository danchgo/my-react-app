const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/submit-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const csvFilePath = path.join(__dirname, 'emails.csv');
  console.log('Received email:', email);
  console.log('CSV file path:', csvFilePath);

  // Read existing emails from CSV file
  const existingEmails = fs.readFileSync(csvFilePath, 'utf-8').split('\n');

  if (existingEmails.includes(email)) {
    return res.status(400).json({ error: 'Email already exists.' });
  }

  try {
    fs.appendFileSync(csvFilePath, `${email}\n`);
    console.log('Email added to CSV:', email);
    res.status(201).json({ message: 'Email added to CSV.' });
  } catch (error) {
    console.error('Error writing email to CSV:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
