window.addEventListener('DOMContentLoaded', function() {
    const gameList = document.getElementById('game_list');
    let currentIndex = 0;
    const items = gameList.querySelectorAll('.game_item');
    const totalItems = items.length;
    let animationID;
  
    function moveCarousel() {
      currentIndex++;
      if (currentIndex === totalItems) {
        currentIndex = 0;
      }
      const newPosition = -currentIndex * items[0].offsetWidth;
      animateCarousel(newPosition);
    }
  
    function animateCarousel(newPosition) {
      let currentPosition = parseFloat(getComputedStyle(gameList).getPropertyValue('transform').split(',')[4]);
      const distance = newPosition - currentPosition;
      const speed = distance / 15; // Tốc độ chuyển động
  
      function animate() {
        currentPosition += speed;
        if ((speed > 0 && currentPosition >= newPosition) || (speed < 0 && currentPosition <= newPosition)) {
          cancelAnimationFrame(animationID);
        } else {
          gameList.style.transform = `translateX(${currentPosition}px)`;
          animationID = requestAnimationFrame(animate);
        }
      }
  
      animate();
    }
  
    // Thiết lập tự động di chuyển
    setInterval(moveCarousel, 1500);
  
    // Thêm sự kiện click vào mỗi phần tử trong danh sách trò chơi
    items.forEach(item => {
      item.addEventListener('click', () => {
        alert(`Bạn đã chọn ${item.textContent}`);
      });
    });
  });
  