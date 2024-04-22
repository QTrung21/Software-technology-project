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
// Các hàm ô tìm kiếm

function performSearch() {
  // Lấy giá trị nhập từ người dùng và chuyển thành chữ thường để so sánh không phân biệt hoa thường
  var input = document.getElementById("searchInput").value.toLowerCase();
  
  // Lấy tất cả các thẻ <a> trong các mục tin tức, giả định rằng mỗi <h2> nằm trong một thẻ <a>
  var newsItems = document.querySelectorAll(".news-item a");

  // Biến để kiểm tra xem có tìm thấy tin tức phù hợp không
  var found = false;

  // Duyệt qua từng mục tin tức
  newsItems.forEach(function(item) {
      // Lấy nội dung của thẻ <h2> và chuyển nó thành chữ thường
      var title = item.querySelector("h2").textContent.toLowerCase();
      
      // Kiểm tra xem tiêu đề có chứa từ khóa nhập vào không
      if (title.includes(input)) {
          // Nếu có, chuyển hướng người dùng đến trang chi tiết của tin tức
          window.location.href = item.href;
          found = true;
          // Kết thúc vòng lặp ngay lập tức sau khi tìm thấy kết quả đầu tiên phù hợp
          return false;
      }
  });

  // Nếu không tìm thấy kết quả nào phù hợp, hiển thị thông báo cho người dùng
  if (!found) {
      alert("Không tìm thấy tin tức phù hợp!");
  }

  // Trả về false để ngăn không cho form thực hiện hành động mặc định là tải lại trang
  return false;
}
