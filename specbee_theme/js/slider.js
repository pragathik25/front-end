(function ($, Drupal) {
    $(document).ready(function() {
      $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow:false
    });

    });
  })(jQuery, Drupal);
