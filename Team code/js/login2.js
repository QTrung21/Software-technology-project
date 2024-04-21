document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".flip-card__form:first-of-type");
    const signupForm = document.querySelector(".flip-card__form:last-of-type");

    // Đăng ký người dùng
    function registerUser(name, email, password) {
        // Kiểm tra xem người dùng đã tồn tại chưa
        if (localStorage.getItem(email)) {
            alert("Người dùng đã tồn tại!");
            return;
        }

        // Lưu thông tin người dùng vào Local Storage
        localStorage.setItem(email, JSON.stringify({ name: name, password: password }));
        alert("Đăng ký thành công!");
    }

    // Đăng nhập người dùng
    function loginUser(email, password) {
        // Kiểm tra xem người dùng có tồn tại không
        const userData = localStorage.getItem(email);
        if (!userData) {
            alert("Tài khoản không tồn tại!");
            return;
        }

        // Kiểm tra mật khẩu
        const { name, password: storedPassword } = JSON.parse(userData);
        if (password !== storedPassword) {
            alert("Sai mật khẩu!");
            return;
        }

        alert("Đăng nhập thành công, Chào mừng " + name + "!");
        // Chuyển hướng sang trang mới sau khi đăng nhập thành công
        window.location.href = "./Team code/home.html"; // Thay "dashboard.html" bằng đường dẫn của trang bạn muốn chuyển hướng đến
    }

    // Đăng ký sự kiện cho form đăng nhập
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = loginForm.querySelector("input[name='email']").value;
        const password = loginForm.querySelector("input[name='password']").value;
        loginUser(email, password);
    });

    // Đăng ký sự kiện cho form đăng ký
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = signupForm.querySelector("#name").value;
        const email = signupForm.querySelector("input[name='email']").value;
        const password = signupForm.querySelector("input[name='password']").value;
        registerUser(name, email, password);
    });
});
