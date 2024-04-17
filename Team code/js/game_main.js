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
    navText: ['<span class="owl-prev"><i class="fa-solid fa-less-than"></i></span>', '<span class="owl-next"><i class="fa-solid fa-greater-than"></i></span>']
  });

  $(".custom-carousel .item").click(function() {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});