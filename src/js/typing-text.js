if ($('.typed').length) {
  var typed_strings = $(".typed").data('typed-items');
  typed_strings = typed_strings.split(';')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

if ($('.typed-2').length) {
  var typed_strings = $(".typed-2").data('typed-items');
  typed_strings = typed_strings.split(';')
  new Typed('.typed-2', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}