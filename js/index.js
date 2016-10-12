$(document).ready(start);

function start() {
  $('.nav-item').hover(becomeActive, stopBeingActive);
  $('.slide-menu-item a').hover(becomeActive, stopBeingActive);
  $('#hamburger-btn').click(slideMenutoggle);
  $('.pure-form').submit(validate);
  $('#firstName').blur(runFirstNameValidation);
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
	if(firstNameValid() != true) {
		firstNameError();
	}
	if(lastNameValid() != true) {
		lastNameError();
	}
	if(firstNameValid() && lastNameValid()) {
		alert('Thanks for entering!');
	} else {
	e.preventDefault();
	}
}

function runFirstNameValidation() {
	if(firstNameValid()) {
		firstNameClearError();
	}
}


function firstNameError() {
	$('#firstName').addClass('error');
	$('#firstName').siblings('.error-msg').show();
}

function firstNameError() {
	$('#firstName').removeClass('error');
	// $('#firstName').siblings('.error-msg').hide();
}


function firstNameValid() {
	var firstName = $('#firstName').val();
	return firstName.length > 0
}

function lastNameValid() {
	var lastName = $('#lastName').val();
	return lastName.length > 0
}
