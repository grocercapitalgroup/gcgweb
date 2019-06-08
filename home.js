$(function () {
  $('.scroll-down').click(function (event) {
      event.preventDefault();
      smoothScroll($(this.hash));
  })
});