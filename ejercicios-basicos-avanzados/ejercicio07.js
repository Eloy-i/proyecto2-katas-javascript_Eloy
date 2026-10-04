/*
Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
*/

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else if (numberOne === numberTwo) {
    return "¿¡Pero qué, coño!?";
  } else {
    return numberTwo;
  }
}

console.log(greaterNumber(10, 2));
console.log(greaterNumber(10, 10));
console.log(greaterNumber(23, 23.00000001));
