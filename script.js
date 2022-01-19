$(function() {

  var form = $('#form'),
    name = $('#name'),
    email = $('#email'),
    phone = $('#phone'),
    message = $('#message'),
    info = $('#info'),
    submit = $("#submit");

  form.on('input', '#email, #phone, #message', function() {
    $(this).css('border-color', '');
    info.html('').slideUp();
  });

  submit.on('click', function(e) {
    e.preventDefault();
    if (validate()) {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: form.serialize(),
        dataType: "json"
      }).done(function(data) {
        if (data.success) {
          name.val();
          email.val('');
          phone.val('');
          message.val('');
          honeypot.val('');
          info.html('Message sent!').css('color', '#66BFBF').slideDown();
        } else {
          info.html('Could not send mail! Sorry!').css('color', 'red').slideDown();
        }
      });
    }
  });

  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!regex.test(email.val())) {
      email.css('border-color', 'red');
      valid = false;
    }
    if ((phone.val().trim()) === "") {
      phone.css('border-color', 'red');
      valid = false;
    }
    if ((message.val().trim()) === "") {
      message.css('border-color', 'red');
      valid = false;
    }
    if ((honeypot.val() !== "")){
      valid = false;
    }

    return valid;
  }

});
