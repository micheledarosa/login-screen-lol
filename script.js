const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');
const togglePass = document.getElementById('togglePassword');
const passwordInput = document.querySelector('input[name="password"]');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active')
    }
}

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

const handleTogglePassword = () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePass.src = type === 'password' ? './images/eye-slash.png' : './images/eye.png';
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

inputs.forEach((input) => input.addEventListener('input', handleChange));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

togglePass.addEventListener('click', handleTogglePassword);