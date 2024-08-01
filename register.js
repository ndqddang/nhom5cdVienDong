// Xử lý đăng ký
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Lưu thông tin vào localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Đăng ký thành công! Bạn có thể đăng nhập bây giờ.');
});