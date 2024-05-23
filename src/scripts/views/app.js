import UrlParser from '../routes/uri-parser';
import routes from '../routes/routes';
import Navigation from '../utils/navigation';
import '../utils/foot-bar';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._navigation = new Navigation({
      menuButton: this._button,
      mainElement: document.querySelector('main'),
      drawerElement: this._drawer,
    });
    this.renderPage();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#main-content');

    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.focus();
    });
  }
}

export default App;
