$(document).ready(function() {
  // Getting references to our form and input
  var company = $("input#company-input");
  var name = $("input#name-input");
  var address = $("input#address-input");
  var city = $("input#city-input");
  var state = $("input#state-input");
  var zip = $("input#zip-input");
  var telephone = $("input#telephone-input");
  var fax = $("input#fax-input");
  var email = $("input#email-input");

  // When the signup button is clicked, we validate the account, webid and password are not blank
  $(".submit").on("click", function(event) {
    event.preventDefault();
    var userData = {
      company: company.val().trim(),
      name: name.val().trim(),
      address: address.val().trim(),
      city: city.val().trim(),
      state: state.val(),
      zip: zip.val().trim(),
      telephone: telephone.val().trim(),
      fax: fax.val().trim(),
      email: email.val().trim(),
    };

    if (!userData.company || !userData.name || !userData.address || !userData.city || !userData.city || !userData.state || 
        !userData.zip || !userData.telephone || !userData.fax || !userData.email || !userData.creditcard || !userData.expdate ||
        !userData.billzip) {
      return;
    }
    // If we have an account, webid and password, run the signUpUser function
    signUpUser(userData.company, userData.name, userData.address, 
      userData.city, userData.state, userData.zip, userData.telephone, userData.fax, userData.email);
    company.val("");
    name.val("");
    address.val("");
    city.val("");
    state.val("");
    zip.val("");
    telephone.val("");
    fax.val("");
    email.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(company, name, address, city, state, zip, telephone, fax, email, creditcard, expdate, billzip) {
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
    };
     //not sure if this is the correct redirect
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

});