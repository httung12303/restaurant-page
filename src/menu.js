import injectDishEle from './dish';

function injectMenuEle(container) {
  const menu = document.createElement('div');
  const sampleText = document.createElement('div');
  const heading = document.createElement('h1');
  const dishContainer = document.createElement('div');

  menu.classList.add('tab-content');
  menu.classList.add('menu');
  dishContainer.classList.add('dish-container');

  heading.textContent = 'Menu';
  sampleText.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, odio soluta? Debitis magnam dolore quod eaque sapiente sint corporis facere?';

  for(let i = 0; i < 4; i += 1) {
    const name = `Dish ${i}`;
    const src = `../img/sushi${i}.webp`;
    injectDishEle(name, src, dishContainer);
  }

  menu.appendChild(heading);
  menu.appendChild(sampleText);
  menu.appendChild(dishContainer)

  container.appendChild(menu);

  return menu;
}

export default injectMenuEle;