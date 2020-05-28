(function ($) {
  $(function() {

    // Slick slider for prev/next thumbnails images
    $('.slideshow__slides').slick({
      dots: true,
      slidesToShow: 1,
      autoplay: false
    });
    setTimeout(function() {
      $('.slick-prev').prepend('<div class="prev-slick-arrow arrow-icon"><span>&#60;</span></div><div class="prev-slick-img slick-thumb-nav"><img src="/prev.jpg" class="img-responsive"></div>');
      $('.slick-next').append('<div class="next-slick-arrow arrow-icon"><span>&#62;</span></div><div class="next-slick-img slick-thumb-nav"><img src="/next.jpg" class="img-responsive"></div>');
      get_prev_slick_img();
      get_next_slick_img();
    }, 500);

    $('.slideshow__slides').on('click', '.slick-prev', function() {
      get_prev_slick_img();
    });
    $('.slideshow__slides').on('click', '.slick-next', function() {
      get_next_slick_img();
    });
    $('.slideshow__slides').on('swipe', function(event, slick, direction) {
      if (direction == 'left') {
        get_prev_slick_img();
      }
      else {
        get_next_slick_img();
      }
    });
    $('.slick-dots').on('click', 'li button', function() {
      var li_no = $(this).parent('li').index();
      if ($(this).parent('li').index() > li_no) {
        get_prev_slick_img()
      }
      else {
        get_next_slick_img()
      }
    });
    function get_prev_slick_img() {
      // For prev img
      var prev_slick_img = $('.slick-current').prev('.slider-image').find('img').attr('src');
      $('.prev-slick-img img').attr('src', prev_slick_img);
      $('.prev-slick-img').css('background-image', 'url(' + prev_slick_img + ')');
      // For next img
      var prev_next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
      $('.next-slick-img img').attr('src', prev_next_slick_img);
      $('.next-slick-img').css('background-image', 'url(' + prev_next_slick_img + ')');
    }
    function get_next_slick_img() {
      // For next img
      var next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
      $('.next-slick-img img').attr('src', next_slick_img);
      $('.next-slick-img').css('background-image', 'url(' + next_slick_img + ')');
      // For prev img
      var next_prev_slick_img = $('.slick-current').prev('.slider-image').find('img').attr('src');
      $('.prev-slick-img img').attr('src', next_prev_slick_img);
      $('.prev-slick-img').css('background-image', 'url(' + next_prev_slick_img + ')');
    }
    // End
  })
})(jQuery);