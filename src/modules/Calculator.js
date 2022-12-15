const Calculator = (() => {
  const calcButtons = [
    {
      value: '+/-',
      id: 'pos-neg'
    },
    {
      value: '%',
      id: 'percentage'
    },
    {
      value: 'CE',
      className: 'clear',
      id: 'clear-entry'
    },
    {
      value: 'AC',
      className: 'clear',
      id: 'clear-all'
    },
    {
      value: '7',
      className: 'number',
      id: '7'
    },
    {
      value: '8',
      className: 'number',
      id: '8'
    },
    {
      value: '9',
      className: 'number',
      id: '9'
    },
    {
      value: '&divide;',
      className: 'operator',
      id: '/'
    },
    {
      value: '4',
      className: 'number',
      id: '4'
    },
    {
      value: '5',
      className: 'number',
      id: '5'
    },
    {
      value: '6',
      className: 'number',
      id: '6'
    },
    {
      value: '&times;',
      className: 'operator',
      id: '*'
    },
    {
      value: '1',
      className: 'number',
      id: '1'
    },
    {
      value: '2',
      className: 'number',
      id: '2'
    },
    {
      value: '3',
      className: 'number',
      id: '3'
    },
    {
      value: '-',
      className: 'operator',
      id: '-'
    },
    {
      value: '0',
      className: 'number',
      id: '0'
    },
    {
      value: '.',
      id: 'decimal'
    },
    {
      value: '=',
      id: 'equals'
    },
    {
      value: '+',
      className : 'operator',
      id: '+'
    }
  ];
  let screenValue = '0';
  let numA = '0';
  let numB = '';
  let operator = '';

  function renderCalcButtons() {
    document.querySelector('.calc-buttons-container').innerHTML = calcButtons.map(button => {
      return `<button type="button" class="button calc-button${typeof button.className !== 'undefined' ? ' ' + button.className : ''}" id="${button.id}">${button.value}</button>`;
    }).join('');
  }

  function renderCalculator() {
    document.querySelector('.calculator').innerHTML = `
    <div class="screen">0</div>
    <div class="calc-buttons-container"></div>`;

    renderCalcButtons();
  }

  function selectNumber(number) {

    if (!checkIfError()) {

      if (!operator) {
        if(numA === '0') numA = '';
        numA += number;
        screenValue = numA;
        document.querySelector('.screen').innerHTML = screenValue;
      }
      else {
        if(numB === '0') numB = '';
        numB += number;
        screenValue = numB;
        document.querySelector('.screen').innerHTML = screenValue;
      }
    }
  }

  function selectOperator(operatorValue) {

    if (!checkIfError()) {
      if(numB) solveEquation();
      operator = operatorValue;
    }
  }

  function solveEquation() {
    const a = Number(numA);
    const b = Number(numB);
    let formula;

    if (numB && operator) {

      if (operator === '/' && numB === '0') {
        numA = '';
        numB = '';
        operator = '';
        screenValue = 'ERROR';
        document.querySelector('.screen').innerHTML = screenValue;
      }
      else {
        switch (operator) {
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
        numA = formula;
        numB = '';
        operator = '';
        screenValue = formula;
        document.querySelector('.screen').innerHTML = screenValue;
      }
    }
  }

  function selectDecimal() {

    if (!checkIfError()) {

      if (operator && !numB.includes('.')) {
        numB === '0' || numB === '' ? numB = '0.' : numB += '.';
        screenValue = numB;
        document.querySelector('.screen').innerHTML = screenValue;
      }
      else if (checkIfOnNumA() && !numA.includes('.')) {
        numA === '0' || numA === '' ? numA = '0.' : numA += '.';
        screenValue = numA;
        document.querySelector('.screen').innerHTML = screenValue;
      }
    }
  }

  function convertToPercent() {

    if (!checkIfError()) {

      if (checkIfOnNumB()) {
        numB /= 100;
        numB = numB.toString();
        screenValue = numB;
        document.querySelector('.screen').innerHTML = screenValue;
      }
      else if (checkIfOnNumA()) {
        numA /= 100;
        numA = numA.toString();
        screenValue = numA;
        document.querySelector('.screen').innerHTML = screenValue;
      }
    }
  }

  function togglePosNeg() {

    if (!checkIfError()) {

      if (checkIfOnNumB()) {
        numB < 0 ? numB = Math.abs(numB) : numB > 0 ? numB = -numB : numB = 0;
        numB = numB.toString();
        screenValue = numB;
        document.querySelector('.screen').innerHTML = screenValue;
      }
      else if (checkIfOnNumA()) {
        numA < 0 ? numA = Math.abs(numA) : numA > 0 ? numA = -numA : numA = 0;
        numA = numA.toString();
        screenValue = numA;
        document.querySelector('.screen').innerHTML = screenValue;
      }
    }
  }

  function clearEntry() {

    if (operator && numB) {
      numB = '0';
      screenValue = '0';
      document.querySelector('.screen').innerHTML = screenValue;
    }
    else if (!operator) {
      numA = '0';
      screenValue = '0';
      document.querySelector('.screen').innerHTML = screenValue;
    }
    else {
      operator = '';
    }
  }

  function clearAll() {
    numA = '0';
    numB = '';
    operator = '';
    screenValue = '0';
    document.querySelector('.screen').innerHTML = screenValue;
  }

  function checkIfError() {
    return screenValue === 'ERROR' ? true : false;
  }

  function checkIfOnNumA() {
    return !numB && !operator ? true : false;
  }

  function checkIfOnNumB() {
    return numB ? true : false;
  }

  return {
    renderCalculator,
    selectNumber,
    selectOperator,
    togglePosNeg,
    convertToPercent,
    clearEntry,
    clearAll,
    selectDecimal,
    solveEquation
  };
})();

export { Calculator };
