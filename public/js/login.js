$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var accountInput = $("input#account-input");
  var webidInput = $("input#webid-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      account: accountInput.val().trim(),
      webid: webidInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.account || !userData.webid || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.account, userData.webid, userData.password);
    accountInput.val("");
    webidInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us 
  function loginUser(account, webid, password) {
    $.post("/login", {
      account: account,
      webid: webid,
      password: password
    })
      //not sure if this is the correct redirect
      .then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});