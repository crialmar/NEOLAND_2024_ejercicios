//?----------- Iteración #1: Arrows
//! Crea una arrow function que tenga dos parametros a y b y  que por defecto el valor de a = 10 y de b = 5. 
//! Haz que la función muestre por consola la suma de los dos parametros.

const funcionFlecha = (a = 10, b = 5) => a + b
const sum = funcionFlecha()

/*const funcionFlecha = (a = 10, b = 5) => {
   const sum = a + b
}*/

console.log("🚀 ~ sum:", sum)

//! 1.1 Ejecuta esta función sin pasar ningún parametro
const sum2 = funcionFlecha()
console.log("🚀 ~ sum2:", sum2)

//! 1.2 Ejecuta esta función pasando un solo parametro
const sum3 = funcionFlecha(1)
console.log("🚀 ~ sum3:", sum3)

//! 1.3 Ejecuta esta función pasando dos parametros
const sum4 = funcionFlecha(6, 5)
console.log("🚀 ~ sum4:", sum4)

//?----------- Iteración #2: Destructuring
//! 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
//! del objeto usando object destructuring e imprimelas por consola. Cuidado, 
//! no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let { title, gender, year } = game

console.log("🚀 ~ title:", title)
console.log("🚀 ~ gender:", gender)
console.log("🚀 ~ year:", year)

//! 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. 
//! Posteriormente imprimelo por consola.
 
const fruits = ['Banana', 'Strawberry', 'Orange'];

const [ fruit1 , fruit2, fruit3 ] = fruits; 

console.log("🚀 ~ fruit1:", fruit1)
console.log("🚀 ~ fruit2:", fruit2)
console.log("🚀 ~ fruit3:", fruit3)

//! 2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

function animalFunction2 ( { name, race } ) {
    console.log(`Mi nombre es ${name} y soy ${race}`); //*---------------> revisa! No sé qué es lo que tienes mal
}

animalFunction2(animalFunction)

//! 2.3 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. 
//! Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

//let { name, itv} = car
console.log("🚀 ~ name:", name)
console.log("🚀 ~ itv:", itv)

let [year1, year2, year3] = itv
console.log("🚀 ~ year1:", year1)
console.log("🚀 ~ year2:", year2)
console.log("🚀 ~ year3:", year3)


//?----------- Iteración #3: Destructuring
//! 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
const listCopy = [...pointsList]
console.log("🚀 ~ listCopy:", listCopy)

//! 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const listCopy2 = {...toy2}
console.log("🚀 ~ listCopy2:", listCopy2)

//! 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const listConc = [...pointsList2, ...pointsLis2]
console.log("🚀 ~ listConc:", listConc)

//! 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toyConc = {...toy, ...toyUpdate}
console.log("🚀 ~ toyConc:", toyConc)

//! 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors]
colorsCopy.splice(2,1)
console.log("🚀 ~ colorsCopy:", colorsCopy)
console.log("🚀 ~ colors:", colors)

//?----------- Iteración #4: Map
//! 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nombreUsuario = users.map(user => user.name)
console.log("🚀 ~ nombreUsuario:", nombreUsuario)

//! 4.2 Dado el siguiente array, devuelve una lista que contenga los valores  de la propiedad .name y cambia el nombre a 'Anacleto' 
//! en caso de que empiece por 'A'.

const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nombreUsuario2 = users2.map(user => {
    if(user.name.startsWith('A')) {//--------------> .startsWith()
    user.name = 'Anacleto' 
}
return user.name
})

console.log(nombreUsuario2)

//! 4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y 
//! añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
//------------> PRIMERO LA LISTA DE NAME




