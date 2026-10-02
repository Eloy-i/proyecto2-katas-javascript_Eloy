/*
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
*/

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  if (
    index1 < 0 ||
    index1 > array.length - 1 ||
    index2 < 0 ||
    index2 > array.length - 1
  ) {
    return "Los indices se encuentran fuera de los límites del array";
  }

  let kingOfTheMountain = array[index1];

  array[index1] = array[index2];
  array[index2] = kingOfTheMountain;

  return array;
}

console.log(swap(fantasticFour, 1, 3));

console.log(swap(fantasticFour, 0, -3));
