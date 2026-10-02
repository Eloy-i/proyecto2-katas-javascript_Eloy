// Promedio mezclado. No tenía claro si el ejercicio pedia promedio de cada o global y he hecho los tres

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let total = 0;
  let cantidad = 0;
  for (const item of list) {
    if (typeof item === "string") {
      total += item.length;
      cantidad++;
    }
  }
  return total / cantidad;
}

function averageNumber(list) {
  let total = 0;
  let cantidad = 0;
  for (const item of list) {
    if (typeof item === "number") {
      total += item;
      cantidad++;
    }
  }
  return total / cantidad;
}

function averageTotal(list) {
  let total = 0;
  for (const item of list) {
    if (typeof item === "string") {
      total += item.length;
    } else if (typeof item === "number") {
      total += item;
    }
  }
  return total / list.length;
}

console.log("Promedio números: " + averageNumber(mixedElements));
console.log("Promedio longitud de los strings: " + averageWord(mixedElements));
console.log("Promedio mezclado: " + averageTotal(mixedElements));
