// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btnShowMe = document.querySelector(".showme");
console.log(btnShowMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector("#pillado");
console.log(h1Pillado);

//1.3 Usa querySelector para mostrar por consola todos los p
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const h4Pokemon = document.querySelectorAll(".pokemon");
console.log(h4Pokemon);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log(testMe[2]);

//Arriba estoy usando el array para el acceso, pero añado este apartado para acceder directamente con querySelector y sacando el tercero de su tipo.
const thirdElement = document.querySelector(
  '[data-function="testMe"]:nth-of-type(3)',
);
console.log(thirdElement);
