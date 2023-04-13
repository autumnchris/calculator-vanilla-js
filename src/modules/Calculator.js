import calcButtons from '../data/calc-buttons';

class Calculator {
  constructor() {
    this.calcButtons = calcButtons;
    this.screenValue = '0';
    this.numA = '0';
    this.numB = '';
    this.operator = '';
  }

  handleClick(type, value) {

    switch (type) {
      case 'number':
        this.selectNumber(value);
        break;
      case 'operator':
        this.selectOperator(value);
        break;
      case 'pos/neg':
        this.togglePosNeg();
        break;
      case 'percent':
        this.convertToPercent();
        break;
      case 'clear':
        this.clearEntry();
        break;
      case 'clear all':
        this.clearAll();
        break;
      case 'decimal':
        this.selectDecimal();
        break;
      case 'equals':
        this.solveEquation();
        break;
    }
  }

  selectNumber(number) {

    if (!this.checkIfError()) {

      if (!this.operator) {
        if(this.numA === '0') this.numA = '';
        this.numA += number;
        this.screenValue = this.numA;
      }
      else {
        if(this.numB === '0') this.numB = '';
        this.numB += number;
        this.screenValue = this.numB;
      }
      this.changeScreenValue(this.screenValue);
    }
  }

  selectOperator(operatorValue) {

    if (!this.checkIfError()) {
      if(this.numB) this.solveEquation();
      this.operator = operatorValue;
    }
  }

  solveEquation() {
    const a = Number(this.numA);
    const b = Number(this.numB);
    let formula;

    if (this.numB && this.operator) {

      if (this.operator === '/' && this.numB === '0') {
        this.numA = '';
        this.numB = '';
        this.operator = '';
        this.screenValue = 'ERROR';
      }
      else {

        switch (this.operator) {
          case '+':
            formula = a + b;
            break;
          case '-':
            formula = a - b;
            break;
          case '*':
            formula = a * b;
            break;
          case '/':
            formula = a / b;
        }
        formula = formula.toString();
        this.numA = formula;
        this.numB = '';
        this.operator = '';
        this.screenValue = formula;
      }
      this.changeScreenValue(this.screenValue);
    }
  }

  selectDecimal() {

    if (!this.checkIfError()) {

      if (this.operator && !this.numB.includes('.')) {
        this.numB === '0' || this.numB === '' ? this.numB = '0.' : this.numB += '.';
        this.screenValue = this.numB;
      }
      else if (this.checkIfOnNumA() && !this.numA.includes('.')) {
        this.numA === '0' || this.numA === '' ? this.numA = '0.' : this.numA += '.';
        this.screenValue = this.numA;
      }
      this.changeScreenValue(this.screenValue);
    }
  }

  convertToPercent() {

    if (!this.checkIfError()) {

      if (this.checkIfOnNumB()) {
        this.numB /= 100;
        this.numB = this.numB.toString();
        this.screenValue = this.numB;
      }
      else if (this.checkIfOnNumA()) {
        this.numA /= 100;
        this.numA = this.numA.toString();
        this.screenValue = this.numA;
      }
      this.changeScreenValue(this.screenValue);
    }
  }

  togglePosNeg() {

    if (!this.checkIfError()) {

      if (this.checkIfOnNumB()) {
        this.numB < 0 ? this.numB = Math.abs(this.numB) : this.numB > 0 ? this.numB = -this.numB : this.numB = 0;
        this.numB = this.numB.toString();
        this.screenValue = this.numB;
      }
      else if (this.checkIfOnNumA()) {
        this.numA < 0 ? this.numA = Math.abs(this.numA) : this.numA > 0 ? this.numA = -this.numA : this.numA = 0;
        this.numA = this.numA.toString();
        this.screenValue = this.numA;
      }
      this.changeScreenValue(this.screenValue);
    }
  }

  clearEntry() {

    if (this.operator && this.numB) {
      this.numB = '0';
      this.screenValue = '0';
      this.changeScreenValue(this.screenValue);
    }
    else if (!this.operator) {
      this.numA = '0';
      this.screenValue = '0';
      this.changeScreenValue(this.screenValue);
    }
    else {
      this.operator = '';
    }
  }

  clearAll() {
    this.numA = '0';
    this.numB = '';
    this.operator = '';
    this.screenValue = '0';
    this.changeScreenValue(this.screenValue);
  }

  checkIfError() {
    return this.screenValue === 'ERROR' ? true : false;
  }

  checkIfOnNumA() {
    return !this.numB && !this.operator ? true : false;
  }

  checkIfOnNumB() {
    return this.numB ? true : false;
  }

  // DOM methods
  changeScreenValue(value) {
    document.querySelector('.screen').innerHTML = value;
  }

  renderCalcButtons() {
    const calcButtonsContainer = document.querySelector('.calc-buttons-container');
    calcButtonsContainer.innerHTML = this.calcButtons.map(calcButton => {
      return `<button type="button" class="button calc-button${typeof calcButton.className !== 'undefined' ? ' ' + calcButton.className : ''}" data-type=${calcButton.type} data-value=${calcButton.value}>${calcButton.value === '/' ? '&divide;' : calcButton.value === '*' ? '&times;' : calcButton.value}</button>`;
    }).join('');
  }

  renderCalculator(location) {
    const calculator = document.createElement('div');
    calculator.classList.add('calculator');
    calculator.innerHTML = `
      <div class="screen">${this.screenValue}</div>
      <div class="calc-buttons-container"></div>
    `;
    document.querySelector(location).appendChild(calculator);
    this.renderCalcButtons();
  }
}

export default Calculator;