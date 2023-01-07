const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeListElement = (name) => {
  const listItem = document.createElement('li')
  listItem.textContent = ingredients[name];
  listItem.classList.add('item');
  return listItem;
}

const list = document.querySelector("#ingredients")

const listElement = [];

for (let i = 0; i < ingredients.length; i += 1) {
  listElement.push(makeListElement(i))  
}

list.prepend(...listElement);



// Створить окремий елемент < li >.
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список 
// ul#ingredients.
