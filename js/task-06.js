const inputEl = document.querySelector('#validation-input');
const minLength = Number(inputEl.dataset.length);
console.log(inputEl.dataset.length);

inputEl.addEventListener('blur', () => {

    if (Number(inputEl.value.length) === 0) {
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid');
        return
    }
    if (inputEl.value.length !== minLength) {
        inputEl.classList.add('invalid')
        return
    };

    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
});