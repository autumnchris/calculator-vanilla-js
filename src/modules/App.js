import { Calculator } from './Calculator';

const App = (() => {

  function renderApp() {
    document.getElementById('app').innerHTML = `
    <header>
      <h1>Calculator</h1>
    </header>
    <main>
      <div class="calculator"></div>
    </main>
    <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; ${new Date().getFullYear()}</footer>`;

    Calculator.renderCalculator();

    document.addEventListener('click', event => {
       const element = event.target;
       console.log(event);
       element.matches('.calc-button') ? Calculator.handleClick(element.dataset.type, element.dataset.value) : null;
    });
  }

  return {
    renderApp
  };
})();

export { App };
