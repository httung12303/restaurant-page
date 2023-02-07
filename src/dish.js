function injectDishEle(name, src, container) {
  const dish = document.createElement('div');
  const dishImg = document.createElement('img');
  const dishName = document.createElement('h1');
  const dishDescription = document.createElement('p');
  
  dish.classList.add('dish');
  dishImg.src = src;
  dishName.textContent = name;
  dishDescription.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequatur debitis pariatur deleniti, unde et.';

  dish.appendChild(dishName);
  dish.appendChild(dishImg);
  dish.appendChild(dishDescription);

  container.appendChild(dish);

  return dish;
}

export default injectDishEle;