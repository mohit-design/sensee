$(function() {
  // Item Ranking JS
  $(".item-ranking-slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
	// SenSee Media JS
  $(".sensee-media-slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Buyers Steps JS
  $(".buyers-slider-home, .sellers-slider-home").slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // New Items JS
  $(".hides").fadeOut();
  $(".active").fadeIn();
  // Horizontal Tab JS
  $(".tabs-listing > li").click(function() {
    $(".tabs-listing > li").removeClass("active");
    $(this).addClass("active");
    //for each tab content box
    if($(this).attr("id") == "tab-one")
    {
      $("#tab-one-content-box").addClass("active").siblings().removeClass("active");
    }
    else if($(this).attr("id") == "tab-two")
    {
      $("#tab-two-content-box").addClass("active").siblings().removeClass("active");
    }
    else if($(this).attr("id") == "tab-three")
    {
      $("#tab-three-content-box").addClass("active").siblings().removeClass("active");
    }
  });
  $(".tabs-listing").on("click", "li", function() {
    var tabsId = $(this).attr("id");
    $(this).addClass("active").siblings().removeClass("active");
    $("#" + tabsId + "-content-box").fadeIn().siblings().fadeOut();
  });
  $(".tab-one-slider, .tab-two-slider, .tab-three-slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});