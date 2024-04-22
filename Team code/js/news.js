// Chờ web load đầy đủ
document.addEventListener("DOMContentLoaded", function() {
  // Lấy tham chiếu đến nút "Xem Thêm" và phần tử chứa tin tức ẩn
  const btnXemThem = document.getElementById("btnXemThem");
  const tinTucHidden = document.querySelector(".tin-tuc.hidden");

  // Gắn sự kiện click vào nút "Xem Thêm"
  btnXemThem.addEventListener("click", function() {
    // Hiển thị phần tử chứa tin tức ẩn và ẩn nút "Xem Thêm"
      tinTucHidden.classList.remove("hidden");
    btnXemThem.style.display = "none";
  });
});
// Khi cuộn xuống 20px từ đỉnh của tài liệu, hiển thị nút
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Nếu vị trí cuộn lớn hơn 20px từ đỉnh của tài liệu, hiển thị nút "Cuộn Lên Đầu Trang"
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollBtn").style.display = "block";
  } else {
      // Ngược lại, ẩn nút "Cuộn Lên Đầu Trang"
      document.getElementById("scrollBtn").style.display = "none";
  }
}

// Nút cuộn đầu trang
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Cuộn lên mềm mại
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

 