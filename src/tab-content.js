function injectFunction(target) {
  return function injectHTML(container) {
    container.appendChild(target);
  };
}

function Home() {
  const home = document.createElement('div');
  const headline = document.createElement('h1');
  const description = document.createElement('p');

  home.classList.add('tab-content');
  home.classList.add('active');

  headline.textContent = 'Welcome back to Restaurant Gordon Ramsay.';
  description.textContent =
    'Established in 1998, Restaurant Gordon Ramsay pairs unparalleled service and fine dining with an intimate ambience.';

  home.appendChild(headline);
  home.appendChild(description);

  const injectHTML = injectFunction(home);

  return { injectHTML };
}

function Contacts() {
  const contacts = document.createElement('div');
  const sampleText = document.createElement('p');

  contacts.classList.add('tab-content');

  sampleText.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, odio soluta? Debitis magnam dolore quod eaque sapiente sint corporis facere?';

  contacts.appendChild(sampleText);

  const injectHTML = injectFunction(contacts);

  return { injectHTML };
}

function Menu() {
  const menu = document.createElement('div');
  const sampleText = document.createElement('div');

  menu.classList.add('tab-content');

  sampleText.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, odio soluta? Debitis magnam dolore quod eaque sapiente sint corporis facere?';

  menu.appendChild(sampleText);
  const injectHTML = injectFunction(menu);

  return { injectHTML };
}

export { Home, Contacts, Menu };
