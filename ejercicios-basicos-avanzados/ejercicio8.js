/* 
Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
*/

const ff9Party = [
  "Yitán Tribal",
  "Garnet Til Alexandros",
  "Vivi Ornitier",
  "Adalbert Steiner",
  "Freija Crescent",
  "Quina Quen",
  "Eiko Carol",
  "Amarant Coral",
];
function findLongestWord(stringList) {
  let palabraLarga = "";
  for (const palabra of stringList) {
    if (palabra.length > palabraLarga.length) {
      palabraLarga = palabra;
    }
  }
  return palabraLarga;
}

console.log("Nombre más largo: " + findLongestWord(ff9Party));
