$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const userInput = $("input#username-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      user: userInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.user || !userData.password) {
      return;
    }
    // If we have an email user and password, run the signUpUser function
    signUpUser(userData.email, userData.user, userData.password);
    emailInput.val("");
    userInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, user, password) {
    $.post("/api/signup", {
      email: email,
      user: user,
      password: password
    })
      .then(() => {
        window.location.replace("/program");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
