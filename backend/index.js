require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const port = 3001;

app.use(cors());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

app.use(bodyParser.json());
app.post('/signup', async (req, res) => {
  const { email, password, name, phone } = req.body;
  console.log(`Signup request received: ${email}, ${name}, ${phone}`);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const INSERT_USER_QUERY = `INSERT INTO users (email, password, name, phone) VALUES (?, ?, ?, ?)`;
    connection.query(INSERT_USER_QUERY, [email, hashedPassword, name, phone], (error, results) => {
      if (error) {
        console.error('Error inserting user: ' + error);
        res.status(500).json({ success: false, message: 'Error inserting user' });
      } else {
        console.log('User inserted successfully');
        res.status(200).json({ success: true, message: 'User inserted successfully' });
      }
    });
  } catch (error) {
    console.error('Error hashing password: ' + error);
    res.status(500).json({ success: false, message: 'Error processing request' });
  }
});
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(`Login request received: ${email}`);

  const CHECK_USER_QUERY = `SELECT * FROM users WHERE email = ?`;

  connection.query(CHECK_USER_QUERY, [email], async (error, results) => {
    if (error) {
      console.error('Error checking user: ' + error);
      res.status(500).json({ success: false, message: 'Error checking user', error: error.message });
    } else if (results.length > 0) {
      const user = results[0];
      console.log(`User found: ${user.email}`);

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        console.log('Password match');
        const token = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Sending user data:', { name: user.name, email: user.email });
        res.status(200).json({
          success: true,
          message: 'User logged in successfully',
          token: token,
          user: { name: user.name, email: user.email } // Đảm bảo trường user được gửi về
        });
      } else {
        console.error('Invalid password');
        res.status(401).json({ success: false, message: 'Invalid password' });
      }
    } else {
      console.error('Email not found');
      res.status(401).json({ success: false, message: 'Email not found' });
    }
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
