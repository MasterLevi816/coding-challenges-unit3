/*Write a function that takes the base and height of a triangle and return its area.*/

const input = require('readline-sync');

function triangle () {

let base = input.question ('Enter the number for triangle base: ');

let height = input.question ('Enter the number for triangle height: ');

let area = (base * height) / 2;

  console.log(`The area of the triangle is ${area}`);
  
  return area;

};

triangle()

