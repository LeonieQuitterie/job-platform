const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
dotenv.config();

// Tạo server
const server = http.createServer(app);

// Cấu hình socket.io (phần sau sẽ dùng)
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Lắng nghe sự kiện kết nối socket
io.on('connection', (socket) => {
  console.log('⚡ Socket kết nối:', socket.id);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
