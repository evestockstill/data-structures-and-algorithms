/* eslint-disable no-console */
let isBalancedParenthesis = (str) => {

  return !str.split('').reduce((upToPreviousCharacter, thisCharacter) => {
    if(thisCharacter === '(' || thisCharacter === '{' || thisCharacter === '[') {
      return ++upToPreviousCharacter;
    } else if(thisCharacter === ')' || thisCharacter === '}' || thisCharacter === ']') {
      return --upToPreviousCharacter;
    }

    return upToPreviousCharacter;
  }, 0);
};
console.log(isBalancedParenthesis('[()]{}{[()()]()}')); 
