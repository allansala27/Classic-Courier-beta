$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var accountInput = $("input#account-input");
  var webidInput = $("input#webid-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the account, webid and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      account: accountInput.val().trim(),
      webid: webidInput.val().trim(), 
      password: passwordInput.val().trim(),
      company: companyInput.val().trim(),
      name: nameInput.val().trim(),
      address: addressInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput,
      zip: zipInput.val().trim(),
      phone: phoneInput.val().trim(),
      fax: fax.val().trim(),
      email: email.val().trim(),
    };

    if (!userData.account || !userData.webid || !userData.password || !userData.company || 
        !userData.name || !userData.address || !userData.city || !userData.city || !userData.state || 
        !userData.zip || !userData.phone || !userData.fax || !userData.email) {
      return;
    }
    // If we have an account, webid and password, run the signUpUser function
    signUpUser(userData.account, userData.webid, userData.password, userData.company, userData.name, userData.address, 
      userData.city, userData.state, userData.zip, userData.phone, userData.fax, userData.email);
    accountInput.val("");
    webidInput.val("");
    passwordInput.val("");
    companyInput.val("");
    nameInput.val("");
    addressInput.val("");
    cityInput.val("");
    stateInput.val("");
    zipInput.val("");
    phoneInput.val("");
    faxInput.val("");
    emailInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(account, webid, password, company, name, address, city, state, zip, phone, fax, email) {
    $.post("/api/signup", {
      account: account,
      webid: webid,
      password: password,
      company: company,
      name: name,
      address: address,
      city: city,
      state: state,
      zip: zip,
      phone: phone,
      fax: fax,
      email: email
    };
     //not sure if this is the correct redirect
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

});