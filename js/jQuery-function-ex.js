(function ($) {
  $.fn.invisible = function () {
    return this.each(() => {
      $(this).css('visibility', 'hidden');
    });
  };
  $.fn.visible = function () {
    return this.each(() => {
      $(this).css('visibility', 'visible');
    });
  };
}(jQuery));
