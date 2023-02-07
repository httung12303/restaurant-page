function injectPara(content, container) {
  const description = document.createElement('p');
  description.textContent = content;

  container.appendChild(description);
}

function injectHomeEle(container) {
  const home = document.createElement('div');
  
  const heading = document.createElement('h1');

  home.classList.add('tab-content');
  home.classList.add('home');
  home.classList.add('active');

  heading.textContent = 'About';
  home.appendChild(heading);

  const paras = ['At the top-class, lunchtime-only Sushi Sanshin not far from Osaka Castle, you can devour delicious sushi while soaking in the beauty of the natural light in a quaint traditional Japanese house. Sushi Sanshin has won the hearts of guests, sushi rice brokers, and producers through its delightful cuisine and positive, engaging style. Not afraid of effecting change in a deeply traditional facet of Japanese cuisine, the chef serves as a role model for up-and-coming sushi artisans around Japan.', 'The rising star of the Osaka sushi world, Sushi Sanshin, is found in a residential neighborhood away from the busy areas of Umeda and Minami. The sushi restaurant occupies one building in a traditional row house where a soba restaurant once stood. The tasteful exterior has a wabi-sabi feel and a fence of many fine tree branches. In spring, guests can enjoy the soft pink light created by sunshine and cherry blossoms at the adjacent park in an interior designed for the sunlight to spill in. Chef Ishibuchi had passed by the building in its days as a soba restaurant, thinking it would make a great location someday, only to find it available when his preparations for going independent began. He felt it was fate and signed a contract for the property immediately. These days, he also runs the tea room next door, welcoming guests to relax until their reservation time or for an after-lunch dessert.'];

  paras.forEach((para) => injectPara(para, home));

  container.appendChild(home);

  return home;
}

export default injectHomeEle;