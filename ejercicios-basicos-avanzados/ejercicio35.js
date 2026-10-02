// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  let totalMutantsWPower = 0;

  mutants.forEach((mutant) => {
    if (mutant.power.toLowerCase() === power.toLowerCase()) {
      totalMutantsWPower++;
    }
  });

  if (totalMutantsWPower > 0) {
    return "Hay " + totalMutantsWPower + " xMen con el poder de " + power;
  }
  return "No se ha encontrado a ningún mutante con ese poder";
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "esna"));
