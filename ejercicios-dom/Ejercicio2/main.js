const htmlBody = document.querySelector("body");

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const emptyDiv = document.createElement("div");
htmlBody.appendChild(emptyDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const secondDiv = document.createElement("div");
const emptyParagraph = document.createElement("p");
htmlBody.appendChild(secondDiv).appendChild(emptyParagraph);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const loopDiv = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const paragraph = document.createElement("p");
  loopDiv.appendChild(paragraph);
}
htmlBody.appendChild(loopDiv);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const dynamicParagrahp = document.createElement("p");
dynamicParagrahp.textContent = "Soy dinámico!";
htmlBody.appendChild(dynamicParagrahp);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");

for (const element of apps) {
  const li = document.createElement("li");
  li.textContent = element;
  ul.appendChild(li);
}
htmlBody.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removePar = document.querySelectorAll(".fn-remove-me");
for (const element of removePar) {
  element.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const middleParagraph = document.createElement("p");
middleParagraph.textContent = "Voy en medio!";

const firstDiv = document.querySelector("div");
firstDiv.insertAdjacentElement("afterend", middleParagraph);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divsInsert = document.querySelectorAll("div.fn-insert-here");

for (const div of divsInsert) {
  const paragraph = document.createElement("p");
  paragraph.textContent = "Voy dentro!";
  div.insertAdjacentElement("afterbegin", paragraph);
}

console.log(htmlBody);
