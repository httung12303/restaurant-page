function createBasicStructure() {
  const header = document.createElement('header');
  
  const title = document.createElement('h1');
  title.textContent = 'Sushi Sanshin';
  header.appendChild(title);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  header.appendChild(btnContainer);

  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  document.body.appendChild(header);
  document.body.appendChild(content);
}

export default createBasicStructure;