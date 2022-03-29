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
  let numA = '';
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

    if (!operator) {
      if(numA === '0') numA = '';
      numA += number;
      document.querySelector('.screen').innerHTML = numA;
    }
    else {
      if(numB === '0') numB = '';
      numB += number;
      document.querySelector('.screen').innerHTML = numB;
    }
  }

  function selectOperator(operatorValue) {
    if(numB) solveEquation();
    if(numA) operator = operatorValue;
  }

  function solveEquation() {
    const a = Number(numA);
    const b = Number(numB);
    let formula;

    if (numB && operator) {

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
      document.querySelector('.screen').innerHTML = formula;
    }
  }

  function selectDecimal() {

    if (numB && !numB.includes('.')) {
      document.querySelector('.screen').value === '0' ? numB = '0.' : numB += '.';
      document.querySelector('.screen').innerHTML = numB;
    }
    else if (!operator && !numB && !numA.includes('.')) {
      document.querySelector('.screen').value === '0' ? numA = '0.' : numA += '.';
      document.querySelector('.screen').innerHTML = numA;
    }
  }

  function convertToPercent() {

    if (numB) {
      numB /= 100;
      numB = numB.toString();
      document.querySelector('.screen').innerHTML = numB;
    }
    else if (!operator && !numB) {
      numA /= 100;
      numA = numA.toString();
      document.querySelector('.screen').innerHTML = numA;
    }
  }

  function togglePosNeg() {

    if (numB) {
      numB < 0 ? numB = Math.abs(numB) : numB > 0 ? numB = -numB : numB = 0;
      numB = numB.toString();
      document.querySelector('.screen').innerHTML = numB;
    }
    else if (!operator && !numB) {
      numA < 0 ? numA = Math.abs(numA) : numA > 0 ? numA = -numA : numA = 0;
      numA = numA.toString();
      document.querySelector('.screen').innerHTML = numA;
    }
  }

  function clearEntry() {

    if (operator && numB) {
      numB = '';
      document.querySelector('.screen').innerHTML = '0';
    }
    else if (!operator) {
      numA = '';
      document.querySelector('.screen').innerHTML = '0';
    }
    else {
      operator = '';
    }
  }

  function clearAll() {
    numA = '';
    numB = '';
    operator = '';
    document.querySelector('.screen').innerHTML = '0';
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
