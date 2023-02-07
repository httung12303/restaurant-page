function injectContactsEle(container) {
  const contacts = document.createElement('div');
  const sampleText = document.createElement('p');
  const heading = document.createElement('h1');
  const phone = document.createElement('p');
  const address = document.createElement('p');
  const email = document.createElement('p');

  contacts.classList.add('tab-content');
  contacts.classList.add('contacts');

  heading.textContent = 'Contacts';
  sampleText.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, odio soluta? Debitis magnam dolore quod eaque sapiente sint corporis facere?';
  phone.textContent = '📞 (+84)091 5997703';
  email.textContent = '📫 someramdomemail@something.com';
  address.textContent = '🏠 Somewhere far from you';

  contacts.appendChild(heading);
  contacts.appendChild(sampleText);
  contacts.appendChild(phone);
  contacts.appendChild(email);
  contacts.appendChild(address);

  container.appendChild(contacts);

  return contacts;
}

export default injectContactsEle;
