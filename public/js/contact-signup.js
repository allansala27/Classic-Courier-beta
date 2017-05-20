$(document).ready(function() {
            $("#signup-submit").on("click", function(event) {
                // event.preventDefault();
                //store info in vars
                var userCompany = $("#company-input").val();
                var userName = $("#name-input").val();
                var userAddress = $("#address-input").val();
                var userCity = $("#city-input").val();
                var userState = $("#state-input").val();
                var userZip = $("#zip-input").val();
                var userTelephone = $("#telephone-input").val();
                var userFax = $("#fax-input").val();
                var userEmail = $("#email-input").val();

                console.log(userCompany, userName, userAddress, userCity, userState, userZip, userTelephone, userFax, userEmail);
                // checks for empty fields
                if (!userCompany || !userName || !userAddress || !userCity || !userState || !userZip || !userTelephone || !userFax) {
                    return;
                }

                // If all fields are filled in run signUpUser function
                signUpUser(userCompany, userName, userAddress, userCity, userState, userZip, userTelephone, userFax, userEmail);
            });


            $("#contact-submit").on("click", function(event) {
                //store inputs into vars
                var userName = $("#name-input").val();
                var userEmail = $("#email-input").val();
                var userSubject = $("#subject-input").val();
                var userMessage = $("#message-input").val();

                storeMessage(userName, userEmail, userSubject, userMessage);
            });


            function storeMessage(name, email, subject, message) {
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


            // Does a post to the signup route. If succesful, we are redirected to the members page
            // Otherwise we log any errors
            function signUpUser(company, name, address, city, state, zip, telephone, fax, email) {
                $.post("/signup", {
                    company: company,
                    name: name,
                    address: address,
                    city: city,
                    state: state,
                    zip: zip,
                    telephone: telephone,
                    fax: fax,
                    email: email
                        //not sure if this is the correct redirect
                }).then(function(data) {
                    window.location = data.redirect;
                }).catch(function(err) {
                    console.log(err);
                });
            }

        });
