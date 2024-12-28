const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const successMessage = document.getElementById('successMessage');
        const submitButton = document.getElementById('submitButton');

        let emailValid = false;
        let passwordValid = false;

        emailInput.addEventListener('input', () => {
            const emailValue = emailInput.value;
            if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
                emailError.textContent = '';
                emailValid = true;
                updateSuccessMessage();
            } else {
                emailError.textContent = 'Make sure email is more then 3 character and has @ and a .';
                emailValid = false;
                successMessage.style.display = 'none';
            }
        });

        passwordInput.addEventListener('input', () => {
            const passwordValue = passwordInput.value;
            if (passwordValue.length > 8) {
                passwordError.textContent = '';
                passwordValid = true;
                updateSuccessMessage();
            } else {
                passwordError.textContent = 'Make sure password is more then 8 character.';
                passwordValid = false;
                successMessage.style.display = 'none';
            }
        });

        function updateSuccessMessage() {
            if (emailValid && passwordValid) {
                successMessage.style.display = 'block';
            } else {
                successMessage.style.display = 'none';
            }
        }

        submitButton.addEventListener('click', () => {
            if (emailValid && passwordValid) {
                const confirmation = confirm('Do you want to proceed with signup?');
                if (confirmation) {
                    alert('Successful signup!');
                } else {
                    emailInput.value = '';
                    passwordInput.value = '';
                    emailError.textContent = '';
                    passwordError.textContent = '';
                    successMessage.style.display = 'none';
                }
            } else {
                alert('Please fix the errors before submitting.');
            }

            document.getElementById("signupForm").reset();
            document.getElementById("successMessage").innerHTML = "";
        });