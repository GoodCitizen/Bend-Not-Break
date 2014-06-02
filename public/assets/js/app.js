(function ($) {
  // Mobile nav accordion
  $('.mobile-nav .nav-title').on('click',function(){
    if (Modernizr.mq('(max-width: 480px)')) {
      $(this).toggleClass('active');
      $(this).next('.nav-list').toggleClass('active');
      return false;
    }
  });
}(jQuery));