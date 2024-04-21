// login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Gửi yêu cầu đăng nhập đến máy chủ và xử lý kết quả
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Đăng nhập thất bại');
        })
        .then(data => {
            alert(data); // Hiển thị thông báo thành công
            // Chuyển hướng sau khi đăng nhập thành công
            window.location.href = '/dashboard';
        })
        .catch(error => {
            alert(error.message); // Hiển thị thông báo lỗi
        });
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Gửi yêu cầu đăng ký đến máy chủ và xử lý kết quả
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Đăng ký thất bại');
        })
        .then(data => {
            alert(data); // Hiển thị thông báo thành công
            // Chuyển hướng sau khi đăng ký thành công
            window.location.href = 'home.html';
        })
        .catch(error => {
            alert(error.message); // Hiển thị thông báo lỗi
        });
    });
});
