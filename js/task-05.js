const inputEl = document.querySelector("#name-input");
const anonimusEl = document.querySelector("#name-output")

const renameUserWelcome = (event) => {
    anonimusEl.textContent = event.currentTarget.value;
    if (anonimusEl.textContent.length === 0) {
        anonimusEl.textContent = 'Anonymous';
    }
}

inputEl.addEventListener("input", renameUserWelcome);

