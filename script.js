document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', () => {
      document.querySelectorAll('.square').forEach(s => s.classList.remove('active'));
      square.classList.add('active');
    });
  });

  

  document.getElementById('sellingPlan7314420596916').addEventListener('change', function() {
    var selectedValue = this.value;
    console.log('Selected delivery plan value:', selectedValue);
  
    // You can perform actions based on the selected value
    // For example, updating some UI elements or sending data to a server
  });
  
  