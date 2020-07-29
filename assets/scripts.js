$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


function generate_toc() {
  var navSelector = "#toc";
  var $myNav = $(navSelector);
  $("body").css({"position":"relative"});

  Toc.init({
      $nav : $myNav,
      $scope: $("h2")
  });

  $("body").scrollspy({
    target: navSelector
  });

  $('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
  })
}

var _entity_map = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escape_html (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return _entity_map[s];
  });
}
