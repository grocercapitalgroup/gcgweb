function smoothScroll(target) {
  $('body,html').animate(
    { 'scrollTop': target.offset().top },
    600
  );
}

function submitLogin(form) {
  var data = $(form).serializeArray();
  var message = $(form).find("#msg");
  $.ajax({
    type: "POST",
    url: form.action,
    data: data,
    success: function (response) {
      console.log(response);
      if (response == true) {
        message.html("Login Succeeded");
        location.reload();
      }
      else {
        message.html("Login Failed").show();
      }
    },
    dataType: "JSON"
  });
  return false;
}

$(function () {
  //login popover
  $('#login').popover({
    placement: 'bottom',
    container: 'body',
    trigger: 'manual',
    html: true,
    content: function () {
      return $('#login_page').html();
    }
  }).on("mouseenter", function () {
    $(this).popover("show");
  });

  $('html').on("click", function (e) {
    //console.log(e.target)
    if (typeof $(e.target).data('original-title') == 'undefined' &&
      !$(e.target).parents().is('.popover.in')) {
      $('#login').each(function () {
        $(this).popover('hide');
      });
    }
  });

  var ck = document.cookie;
  console.log(ck);
});

