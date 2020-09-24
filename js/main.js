$(function() {
	// Mobile Menu JS
  $(".burger-menu").click(function() {
    $("body").addClass("active");
    $(".bg-blur").addClass("active");
    $(".fixed-navbar-menu-mobile").addClass("active");
    $(".menu-listing-close-mobile").addClass("active");
    $(".menu-listing-mobile").addClass("active");
  });
  $(".menu-listing-close-mobile").click(function() {
    $("body").removeClass("active");
    $(".bg-blur").removeClass("active");
    $(".fixed-navbar-menu-mobile").removeClass("active");
    $(".menu-listing-close-mobile").removeClass("active");
    $(".menu-listing-mobile").removeClass("active");
  });
});

$(function() {
  // Scroll To Top JS
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if($(this).scrollTop() > offset) {
      $(".scroll-to-top").addClass("active");
    } else {
      $(".scroll-to-top").removeClass("active");
    }
  });
  $(".scroll-to-top").click(function() {
    $('html,body').animate({scrollTop: 0},3500);
  });
});