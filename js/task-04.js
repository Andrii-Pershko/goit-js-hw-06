const valueString = document.querySelector('#value');
let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const decrementOne = () => {
    counterValue -= 1;
    valueString.textContent = counterValue;
};

const incrementOne = () => {
    counterValue += 1;
    valueString.textContent = counterValue;
};

decrement.addEventListener('click', decrementOne);
increment.addEventListener('click', incrementOne);


