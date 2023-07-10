/*Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
For example: if the input string is "Hello World and Coders" 
then your program should return the string sredoC dna dlroW olleH.
*/
//const input = require('readline-sync');

function FirstReverse(str) {

  //let reverse= input.question ("Write a sentence: ");
  let reverse = "";

  for(let i=0; i <str.length; i++){
    reverse = str[i] + reverse;
  }

  //return str;
  return reverse;

}

console.log(FirstReverse("Hello World"));

// keep this function call here
//console.log(FirstReverse(readline()));