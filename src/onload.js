function onload() {
  const content = document.getElementById('content');
  const img = document.createElement('img');
  const headline = document.createElement('h1');
  const description = document.createElement('p');

  img.setAttribute('src', '../img/restaurant.jpg');
  headline.textContent = 'Welcome back to Restaurant Gordon Ramsay.';
  description.textContent =
    'Established in 1998, Restaurant Gordon Ramsay pairs unparalleled service and fine dining with an intimate ambience.';

  content.appendChild(img);
  content.appendChild(headline);
  content.appendChild(description);
}

export default onload;
