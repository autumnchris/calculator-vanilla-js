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
  let result = '0';
  const endsWithOperator = result.charAt(result.length - 1).match(/\s/);

  function renderCalcButtons() {
    document.querySelector('.calc-buttons-container').innerHTML = calcButtons.map(button => {
      return `<button type="button" class="button calc-button${typeof button.className !== 'undefined' ? ' ' + button.className : ''}" id="${button.id}">${button.value}</button>`;
    }).join('');
  }

  function renderCalculator() {
    document.querySelector('.calculator').innerHTML = `
    <div class="screen">${result}</div>
    <div class="calc-buttons-container"></div>`;

    renderCalcButtons();
  }

  function selectNumber(number) {
    result = result.split(' ');

    if (result[result.length - 1] === '0') {
      result[result.length - 1] = result[result.length - 1].substr(1);
    }
    result[result.length - 1] += number;
    document.querySelector('.screen').innerHTML = result[result.length - 1];
    result = result.join(' ');
  }

  function selectOperator(operator) {
    solveEquation();

    if (endsWithOperator) {
      result = result.substr(0, result.length - 3);
    }
    result += ` ${operator} `;
  }

  function togglePosNeg() {

    if (!endsWithOperator) {
      result = result.split(' ');

      if (result[result.length - 1] < 0) {
        result[result.length - 1] = Math.abs(result[result.length - 1]);
      }
      else if (result[result.length - 1] > 0) {
        result[result.length - 1] = -result[result.length - 1];
      }
      else {
        result[result.length - 1] = 0;
      }
      document.querySelector('.screen').innerHTML = result[result.length - 1];
      result = result.join(' ');
    }
  }

  function convertToPercent() {

    if (!endsWithOperator) {
      result = result.split(' ');
      result[result.length - 1] /= 100;
      document.querySelector('.screen').innerHTML = result[result.length - 1];
      result = result.join(' ');
    }
  }

  function clearEntry() {

    if (!endsWithOperator) {
      result = result.split(' ');
      result[result.length - 1] = '0';
      document.querySelector('.screen').innerHTML = result[result.length - 1];
      result = result.join(' ');
    }
    else {
      result = result.substr(0, result.length - 3);
    }
  }

  function clearAll() {
    result = '0';
    document.querySelector('.screen').innerHTML = result;
  }

  function selectDecimal() {

    if (!endsWithOperator) {
      result = result.split(' ');

      if (!result[result.length - 1].includes('.')){
        result[result.length - 1] += '.';
        document.querySelector('.screen').innerHTML = result[result.length - 1];
      }
      result = result.join(' ');
    }
  }

  function solveEquation() {
    let a;
    let b;

    if (result.includes(' ') && !endsWithOperator) {
      result = result.split(' ');
      a = Number(result[0]);
      b = Number(result[2]);

      switch (result[1]) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = a / b;
      }
      result = result.toString();
      document.querySelector('.screen').innerHTML = result;
    }
  }

  function setKeys(event) {
    event.preventDefault();

    if (event.shiftKey) {
      switch (event.keyCode) {
        // plus sign
        case 187:
          selectOperator(event.key);
          break;
        // multiplication sign
        case 56:
          selectOperator(event.key);
          break;
        // percentage
        case 53:
          convertToPercent();
      }
    }
    else {
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        selectNumber(event.key);
      }
      else {
        switch (event.keyCode) {
          // minus sign
          case 189:
            selectOperator(event.key);
            break;
          // division sign
          case 191:
            selectOperator(event.key);
            break;
          // equal sign
          case 187:
            solveEquation();
            break;
          // option/alt
          case 18:
            togglePosNeg();
            break;
          // delete/backspace
          case 8:
            clearEntry();
            break;
          // escape
          case 27:
            clearAll();
            break;
          // decimal/period
          case 190:
            selectDecimal();
            break;
        }
      }
    }
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
    solveEquation,
    setKeys
  };
})();

export { Calculator };
