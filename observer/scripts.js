$(function(){
  var isValidLogin = function(text) {
    return text.length > 2;
  };

  var isValidPassword = function(text) {
    return text.length > 2;
  };

  var loginValid = false;
  var passwordValid = false;
  $('#button').attr('disabled', 'disabled');

  $('#login').on('keyup', function() {
    loginValid = isValidLogin($(this).val());
    if(loginValid){
      $(this).addClass('valid');
      $(this).removeClass('invalid');
      if(passwordValid) {
        $('#button').removeAttr('disabled');
      }
    } else {
      $(this).addClass('invalid');
      $(this).removeClass('valid');
      $('#button').attr('disabled', 'disabled');
    }
  });

  $('#password').on('keyup', function() {
    passwordValid = isValidPassword($(this).val());
    if(passwordValid){
      $(this).addClass('valid');
      $(this).removeClass('invalid');
      if(loginValid) {
        $('#button').removeAttr('disabled');
      }
    } else {
      $(this).addClass('invalid');
      $(this).removeClass('valid');
      $('#button').attr('disabled', 'disabled');
    }
  });
});