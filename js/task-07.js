const textEl = document.querySelector('#text');
const sliderEl = document.querySelector('#font-size-control');

sliderEl.addEventListener('input', () => {
    textEl.style.fontSize = `${sliderEl.value}px`;
});
