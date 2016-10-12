$(document).ready(start);

function start() {
  $('.nav-item').hover(becomeActive, stopBeingActive);
  $('.slide-menu-item a').hover(becomeActive, stopBeingActive);
  $('#hamburger-btn').click(slideMenutoggle);
}

function becomeActive() {
  $(this).addClass('active');
}

function stopBeingActive() {
  $(this).removeClass('active');
}

function slideMenutoggle() {
  $('.slide-menu').toggleClass('open');
  $('#hamburger-btn').toggleClass('open');
}
