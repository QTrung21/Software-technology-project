// app.js hoặc server.js

const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const app = express();
const port = 3004;

app.use(express.static('public')); // Đặt thư mục chứa tệp tĩnh (ví dụ: css, js, hình ảnh)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Kết nối đến cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'quytrung21',
  database: 'my_database',
});

connection.connect(err => {
  if (err) {
    console.error('Lỗi kết nối:', err);
    return;
  }
  console.log('Kết nối đến MySQL thành công!');
});

//Câu lệnh SQL
const sqlQuery = `
    CREATE DATABASE IF NOT EXISTS my_database;
    USE my_database;
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
`;

// Đăng ký tài khoản
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Lỗi băm mật khẩu:', err);
      res.status(500).send('Đã xảy ra lỗi');
      return;
    }

    connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hash], (err, result) => {
      if (err) {
        console.error('Lỗi thêm người dùng:', err);
        res.status(500).send('Đã xảy ra lỗi');
        return;
      }
      console.log('Đã đăng ký thành công!');
      res.status(200).send('Đăng ký thành công!');
    });
  });
});

// Đăng nhập
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Lỗi truy vấn:', err);
      res.status(500).send('Đã xảy ra lỗi');
      return;
    }

    if (results.length === 0) {
      res.status(401).send('Email không tồn tại');
      return;
    }

    bcrypt.compare(password, results[0].password, (err, result) => {
      if (err) {
        console.error('Lỗi so sánh mật khẩu:', err);
        res.status(500).send('Đã xảy ra lỗi');
        return;
      }

      if (result) {
        res.status(200).send('Đăng nhập thành công!');
      } else {
        res.status(401).send('Mật khẩu không đúng');
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
