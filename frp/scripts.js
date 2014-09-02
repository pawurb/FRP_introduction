$(function(){
  // Non-functional helper methods responsible for side effects
  var setTextFieldClass = function(selector, valid) {
    if(valid) {
      $(selector).addClass('valid');
      $(selector).removeClass('invalid');
    } else {
      $(selector).addClass('invalid');
      $(selector).removeClass('valid');
    }
  };

  var setButtonEnabled = function(enabled) {
    if(enabled) {
      $('#button').removeAttr('disabled');
    } else {
      $('#button').attr('disabled', 'disabled');
    }
  };

  // Functional code
  // Login input field events stream
  var loginValid = $('#login').asEventStream('keyup')
  .map(function(e) {
    return e.target.value.length > 5;
  });

  loginValid.onValue(function(valid) {
    setTextFieldClass('#login', valid);
  });

  // Password input field events stream
  var passwordValid = $('#password').asEventStream('keyup')
  .map(function(e) {
    return e.target.value.length > 5;
  });

  passwordValid.onValue(function(valid) {
    setTextFieldClass('#password', valid);
  });

  // Combine two streams to determine button state
  loginValid.combine(passwordValid, function(loginVal, passVal) {
    return loginVal && passVal;
  }).onValue(setButtonEnabled);
});
