// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

const starWarsMoviesForDecades = {
  "70's": [],
  "80's": [],
  "90's": [],
  "00's": [],
  "10's": [],
};

for (const movie of starWarsMovies) {
  if (movie.releaseYear < 1980) {
    starWarsMoviesForDecades["70's"].push(movie);
  } else if (movie.releaseYear < 1990) {
    starWarsMoviesForDecades["80's"].push(movie);
  } else if (movie.releaseYear < 2000) {
    starWarsMoviesForDecades["90's"].push(movie);
  } else if (movie.releaseYear < 2010) {
    starWarsMoviesForDecades["00's"].push(movie);
  } else {
    starWarsMoviesForDecades["10's"].push(movie);
  }
}

console.log(starWarsMoviesForDecades);
