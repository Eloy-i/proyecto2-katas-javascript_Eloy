//Dada una lista de álbumes de música, utiliza un bucle para sumar todas las duraciones solo de los álbumes de rock y luego imprime el total de estas duraciones por consola.

const albums = [
  { title: "Led Zeppelin IV", genre: "Rock", duration: 42.19 },
  { title: "The Dark Side of the Moon", genre: "Rock", duration: 42.49 },
  { title: "Back in Black", genre: "Rock", duration: 42.11 },
  { title: "Hotel California", genre: "Rock", duration: 43.08 },
  { title: "Abbey Road", genre: "Rock", duration: 47.23 },
  { title: "Thriller", genre: "Pop", duration: 42.19 },
  { title: "A Night at the Opera", genre: "Rock", duration: 43.08 },
  { title: "The Wall", genre: "Rock", duration: 81.0 },
  { title: "Born to Run", genre: "Rock", duration: 39.26 },
  { title: "The Joshua Tree", genre: "Rock", duration: 50.11 },
];

let totalDuration = 0;

for (const album of albums) {
  if (album.genre === "Rock") {
    totalDuration += album.duration;
  }
}

console.log("La duración de tus discos de rock sumada es: " + totalDuration);

// TODO: Revisar la conversión de los segundos.

// Edit 04/10/2026 Iba a enviarlo y dando un repaso rápido me encuentro este todo...

// No se si me estoy complicando la vida y hay cosas mas sencillas pero he metido todo en una función... Filtro el genero y en el reduce acumulo en un objeto los minutos (sumando la duración truncada) y los segundos como un entero. Luego recordando un ejercicio de Java que puso borja separo el total de segundo en la parte correspondiente a los minutos y el modulo para los segundos.

function calcularDuracionGenero(listaDiscos, genero) {
  const duracionTotal = listaDiscos
    .filter((album) => album.genre === genero)
    .reduce(
      (acc, album) => {
        acc.minutos += Math.trunc(album.duration);

        acc.segundos += Math.round(
          (album.duration - Math.trunc(album.duration)) * 100,
        );
        return acc;
      },
      { minutos: 0, segundos: 0 },
    );

  let minutosObtenidos = Math.trunc(duracionTotal.segundos / 60);
  let segundosRestantes = (duracionTotal.segundos % 60) / 100;

  return duracionTotal.minutos + minutosObtenidos + segundosRestantes;
}

console.log(
  `La duración de tus discos de rock sumada en condiciones es de ${calcularDuracionGenero(albums, "Rock")}`,
);
