document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.btn');
  const clear = document.getElementById('clear');
  const equals = document.getElementById('equals');
  
  let currentInput = '';
  let operator = '';
  let previousInput = '';

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const value = this.getAttribute('data-value');
          
          if (value === '+' || value === '-' || value === '*' || value === '/') {
              operator = value;
              previousInput = currentInput;
              currentInput = '';
          } else {
              currentInput += value;
          }
          display.textContent = currentInput;
      });
  });

  clear.addEventListener('click', function() {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '';
  });

  equals.addEventListener('click', function() {
      let result = 0;
      switch(operator) {
          case '+':
              result = parseFloat(previousInput) + parseFloat(currentInput);
              break;
          case '-':
              result = parseFloat(previousInput) - parseFloat(currentInput);
              break;
          case '*':
              result = parseFloat(previousInput) * parseFloat(currentInput);
              break;
          case '/':
              result = parseFloat(previousInput) / parseFloat(currentInput);
              break;
      }
      display.textContent = result;
      currentInput = result;
      previousInput = '';
      operator = '';
  });
});
