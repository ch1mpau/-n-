const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const message = document.getElementById('message');

let users = [
    {username: 'admin', password: 'password'},
    {username: 'user1', password: 'pass123' },
    {username: 'thinh', password: 'thinh' },
    {username: 'uoc', password: '12345' }
]

// Kiểm tra đơn giản (demo)
if (users.some(user => user.username === username && user.password === password)) {
    message.style.color = '#4caf50';
    message.textContent = 'Đăng nhập thành công!';
} else {
    message.style.color = '#d32f2f';
    message.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng!';
}