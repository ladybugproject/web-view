function buttonClickDownHandler(e) {
  e.target.classList.add('click-button');
  e.stopPropagation();
}

function buttonClickUpHandler(e) {
  e.target.classList.remove('click-button');
}

export {
  buttonClickDownHandler, buttonClickUpHandler
};