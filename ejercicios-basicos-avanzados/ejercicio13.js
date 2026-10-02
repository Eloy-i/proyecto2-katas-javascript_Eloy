/*
Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
*/

const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, targetWord) {
  for (const name of nameList) {
    if (name === targetWord) {
      return [true, nameList.indexOf(name)];
    }
  }
  return false;
}

console.log(nameFinder(names, "Xabier"));

console.log(nameFinder(names, "Pliskin"));
