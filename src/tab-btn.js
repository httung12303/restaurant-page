function onClick(tab) {
  return function switchTab() {
    if (tab.classList.contains('active')) {
      return;
    }
    document
      .querySelectorAll('.tab-content')
      .forEach((tab) => tab.classList.remove('active'));
    tab.classList.add('active');
  };
}

function injectTabBtn(tabName) {
  const btnContainer = document.querySelector('.btn-container');
  const btn = document.createElement('button');
  btn.textContent = tabName;
  btnContainer.appendChild(btn);
  return btn;
}

function addTabBtnOnClick(btn, tab) {
  btn.addEventListener('click', onClick(tab));
}

export { injectTabBtn, addTabBtnOnClick };
