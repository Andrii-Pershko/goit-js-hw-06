const category = document.querySelector('#categories');


console.log(`Number of categories: ${category.childElementCount}`);
console.log('')
for (const i of category.children) {
    
    console.log(`Category: ${i.firstElementChild.outerText}`);
    
    console.log(`Elements: ${i.lastElementChild.childElementCount}`);
    console.log('')
}