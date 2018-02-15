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
  }
  result = result.toString();
  document.getElementById('screen').value = result;
  console.log(result);
}

// EVENT LISTENERS

document.querySelectorAll('.number').forEach(function(num) {
  num.addEventListener('click', function() {
    selectNumber(this);
  });
});
