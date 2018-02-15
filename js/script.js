var result = '0';

// FUNCTIONS

function selectNumber(elem) {
  result = result.split(' ');

  if (result[result.length - 1] === '0') {
    result[result.length - 1] = result[result.length - 1].substr(1);
  }
  result[result.length - 1] += elem.id;
  document.getElementById('screen').value = result[result.length - 1];
  result = result.join(' ');
  console.log(result);
}

function selectOperator(elem) {
  var lastChar = result.charAt(result.length - 1);
  solveEquation();

  if (lastChar.match(/\s/)) {
    result = result.substr(0, result.length - 3);
  }
  result += ' ' + elem.id + ' ';
  console.log(result);
}

function solveEquation() {
  var lastChar = result.charAt(result.length - 1);

  if (result.includes(' ') && !lastChar.match(/\s/)) {
    result = result.split(' ');
    var num1 = Number(result[0]);
    var num2 = Number(result[2]);

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
    document.getElementById('screen').value = result;
    console.log(result);
  }
}

function deleteLastInput() {
  var lastChar = result.charAt(result.length - 1);

  if (!lastChar.match(/\s/)) {
    result = result.split(' ');

    if ((result[result.length - 1].length === 2 && result[result.length - 1].charAt(0) === '-') || result[result.length -1].length === 1) {
      result[result.length - 1] = '0';
    }
    else {
      result[result.length - 1] = result[result.length - 1].substr(0, result[result.length - 1].length - 1);
    }
    document.getElementById('screen').value = result[result.length - 1];
    result = result.join(' ');
    console.log(result);
  }
}

function togglePosNeg() {
  var lastChar = result.charAt(result.length - 1);

  if (!lastChar.match(/\s/)) {
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
    document.getElementById('screen').value = result[result.length - 1];
    result = result.join(' ');
    console.log(result);
  }
}

function convertToPercent() {
  var lastChar = result.charAt(result.length - 1);

  if (!lastChar.match(/\s/)) {
    result = result.split(' ');
    result[result.length - 1] /= 100;
    document.getElementById('screen').value = result[result.length - 1];
    result = result.join(' ');
    console.log(result);
  }
}

function clearEntry() {
  result = '0';
  document.getElementById('screen').value = result;
}

function selectDecimal() {
  var lastChar = result.charAt(result.length - 1);

  if (!lastChar.match(/\s/)) {
    result = result.split(' ');

    if (!result[result.length - 1].includes('.')){
      result[result.length - 1] += '.';
      document.getElementById('screen').value = result[result.length - 1];
    }
    result = result.join(' ');
    console.log(result);
  }
}

// EVENT LISTENERS

document.querySelectorAll('.number').forEach(function(num) {
  num.addEventListener('click', function() {
    selectNumber(this);
  });
});

document.querySelectorAll('.operator').forEach(function(num) {
  num.addEventListener('click', function() {
    selectOperator(this);
  });
});

document.getElementById('equals').addEventListener('click', function() {
  solveEquation();
});

document.getElementById('backspace').addEventListener('click', function() {
  deleteLastInput();
});

document.getElementById('pos-neg').addEventListener('click', function() {
  togglePosNeg();
});

document.getElementById('percentage').addEventListener('click', function() {
  convertToPercent();
});

document.getElementById('clear').addEventListener('click', function() {
  clearEntry();
});

document.getElementById('decimal').addEventListener('click', function() {
  selectDecimal();
});
