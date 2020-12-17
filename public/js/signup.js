$(document).ready(() => {
    // Getting references to our form and input
    const signUpForm = $('form.signup');
    const emailInput = $('input#email-input');
    const passwordInput = $('input#password-input');
    const userInput = $('input#username-input');

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on('submit', (event) => {
        event.preventDefault();
        const userData = {
            email: emailInput.val().trim(),
            user: userInput.val().trim(),
            password: passwordInput.val().trim()
        };

        pwnedCheck().then((pwnedCheck) => {
            if (
                !userData.email ||
                !userData.user ||
                !userData.password ||
                pwnedCheck.pwned
            ) {
                return;
            }
            // If we have an email user and password, run the signUpUser function
            signUpUser(userData.email, userData.user, userData.password);
            emailInput.val('');
            userInput.val('');
            passwordInput.val('');
        });
    });
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    async function pwnedCheck() {
        return new Promise((resolve, reject) => {
            let pwnedAnswer = {};

            const hashedPassword = sha1(passwordInput.val()).toUpperCase();
            const password = hashedPassword.slice(0, 5);

            let apiCall = `https://api.pwnedpasswords.com/range/${password}`;

            fetch(apiCall)
                .then((response) => response.text())
                .then((data) => onEnd(data))
                .catch((error) => {
                    reject(error);
                });

            function onEnd(hashes) {
                let res = hashes.split('\r\n').map((h) => {
                    let sp = h.split(':');
                    return {
                        hash: password + sp[0],
                        count: parseInt(sp[1])
                    };
                });

                let found = res.find((h) => h.hash === hashedPassword);
                if (found) {
                    console.log(
                        `Found ${found.count} matches were found for your password in leaked databases! Try harder...!`
                    );
                    pwnedAnswer = { pwned: true, count: found.count };
                } else {
                    console.log('No matches found!');
                    pwnedAnswer = { pwned: false, count: 0 };
                }
                resolve(pwnedAnswer);
            }
        });
    }

    function signUpUser(email, user, password) {
        $.post('/api/signup', {
            email: email,
            user: user,
            password: password
        })
            .then(() => {
                window.location.replace('/program');
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }
    function handleLoginErr(err) {
        $('#alert .msg').text(err.responseJSON);
        $('#alert').fadeIn(500);
    }
});
