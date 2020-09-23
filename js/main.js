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