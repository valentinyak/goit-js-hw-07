const mainListEl = document.querySelectorAll('ul#categories>li.item');
console.log(`В списке ${mainListEl.length} категории.`);

for (const element of mainListEl) {
  console.log(
    `Категория: ${element.firstElementChild.textContent}\nКоличество элементов: ${element.lastElementChild.children.length}`,
  );
}
