$(document).ready(function() {
  var preloader_count = 0;
  var preloader_counter = setInterval(function() {
    if(preloader_count < 101) {
      $('.preloader_count').text(preloader_count + '%');
      $('.preloader_loader').css('width', preloader_count + '%');
      preloader_count++
    } else {
      clearInterval(preloader_counter)
    }
  }, 20) 
})

$(window).on('load', function() {
  $('.preloader').delay(350).fadeOut();
  $('body').delay(350).css('overflow', '')
});