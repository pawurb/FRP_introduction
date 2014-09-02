$(function(){
  var loginValid = $('#login').asEventStream('keyup')
  .map(function(e) {
    return e.target.value.length > 2;
  });

  loginValid.onValue(function(valid) {
    if(valid) {
      $('#login').addClass('valid');
      $('#login').removeClass('invalid');
    } else {
      $('#login').addClass('invalid');
      $('#login').removeClass('valid');
    }
  });

  var passwordValid = $('#password').asEventStream('keyup')
  .map(function(e) {
    return e.target.value.length > 2;
  });

  passwordValid.onValue(function(valid) {
    if(valid) {
      $('#password').addClass('valid');
      $('#password').removeClass('invalid');
    } else {
      $('#password').addClass('invalid');
      $('#password').removeClass('valid');
    }
  });

  var buttonEnabled = loginValid.merge(passwordValid);

  buttonEnabled.onValue(function(enabled) {
    if(enabled) {
      $('#button').removeAttr('disabled');
    } else {
      $('#button').attr('disabled', 'disabled');
    }
  });
});
