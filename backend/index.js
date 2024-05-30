const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

// Thiết lập kết nối với cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin', // Thay your_username bằng tên người dùng MySQL của bạn
  password: '123123', // Thay your_password bằng mật khẩu của bạn
  database: 'learnpage' // Thay your_database bằng tên cơ sở dữ liệu của bạn
});

// Kết nối tới cơ sở dữ liệu
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

// Sử dụng body-parser middleware để phân tích dữ liệu JSON từ yêu cầu POST
app.use(bodyParser.json());

// Endpoint để xử lý yêu cầu đăng ký
app.post('/signup', (req, res) => {
  const { email, password, name, phone } = req.body;
  const INSERT_USER_QUERY = `INSERT INTO users (email, password, name, phone) VALUES (?, ?, ?, ?)`;
  connection.query(INSERT_USER_QUERY, [email, password, name, phone], (error, results) => {
    if (error) {
      console.error('Error inserting user: ' + error);
      res.status(500).send('Error inserting user');
    } else {
      console.log('User inserted successfully');
      // Bao gồm tiêu đề 'Access-Control-Allow-Origin' trong phản hồi
      res.header('Access-Control-Allow-Origin', '*'); // Điều này sẽ cho phép tất cả các nguồn gốc gửi yêu cầu đến máy chủ của bạn
      res.status(200).send('User inserted successfully');
    }
  });
});

// Khởi chạy server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
