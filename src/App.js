import Header from "./modules/Header";
import Footer from "./modules/Footer";
import Calculator from "./modules/Calculator";

class App {
  constructor() {
    this.header = new Header();
    this.footer = new Footer();
    this.calculator = new Calculator();
    this.renderApp();
    this.events();
  }

  // Event listeners
  events() {
    document.addEventListener('click', event => {
      const element = event.target;
      element.matches('.calc-button') ? this.calculator.handleClick(element.dataset.type, element.dataset.value) : null;
    });
  }

  // DOM methods
  renderApp() {
    this.header.renderHeader('#app');
    this.renderMain('#app');
    this.footer.renderFooter('#app');
    this.calculator.renderCalculator('main');
  }

  renderMain(location) {
    const main = document.createElement('main');
    document.querySelector(location).appendChild(main);
  }
}

export default App;