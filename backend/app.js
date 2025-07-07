const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Kiểm tra API có chạy không
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Backend API đang hoạt động! 🚀' });
});

module.exports = app;
