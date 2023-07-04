$(document).ready(function() {
    // Click event for number buttons
    $('.number').click(function() {
      var num = $(this).val();
      insert(num);
    });
    
    // Click event for operator buttons
    $('.operator').click(function() {
      var operator = $(this).val();
      insert(operator);
    });
    
    // Click event for equals button
    $('#equals').click(function() {
      equal();
    });
    
    // Click event for clear button
    $('#clear').click(function() {
      ac();
    });
    
    // Click event for delete button
    $('#delete').click(function() {
      del();
    });
  });
  
  // Function to insert a value into the display
  function insert(num) {
    var displayVal = $('#display').val();
    displayVal += num;
    $('#display').val(displayVal);
  }
  
  // Function to evaluate the expression and display the result
  function equal() {
    var displayVal = $('#display').val();
    var result = eval(displayVal);
    $('#display').val(result);
  }
  
  // Function to clear the display
  function ac() {
    $('#display').val('0');
  }
  
  // Function to delete the last character from the display
  function del() {
    var displayVal = $('#display').val();
    displayVal = displayVal.slice(0, -1);
    $('#display').val(displayVal);
  }
  