const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;


    if (email.value === '' || password.value === '') {
        alert("Всі поля повинні бути заповнені");
        return
    }

    const objFormData = {
        email: email.value,
        password: password.value
    };

    console.log(objFormData);
    event.currentTarget.reset()
};