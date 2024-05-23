class Navigation {
  constructor({ menuButton, mainElement, drawerElement }) {
    this._menuButton = menuButton;
    this._mainElement = mainElement;
    this._drawerElement = drawerElement;

    this._addEventListeners();
  }

  _addEventListeners() {
    this._menuButton.addEventListener('click', this._toggleDrawer.bind(this));
    this._mainElement.addEventListener('click', this._closeDrawer.bind(this));
  }

  _toggleDrawer(event) {
    this._drawerElement.classList.toggle('open');
    event.stopPropagation();
  }

  _closeDrawer() {
    this._drawerElement.classList.remove('open');
  }
}

export default Navigation;
