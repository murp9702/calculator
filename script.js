let current = 0;
let previous = 0;
let symbol = 0;

// Display entry
function calculate(digit) {
  if (current === 0) {
    current = digit;
  } else{
    current = current + digit;
  };
  document.getElementById("display").innerHTML = current;
};

// Clear current entry
function clear() {
  current = 0;
  document.getElementById("display").innerHTML = current;
};

// Clear all current entries and previous entries
function clearAll() {
  current = 0;
  previous = 0;
  symbol = 0;
  document.getElementById("display").innerHTML = current;
};

// Store current input and sets an operator
function operate(digit) {
  symbol = digit;
  previous = current;
  current = 0;
};

// Calculate and output answer
function outputCalc() {
  if (symbol === 1) {current = eval(previous) * eval(current);}
  if (symbol === 2) {current = eval(previous) / eval(current);}
  if (symbol === 3) {current = eval(previous) - eval(current);}
  if (symbol === 4) {current = eval(previous) + eval(current);}
  previous = 0;
  symbol = 0;
  document.getElementById("display").innerHTML = current;
}

//keyboard functions
$(document).keypress(function(event){
    switch(event.which){
      case 8:
        current = 0;
        document.getElementById("display").innerHTML = current;
        break;
      case 49:
        calculate('1');
        break;
      case 50:
        calculate('2');
        break;
      case 51:
        calculate('3');
        break;
      case 52:
        calculate('4');
        break;
      case 53:
        calculate('5');
        break;
      case 54:
        calculate('6');
        break;
      case 55:
        calculate('7');
        break;
      case 56:
        calculate('8');
        break;
      case 57:
        calculate('9');
        break;
      case 48:
        calculate('0');
        break;
      case 43:
        operate(4);
        break;
      case 45:
        operate(3);
        break;
      case 47:
        operate(2);
        break;
      case 42:
        operate(1);
        break;
      case 61:
        outputCalc();
        break;
      case 99:
        clearAll();
        break;

}
});
