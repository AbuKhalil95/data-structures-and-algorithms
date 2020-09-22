'use strict';

function balancedParenthesesTest(string) {
  let inputArr = string.split('');
  let matchArr = [];

  if ((inputArr[0] === ')' || inputArr[0] === '}' || inputArr[0] === ']')) {
    return false;
  }

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === '(' || inputArr[i] === '{' || inputArr[i] === '[' ) {
      matchArr.push(inputArr[i]);
    }

    if ((inputArr[i] === ')' || inputArr[i] === '}' || inputArr[i] === ']')) {
      switch (inputArr[i]) {
        case '(': 
          inputArr[i] == ')' ? matchArr.pop() : false;
          break;
        case '{': 
          inputArr[i] == '}' ? matchArr.pop() : false;
          break;
        case '[': 
          inputArr[i] == ']' ? matchArr.pop() : false;
          break;
      }
    }
  }
  if (matchArr.length == 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = balancedParenthesesTest;
