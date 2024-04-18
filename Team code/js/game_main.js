$(document).ready(function () {
  var owl = $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true,
    dots: false,
    nav: true,
    margin: 10,
  });

  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".custom-carousel .item").dblclick(function () {
    var link = $(this).data("link");
    if (link) {
      window.open(link, "_blank");
    }
  });

  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not(this).removeClass("active");
    $(this).toggleClass("active");
  });
});
