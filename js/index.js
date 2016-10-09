$(document).ready(start);

function start() {
  $('.nav-item').hover(becomeActive, stopBeingActive);
}

function becomeActive() {
  $(this).addClass('active');
}

function stopBeingActive() {
  $(this).removeClass('active');
}
//
// function start() {
//   $('.nav-button').hover(becomeActive, stopBeingActive);
//   $('.black-box').hover(becomeActive, stopBeingActive);
// }
//
// function becomeActive() {
//   $(this).addClass('active');
//   $(this).siblings().addClass('sodfj')
// }
//
// function stopBeingActive() {
//   $(this).removeClass('active');
// }
