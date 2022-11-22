/* Contact Form */
$("#contactForm").validator().on("submit", function (event) {
  if (event.isDefaultPrevented()) {
    // handle the invalid form...
    csubmitMSG(false, "Please fill all fields!");
  } else {
    // everything looks good!
    event.preventDefault();
    csubmitForm();
  }
});


function csubmitForm() {
  // initiate variables with form content
  var name = $("#cname").val();
  var email = $("#cemail").val();
  var subject = $("#csubject").val();
  var message = $("#cmessage").val();
  var secret = $("#secret-aspam").val();
  $.ajax({
    type: "POST",
    url: "src/contact_form/contactform-process.php",
    data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message + "&secret=" + secret,
    success: function (text) {
      if (text == "success") {
        cformSuccess();
      } else {
        csubmitMSG(false, text);
      }
    }
  });
}

function cformSuccess() {
  $("#contactForm")[0].reset();
  csubmitMSG(true, "Message Submitted!");
}


function csubmitMSG(valid, msg) {
  if (valid) {
    var msgClasses = "succes-error-msg p-3 rounded-2";
  } else {
    var msgClasses = "succes-error-msg p-3 rounded-2";
  }
  $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
}

// CAPTCHA? SECRET ASPAM
$('#cbtn').click(function(){
    $('#secret-aspam').val('nevergonnagiveyouup');
});
