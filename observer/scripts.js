$(function(){
  var loginValid;
  var passwordValid;

  var isValidLogin = function(text) {
    return text.length > 2;
  };

  var isValidPassword = function(text) {
    return text.length > 2;
  };

  $('#login').on('keyup', function() {
    if(isValidLogin($(this).val())){
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
    if(isValidPassword($(this).val())){
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