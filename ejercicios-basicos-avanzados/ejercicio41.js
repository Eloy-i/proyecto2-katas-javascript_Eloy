/*
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()
*/

function rollDice(sides) {
  if (sides <= 0) {
    return;
    // PD:En caso de ser una función que va a interactuar con un usuario real, en este if mandaría un error capturable.
  }

  const result = Math.trunc(Math.random() * sides + 1);
  return result;
}

console.log("Lanzamiento de dado de 6 caras: " + rollDice(6));

console.log("Lanzamiento de dado del mundo espejado: " + rollDice(-6));

console.log("Lanzamiento de dado de 20 caras: " + rollDice(20));

console.log("Lanzamiento de dado de 1000 caras: " + rollDice(1000));
