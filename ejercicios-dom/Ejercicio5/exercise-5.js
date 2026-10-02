// Para que parezca una web me he tomado la libertad de meter portadas y cambiar algún disco.
const albums = [
  {
    title: "Reign in Blood",
    cover:
      "https://cdn.coveratlas.com/image/thumb/Music112/v4/6b/83/2c/6b832cb7-7234-0fb7-3930-38d9c385dc9a/23UM1IM55794.rgb.jpg/1000x1000bb.webp",
  },
  {
    title: "obZen",
    cover:
      "https://coverartarchive.org/release/81b6c5f8-98e2-4394-bdf6-0e801de0bb59/front-500",
  },
  {
    title: "This Godless Endeavor",
    cover:
      "https://cdn.coveratlas.com/image/thumb/Music125/v4/9e/01/2b/9e012bb6-9af9-66fa-a7c8-440d290947ac/886443600898.jpg/1000x1000bb.webp",
  },
  {
    title: "Iron Fist",
    cover:
      "https://cdn.coveratlas.com/image/thumb/Music126/v4/62/44/18/6244184b-d782-1f94-e3cb-12ec1203ac2b/4050538805017.jpg/1000x1000bb.webp",
  },
  {
    title: "Hate Crew Deathroll",
    cover:
      "https://cdn.coveratlas.com/image/thumb/Music126/v4/7f/1f/96/7f1f96d3-9c80-39da-0321-5ce734fc779b/5400863135249_cover.jpg/1000x1000bb.webp",
  },
];

const albumList = document.querySelector("#album-list");

for (const album of albums) {
  const li = document.createElement("li");

  li.innerHTML = `
  <h2>${album.title}</h2>
  <img src="${album.cover}" alt="${album.title}"> 
`;

  albumList.appendChild(li);
}
