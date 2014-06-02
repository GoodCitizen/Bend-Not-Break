(function ($) {
  // Mobile nav accordion
  $('.mobile-nav .nav-title').on('click',function(){
    var $this = $(this),
        $navList = $this.next('.nav-list');

    // Close any other open .nav-lists
    $('.mobile-nav .nav-title').not($this).removeClass('active');
    $('.nav-list').not($navList).removeClass('active');

    // Toggle the active class on .nav-titles and .nav-lists
    if (Modernizr.mq('(max-width: 480px)')) {
      $this.toggleClass('active');
      $navList.toggleClass('active');
    }

    return false;
  });
}(jQuery));