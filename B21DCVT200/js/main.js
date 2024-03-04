document.addEventListener("DOMContentLoaded", function() {
  var image = document.querySelector('.image');

  window.addEventListener('scroll', function() {
      var boundingBox = image.getBoundingClientRect();
      if (
          boundingBox.top >= 0 &&
          boundingBox.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
          image.classList.add('active');
      } else {
          image.classList.remove('active');
      }
  });
});