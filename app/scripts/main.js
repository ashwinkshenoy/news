$(document).ready(function(){
  $('.news-slider').slick();

  // Search
  $('#search-icon').bind('click', function() {
    $('.search').show();
  });

  $('#search-close').bind('click', function() {
    $('.search').hide();
  });
  // Search End

  // Menu
  $('#menuOpen').bind('click', function() {
    $('#menuBar').addClass('menu-open');
    $('#menuOverlay').show();
  });

  $('#menuClose').bind('click', function() {
    $('#menuBar').removeClass('menu-open');
    $('#menuOverlay').hide();
  });

  $('#menuOverlay').bind('click', function() {
    $('#menuBar').removeClass('menu-open');
    $('#menuOverlay').hide();
  });
  // Menu End
});
