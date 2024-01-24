//? 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const buttonShowMe = document.querySelector(".showme")
console.log("🚀 ~ buttonShowMe:", buttonShowMe)

//? 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1Pillado = document.querySelector("#pillado")
console.log("🚀 ~ h1Pillado:", h1Pillado)

//? 1.3 Usa querySelector para mostrar por consola todos los p

const allP = document.querySelectorAll("p")
console.log("🚀 ~ allP:", allP)

//? 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const allPokemon = document.querySelectorAll(".pokemon")
console.log("🚀 ~ allPokemon:", allPokemon)

//? 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const allDataFunction = document.querySelectorAll("[data-function='testMe']")
console.log("🚀 ~ allDataFunction:", allDataFunction)

//? 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const tercerElemento = allDataFunction[2]
console.log("🚀 ~ tercerElemento:", tercerElemento)

