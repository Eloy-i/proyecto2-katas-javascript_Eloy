// Usa un bucle forof para recorrer todos los destinos del array.

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const item of placesToTravel) {
  if (item === "Murcia") {
    console.log(
      item +
        ' y tomate una marinera en "Cafe Bar", un pulpo a la murciana y un ramen miso en "Natsu". Hazme caso acho.',
    );
    continue;
  }
  console.log(item);
}
