$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var accountInput = $("input#accountinput");
    var webIdInput = $("input#webidinput");
    var passwordInput = $("input#passwordinput");



    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            account: accountInput.val().trim(),
            webId: webIdInput.val().trim(),
            password: passwordInput.val().trim()
        };
        console.log(userData);

        if (!userData.account || !userData.webId || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.account, userData.webId, userData.password);
        accountInput.val("");
        webIdInput.val("");
        passwordInput.val("");
    });
    // loginUser does a post to our "login" route and if successful, redirects us the the orders page
    function loginUser(account, webId, password) {
        $.post('../login', {
            account: account,
            webId: webId,
            password: password
        }).then(function(data) {

            res.redirect('./member/order');
            // If there's an error, log the error
        }).catch(function(err) {
            console.log(err);
        });
    }

});
