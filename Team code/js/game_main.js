$(document).ready(function() {
  // Initialize the Owl Carousel
  var owl = $('.custom-carousel').owlCarousel({
      autoWidth: true,
      loop: true,
      dots: false,
      nav: true, 
      margin: 10
  });

  // Event listener for custom previous button
  $('.owl-prev').click(function() {
      owl.trigger('prev.owl.carousel');
  });

  // Event listener for custom next button
  $('.owl-next').click(function() {
      owl.trigger('next.owl.carousel');
  });

  // Add double click event to open links in a new tab
  $('.custom-carousel .item').dblclick(function() {
      var link = $(this).data('link');
      if (link) {
          window.open(link, '_blank');
      }
  });

  // Add click event to toggle 'active' class
  $(".custom-carousel .item").click(function() {
      $(".custom-carousel .item").not(this).removeClass("active");
      $(this).toggleClass("active");
  });
});