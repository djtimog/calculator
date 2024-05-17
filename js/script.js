let input = document.getElementById("calculate");
let number = "";
let result = document.getElementById("result");
result.textContent = "";

//input values function
function inputValue(s) {
  if (s == "ans") {
    s = result.textContent;
    number += s;
  } else {
    number += s;
  }
  if (number.length <= 20) {
    input.textContent = number;
  } else {
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
      if (e == "^") {
        let position = number.indexOf("^");
        number = exponential(position);
      }
    }
    number = evaluateExpression(number);
    result.textContent = number;
  }
  number = "";
  input.textContent = number;
}

function evaluateExpression(expression) {
  try {
    return Function(`'use strict'; return (${expression})`)();
  } catch (error) {
    console.error("Error evaluating expression:", error);
    result.textContent = `Error evaluating expression:, ${error}`;
    return null;
  }
}

// //division function
// function division(position) {
//   let x = parseFloat(number.substring(-1, position));
//   if (isNaN(x)){
//     x = 0;
//   }
//   let y = parseFloat(number.substring(position + 1));
//   if (isNaN(y)){
//     y = 0;
//   }
//   return x / y;
// }

// //multiplication function
// function multiplication(position) {
//   let x = parseFloat(number.substring(-1, position));
//   if (isNaN(x)){
//     x = 0;
//   }
//   let y = parseFloat(number.substring(position + 1));
//   if (isNaN(y)){
//     y = 0;
//   }
//   return x * y;
// }

// //addition function
// function addition(position) {
//   let x = parseFloat(number.substring(-1, position));
//   if (isNaN(x)){
//     x = 0;
//   }
//   let y = parseFloat(number.substring(position + 1));
//   if (isNaN(y)){
//     y = 0;
//   }
//   return x + y;
// }

// //subtraction function
// function subtraction(position) {
//   let x = parseFloat(number.substring(-1, position));
//   if (isNaN(x)){
//     x = 0;
//   }
//   let y = parseFloat(number.substring(position + 1));
//   if (isNaN(y)){
//     y = 0;
//   }
//   return x - y;
// }

//exponential function
function exponential(position) {
  let x = parseFloat(number.substring(-1, position));
  let y = parseFloat(number.substring(position + 1));
  return x ** y;
}

//cancel (X) function
function cancel() {
  number = number.slice(0, -1);
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
function reset() {
  number = "";
  input.textContent = number;
  result.textContent = number;
  return number;
}

// calculate function
// function calculate(number){
//   for (let e of number) {
// //     if (e == "/") {
// //       let position = number.indexOf("/");
// //       number = division(position);
// //     } else if (e == "*") {
// //       let position = number.indexOf("*");
// //       number = multiplication(position);
// //     } else if (e == "+") {
// //       let position = number.indexOf("+");
// //       number = addition(position);
// //     } else if (e == "-") {
// //       let position = number.indexOf("-");
// //       number = subtraction(position);
// //     } else
//       if(e == "^"){
//         let position = number.indexOf("^");
//         number = exponential(position);
//       }
//   }
//   return number;
// }

//using a try, catch (and throw if there is an error) an error code

//using reg exp

// function calculateExpression(expression) {
//   const numbers = expression.match(/[-+]?\d+(\.\d+)?/g) || [];
//   let total = 0;
//   for (const num of numbers) {
//       total += parseFloat(num);
//   }
//   return total;
// }

//result.textContent = calculateExpression(number);
