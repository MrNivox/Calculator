
let currentInput = '';
let currentOperator = '';
let previousInput = '' ;


function appendNumber(number) 
{
  currentInput += number
  document.getElementById('display').value = `${previousInput} ${currentOperator} ${currentInput}`;
}


function appendOperator(operator){

  if(currentInput === '')return;
  if(previousInput !== ''){
    Calculate();
  }
  currentOperator = operator
  previousInput = currentInput
  currentInput = ''
  document.getElementById('display').value = `${previousInput} ${currentOperator}`
}


function Calculate() {
  if(previousInput === '' || currentInput === ''){return}
  let prev = parseFloat(previousInput)
  let curre = parseFloat(currentInput)
  let result;
  switch (currentOperator){
    case '+':
      result = prev + curre
      break
    case '-':
      result = prev - curre
      break
    case '*':
      result = prev * curre
      break
    case '/':  
      if(prev === 0){
        alert("cannot divide by zeroe!")
        return;}
      result = prev / curre
      break
    default:
      return;

  }
  currentInput = result.toString();
  currentOperator = ''
  previousInput = ''
  document.getElementById('display').value = currentInput

}










function Clear() {
 currentInput = '';
 currentOperator = '';
 previousInput = '';
 document.getElementById('display').value = '';
}




