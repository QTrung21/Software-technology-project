$(document).ready(function() {
  $('.custom-carousel .item').dblclick(function() {
    var link = $(this).data('link');
    if (link) {
      window.open(link, '_blank');
    }
  });

  $('.custom-carousel').owlCarousel({
    autoWidth: true,
    loop: true,
    dots: false,
    nav: true,
    navText: ['<span class="owl-prev"></span>', '<span class="owl-next"></span>']
  });

  $(".custom-carousel .item").click(function() {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});