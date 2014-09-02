$(function(){
  var loginValid;
  var passwordValid;

  var isValidLogin = function(text) {
    return text.length > 5;
  };

  var isValidPassword = function(text) {
    return text.length > 5;
  };

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