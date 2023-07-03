$(document).ready(function() {
    var display = $('#display');
    var currentNumber = "";
    var operator = "";
    var previousResult = 0;
    var shouldClearDisplay = false;
  
    $('.number').click(function() {
      if (shouldClearDisplay) {
        currentNumber = "";
        shouldClearDisplay = false;
      }
      if (!currentNumber.startsWith("0") || currentNumber.indexOf(".") !== -1) {
        currentNumber += $(this).val();
      }
      display.text(currentNumber);
    });
  
    $('.operator').click(function() {
      if (currentNumber !== "") {
        if (operator === "") {
          previousResult = parseFloat(currentNumber);
        } else {
          if (operator === "=") {
            operator = $(this).val(); // Reset the operator if it's "="
            previousResult = parseFloat(currentNumber);
          } else {
            previousResult = calculate(previousResult, parseFloat(currentNumber), operator);
            display.text(previousResult);
          }
        }
      }
      operator = $(this).val();
      shouldClearDisplay = true;
    });
  
    $('#decimal').click(function() {
      if (shouldClearDisplay) {
        currentNumber = "0.";
        shouldClearDisplay = false;
      } else if (currentNumber.indexOf(".") === -1) {
        currentNumber += ".";
      }
      display.text(currentNumber);
    });
  
    $('#clear').click(function() {
      currentNumber = "";
      operator = "";
      previousResult = 0;
      shouldClearDisplay = false;
      display.text("0");
    });
  
    $('#equals').click(function() {
      if (operator !== "") {
        if (operator === "=") {
          operator = $(this).val(); 
          previousResult = parseFloat(currentNumber);
        } else {
          var result = calculate(previousResult, parseFloat(currentNumber), operator);
          display.text(result);
          previousResult = result;
          operator = "";
        }
        shouldClearDisplay = true;
      } else {
        display.text("Invalid expression");
      }
    });
  
    function calculate(num1, num2, operator) {
      if (operator === "+") {
        return num1 + num2;
      } else if (operator === "-") {
        return num1 - num2;
      } else if (operator === "*") {
        return num1 * num2;
      } else if (operator === "/") {
        return num1 / num2;
      } else {
        return num2;
      }
    }
  });