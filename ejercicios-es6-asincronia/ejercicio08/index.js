const characterList = document.querySelector("#character-list");

const imageCharacter = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((characters) => {
    characterList.innerHTML = `<option value="">Selecciona un personaje...</option>`;

    for (const character of characters) {
      characterList.innerHTML += `
        <option value="${character.id}">${character.fullName}</option>
      `;
    }

    characterList.addEventListener("change", (e) => {
      if (!e.target.value) {
        imageCharacter.src = "";
        imageCharacter.alt = "";
        imageCharacter.title = "";
      } else {
        const characterSelected = characters.find(
          (c) => c.id == e.target.value,
        );
        imageCharacter.src = characterSelected.imageUrl;
        imageCharacter.alt = characterSelected.fullName;
        imageCharacter.title = characterSelected.title;
      }
    });
  })
  .catch((error) => {
    document.body.innerHTML = `<h2>Error al comunicar con la base de datos</h2>`;
  });
