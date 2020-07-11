(function($){

  $.fn.heroFade = function() {

    var self = this;
    var windowHeight = $(window)[0].innerHeight;
    var windowScrollTop = $(window).scrollTop();
    var heroFadeFunction = function(){

      return self.each(function() {
        if (windowScrollTop <= windowHeight) {
          var scrollPercent = windowScrollTop/windowHeight,
              scrollTransform = scrollPercent * 150;
          self.find('#hero-mask').css({
            opacity: scrollPercent
          });
          self.find('#title-fade').css({
           'transform': 'translate(0, -' + scrollTransform + '%)',
            opacity: 1 - scrollPercent
          });
        }
      });
    }

    $(window).on('scroll', function() {
      windowHeight = $(window)[0].innerHeight;
      windowScrollTop = $(window).scrollTop();
      heroFadeFunction();
    });

    heroFadeFunction();
    return self;
  }

})(jQuery);
