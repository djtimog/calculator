let input = document.getElementById("calculate");
let number = "";
let result = document.getElementById("result");
result.textContent = "";


//input values function
function inputValue(s) {
  if (s == "ans"){
    s = result.textContent;
    number += s;
  }else{
    number += s;
  }
  if(number.length <= 20){
    input.textContent = number;
  }else{
    number = "";
    input.textContent = "Maximum of 20 numbers";
  }
  return number;
}


//equalTo (=) function
function equalTo() {
  if (number == "") {
    alert("you haven't input a calculation");
  } else {
    for (let e of number) {
      if (e == "/") {
        let position = number.indexOf("/");
        let x = parseFloat(number.substring(0, position));
        let y = parseFloat(number.substring(position + 1));
        number = division(x, y);
        result.textContent = number;
      } else if (e == "*") {
        let position = number.indexOf("*");
        let x = parseFloat(number.substring(0, position));
        let y = parseFloat(number.substring(position + 1));
        number = multiplication(x, y);
        result.textContent = number;
      } else if (e == "+") {
        let position = number.indexOf("+");
        let x = parseFloat(number.substring(0, position));
        let y = parseFloat(number.substring(position + 1));
        number = addition(x, y);
        result.textContent = number;
      } else if (e == "-") {
        let position = number.indexOf("-");
        let x = parseFloat(number.substring(0, position));
        let y = parseFloat(number.substring(position + 1));
        number = subtraction(x, y);
        result.textContent = number;
      } else {
        result.textContent = number;
      }
      
    }console.log(number);
  }
  number = "";
  input.textContent = number;
}


//division function
function division(x, y) {
  return x / y;
}


//multiplication function
function multiplication(x, y) {
  return x * y;
}

//addition function
function addition(x, y) {
  return x + y;
}


//subtraction function
function subtraction(x, y) {
  return x - y;
}


//cancel (X) function
function cancel() {
  n = number.length - 1;
  number = number.replace(number[n], "");
  input.textContent = number;
  return number;
}

//clear (AC) function
function clearAll() {
  number = "";
  input.textContent = number;
  return number;
}


//reset function
function reset(){
  number = "";
  input.textContent = number;
  result.textContent = number;
  return number;
}