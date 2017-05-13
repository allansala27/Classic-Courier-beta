$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var company = $("input#company-input");
  var name = $("input#company-input");
  var address = $("input#address-input");
  var city = $("input#city-input");
  var state = $("input#state-input");
  var zip = $("input#zip-input");
  var phone = $("input#phone-input");
  var fax = $("input#fax-input");
  var email = $("input#email-input");
  var creditcard = $("input#creditcard-input");
  var expdate = $("input#expdate-input");
  var billzip = $("input#billzip-input");

  // When the signup button is clicked, we validate the account, webid and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      company: companyInput.val().trim(),
      name: nameInput.val().trim(),
      address: addressInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val(),
      zip: zipInput.val().trim(),
      phone: phoneInput.val().trim(),
      fax: fax.val().trim(),
      email: email.val().trim(),
      creditcard: creditcard.val().trim(),
      expdate: expdate.val().trim(),
      billzip: billzip.val().trim()
    };

    if (!userData.company || !userData.name || !userData.address || !userData.city || !userData.city || !userData.state || 
        !userData.zip || !userData.phone || !userData.fax || !userData.email || !userData.creditcard || !userData.expdate ||
        !userData.billzip) {
      return;
    }
    // If we have an account, webid and password, run the signUpUser function
    signUpUser(userData.company, userData.name, userData.address, 
      userData.city, userData.state, userData.zip, userData.phone, userData.fax, userData.email,
      userData.creditcard, userData.expdate, userData.billzip);
    companyInput.val("");
    nameInput.val("");
    addressInput.val("");
    cityInput.val("");
    stateInput.val("");
    zipInput.val("");
    phoneInput.val("");
    faxInput.val("");
    emailInput.val("");
    creditcard.val("");
    expdate.val("");
    billzip.val("")
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(company, name, address, city, state, zip, phone, fax, email, creditcard, expdate, billzip) {
    $.post("/api/signup", {
      company: company,
      name: name,
      address: address,
      city: city,
      state: state,
      zip: zip,
      phone: phone,
      fax: fax,
      email: email,
      creditcard: creditcard,
      expdate: expdate,
      billzip: billzip
    };
     //not sure if this is the correct redirect
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

});