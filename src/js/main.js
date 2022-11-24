//// AOS ////
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


//// PROGRESS BAR (SKILL's) ////
$('.about').waypoint(function () {
  $('.skills-progress .skills-progress-bar').each(function () {
    $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });
}, {
  offset: '80%'
});


//// MOBILE MENU ////
$('.navbar-toggler').click(function () {
  $('body').css('overflow', 'hidden')
  if (!$(this).data('status')) {
    $('body').css('overflow', 'hidden')
    $(this).data('status', true);
  } else {
    $('body').css('overflow', '')
    $(this).data('status', false);
  }
})


//// MASONRY ////
$('.masonry').each(function () {
  var $module = $(this);
  var update = function () {
    $module.masonry('layout');
  };

  this.addEventListener('load', update, true);
  $module.masonry();
});