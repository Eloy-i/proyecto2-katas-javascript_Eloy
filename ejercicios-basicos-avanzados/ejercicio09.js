/*
Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.
*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let total = 0;

  for (const number of numberList) {
    total += number;
  }
  return total;
}

console.log(sumNumbers(numbers));
