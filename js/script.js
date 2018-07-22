let result = '0';

// FUNCTIONS

function selectNumber(elem) {
  result = result.split(' ');

  if (result[result.length - 1] === '0') {
    result[result.length - 1] = result[result.length - 1].substr(1);
  }
  result[result.length - 1] += elem;
  document.querySelector('.screen').innerHTML = result[result.length - 1];
  result = result.join(' ');
}

function selectOperator(elem) {
  solveEquation();

  if (result.charAt(result.length - 1).match(/\s/)) {
    result = result.substr(0, result.length - 3);
  }
  result += ` ${elem} `;
}

function solveEquation() {
  let num1;
  let num2;

  if (result.includes(' ') && !result.charAt(result.length - 1).match(/\s/)) {
    result = result.split(' ');
    num1 = Number(result[0]);
    num2 = Number(result[2]);

    switch (result[1]) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
    }
    result = result.toString();
    document.querySelector('.screen').innerHTML = result;
  }
}

function togglePosNeg() {

  if (!result.charAt(result.length - 1).match(/\s/)) {
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

  if (!result.charAt(result.length - 1).match(/\s/)) {
    result = result.split(' ');
    result[result.length - 1] /= 100;
    document.querySelector('.screen').innerHTML = result[result.length - 1];
    result = result.join(' ');
  }
}

function clearEntry() {

  if (!result.charAt(result.length - 1).match(/\s/)) {
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

  if (!result.charAt(result.length - 1).match(/\s/)) {
    result = result.split(' ');

    if (!result[result.length - 1].includes('.')){
      result[result.length - 1] += '.';
      document.querySelector('.screen').innerHTML = result[result.length - 1];
    }
    result = result.join(' ');
  }
}

function setKeys(event) {

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
        // enter
        case 13:
          solveEquation();
          break;
        // spacebar
        case 32:
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
      }
    }
  }
}

// EVENT LISTENERS

document.querySelectorAll('.number').forEach(num => {
  num.addEventListener('click', (event) => {
    selectNumber(event.target.id);
  });
});

document.querySelectorAll('.operator').forEach(operator => {
  operator.addEventListener('click', (event) => {
    selectOperator(event.target.id);
  });
});

document.querySelector('.equals').addEventListener('click', () => {
  solveEquation();
});

document.querySelector('.pos-neg').addEventListener('click', () => {
  togglePosNeg();
});

document.querySelector('.percentage').addEventListener('click', () => {
  convertToPercent();
});

document.querySelector('.clear-entry').addEventListener('click', () => {
  clearEntry();
});

document.querySelector('.clear-all').addEventListener('click', () => {
  clearAll();
});

document.querySelector('.decimal').addEventListener('click', () => {
  selectDecimal();
});

window.addEventListener('keydown', (event) => {
  setKeys(event);
});
