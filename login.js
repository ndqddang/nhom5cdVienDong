
// Xử lý đăng nhập
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Lấy thông tin từ localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // So sánh thông tin
    if (username === storedUsername && password === storedPassword) {
        alert('Đăng nhập thành công!');
        window.location.href = 'index.html'; // Chuyển hướng đến trang home
    } else {
        alert('Tên người dùng hoặc mật khẩu không đúng. Vui lòng thử lại.');
    }
});
