document.addEventListener("DOMContentLoaded", function() {
    const btnXemThem = document.getElementById("btnXemThem");
    const tinTucHidden = document.querySelector(".tin-tuc.hidden");
  
    btnXemThem.addEventListener("click", function() {
      tinTucHidden.classList.remove("hidden");
      btnXemThem.style.display = "none";
    });
  });
  