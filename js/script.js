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

// EVENT LISTENERS

document.querySelectorAll('.number').forEach(function(num) {
  num.addEventListener('click', function() {
    selectNumber(this);
  });
});
