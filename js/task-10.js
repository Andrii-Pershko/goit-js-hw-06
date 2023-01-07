function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const parentBoxEl = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const data = document.querySelector('[type="number"]')

let inputData = 0;

btnDestroy.addEventListener('click', destroyBoxes)
data.addEventListener('input', () => inputData = data.value)
btnCreate.addEventListener('click', callBack)


function callBack() {
  createBoxes(inputData);
};

function destroyBoxes() {
  parentBoxEl.innerHTML = ''
};

function createBoxes(amount) {
  const arrayDataTag = []
  const startWidthHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const newTag = document.createElement('div');
    newTag.style.width = `${startWidthHeight + i * 10}px`;
    newTag.style.height = `${startWidthHeight + i * 10}px`;
    newTag.style.backgroundColor = getRandomHexColor();
    arrayDataTag.push(newTag);
  }
  parentBoxEl.prepend(...arrayDataTag);
}

