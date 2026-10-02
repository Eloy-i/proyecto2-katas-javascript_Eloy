const randomImage = document.querySelector(".random-image");

const pokemonID = Math.floor(Math.random() * 151) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
  .then((response) => response.json())
  .then((pokemon) => {
    console.log(pokemon);

    const pokemonImage =
      pokemon.sprites.other["official-artwork"]["front_default"];

    console.log(pokemonImage);

    randomImage.src = pokemonImage;
    randomImage.alt = pokemon.name;
  });
