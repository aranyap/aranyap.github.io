$(document).ready(start);

function start() {
  $('.nav-item').hover(becomeActive, stopBeingActive);
  $('.slide-menu-item a').hover(becomeActive, stopBeingActive);
  $('#hamburger-btn').click(slideMenutoggle);
  $('#form').submit(validate);
  $('#email').focus(runFirstNameValidation);
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

function validate(e) {
  if(validateEmail($('#email').val())) {
    // Valid email
  } else {
    // Invalid email
  }
	e.preventDefault();
  alert('working');
}

// function runFirstNameValidation() {
// 	if(firstNameValid()) {
// 		firstNameClearError();
// 	}
// }

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//
// function firstNameError() {
// 	$('#firstName').addClass('error');
// 	$('#firstName').siblings('.error-msg').show();
// }
//
// function firstNameError() {
// 	$('#firstName').removeClass('error');
// 	// $('#firstName').siblings('.error-msg').hide();
// }
//
//
// function firstNameValid() {
// 	var firstName = $('#firstName').val();
// 	return firstName.length > 0
// }
//
// function lastNameValid() {
// 	var lastName = $('#lastName').val();
// 	return lastName.length > 0
// }
