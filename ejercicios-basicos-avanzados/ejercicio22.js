// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let i2 = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    if (i2 < fruits.length) {
      foodSchedule[i].name = fruits[i2];
      foodSchedule[i].isVegan = true;
      i2++;
    } else {
      console.log("Nos hemos quedado sin opciones veganas.");
      break;
    }
  }
}

console.log(foodSchedule);
