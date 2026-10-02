// promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let sumaTotal = 0;

  for (const num of numberList) {
    sumaTotal += num;
  }
  return sumaTotal / numberList.length;
}

console.log("Media -> " + average(numbers));
