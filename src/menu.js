import injectDishEle from './dish';
import sushi0 from '../img/sushi0.webp';
import sushi1 from '../img/sushi1.webp';
import sushi2 from '../img/sushi2.webp'
import sushi3 from '../img/sushi3.webp'

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

  const sources = [sushi0, sushi1, sushi2, sushi3];

  for(let i = 0; i < 4; i += 1) {
    const name = `Dish ${i}`;
    const src = sources[i];
    injectDishEle(name, src, dishContainer);
  }

  menu.appendChild(heading);
  menu.appendChild(sampleText);
  menu.appendChild(dishContainer)

  container.appendChild(menu);

  return menu;
}

export default injectMenuEle;