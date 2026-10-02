// Usa un bucle para crear 3 arrays de películas filtrados por categorías.
// Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const shortMovies = [];
const mediumMovies = [];
const longMovies = [];

for (const movie of movies) {
  if (movie.durationInMinutes >= 200) {
    longMovies.push(movie);
  } else if (movie.durationInMinutes >= 100) {
    mediumMovies.push(movie);
  } else {
    shortMovies.push(movie);
  }
}

console.log("Colección de pelis cortas:");
console.log(shortMovies);
console.log("Colección de pelis medianas:");
console.log(mediumMovies);
console.log("Colección de pelis largas:");
console.log(longMovies);
