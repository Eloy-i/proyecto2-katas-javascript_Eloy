// Filtra una lista de canciones para crear una playlist que solo contenga canciones de rock que duren más de 5 minutos.

const songs = [
  { title: "Bohemian Rhapsody", genre: "Rock", duration: 5.55 },
  { title: "Stairway to Heaven", genre: "Rock", duration: 7.58 },
  { title: "Billie Jean", genre: "Pop", duration: 4.54 },
  { title: "Hotel California", genre: "Rock", duration: 6.31 },
  { title: "Sweet Child o Mine", genre: "Rock", duration: 5.56 },
  { title: "Smells Like Teen Spirit", genre: "Rock", duration: 5.01 },
  { title: "Comfortably Numb", genre: "Rock", duration: 6.23 },
  { title: "Wish You Were Here", genre: "Rock", duration: 5.34 },
  { title: "Black Dog", genre: "Rock", duration: 4.54 },
  { title: "Thunderstruck", genre: "Rock", duration: 4.52 },
  { title: "Crazy Love", genre: "Pop", duration: 3.52 },
];
const rockPlaylist = songs.filter(
  (song) => song.genre === "Rock" && song.duration > 5,
);

console.log("==== ROCK SONGS de duración no apta para TikTokGen ====");
console.log(rockPlaylist);
