/*
Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
*/

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  //Iba a devolver un string de "no encontrado" pero siguiendo un poco la filosofía de java de respetar tipos, aunque aquí no haga falta, devuelvo un -1. Creo que lo mejor para usarlo en la siguiente función.
  return -1;
}

function removeElement(array, text) {
  const elementIndex = findArrayIndex(array, text);

  if (elementIndex === -1) {
    console.log(text + " no se encuentra en la lista");
    return;
  }

  const copiedArray = array.slice();

  copiedArray.splice(elementIndex, 1);

  return copiedArray;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Doku"));
console.log(findArrayIndex(mainCharacters, "Han Solo"));

console.log("Array original:");
console.log(mainCharacters);

console.log("Nuevo array con elemento eliminado:");
console.log(removeElement(mainCharacters, "Rey"));

// Pueba de elemento no encontrado

removeElement(mainCharacters, "Hari Sheldon");
