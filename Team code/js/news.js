document.addEventListener("DOMContentLoaded", function() {
  const btnXemThem = document.getElementById("btnXemThem");
  const tinTucHidden = document.querySelector(".tin-tuc.hidden");

  btnXemThem.addEventListener("click", function() {
    tinTucHidden.classList.remove("hidden");
    btnXemThem.style.display = "none";
  });
});
// Khi cuộn xuống 20px từ đỉnh của tài liệu, hiển thị nút
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollBtn").style.display = "block";
  } else {
      document.getElementById("scrollBtn").style.display = "none";
  }
}

// Nút cuộn đầu trang
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

 