$(document).ready(function() {
	$(".btn btn-primary").on("click", function(event) {
		//store inputs into vars
		var userName = $("#name-input").val();
		var userEmail = $("#email-input").val();
		var userSubject = $("#subject-input").val();
		var userMessage = $("#message-input").val();

		storeMessage(userName, userEmail, userSubject, userMessage);
	});
	
	var storeMessage = function(name, email, subject, message) {
		$.post("/contact", {
        name: name,
        email: email,
        subject: subject,
        message: message
            //not sure if this is the correct redirect
    }).then(function(data) {
        window.location = data.redirect;
    }).catch(function(err) {
        console.log(err);
    });
	}
});
