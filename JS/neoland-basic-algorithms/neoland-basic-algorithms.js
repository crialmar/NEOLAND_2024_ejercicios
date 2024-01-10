//?----------- Iteración #1: Variables
/*
1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
1.2 Crea una variable llamada x, asigna el valor 50 a ella.
1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
*/

//! 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavoriteHero = "Hulk"

//! 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
let x = 50

//! 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
let h = 5
let y = 10

//! 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = h + y 
console.log(z);

//?----------- Iteración #2: Variables avanzadas

//! 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25. 
const character = {name: 'Jack Sparrow', age: 10}
character['age'] = 25
console.log(character);

//! 1.2 Declara 3 variables con los nombres y valores siguientes 
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 

if (firstName === 'Jon'){
	let age = 24;
	console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`)
}

//! 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes
const toy1 = {name: 'Buss myYear', price: 19};
const price1 = (toy1.price)
const toy2 = {name: 'Rallo mcKing', price: 29};
const price2 = (toy2.price)
const totalToy = (price1 + price2)

console.log(totalToy);

/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
```*/
//! 1.4
let globalBasePrice = 10000;
globalBasePrice = 25000
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

car1.finalPrice = (car1.basePrice + globalBasePrice)
car2.finalPrice = (car2.basePrice + globalBasePrice)

console.log(car1, car2)

//?----------- Iteración #3: Operadores

//! 1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
let suma = 10 * 5
console.log(suma)

//! 1.2 Divide 10 por 2 y muestra el resultado en un console.
let division = 10 / 2
console.log(division)

//! 1.3 Muestra mediante un console el resto de dividir 15 por 9.
let resto = 15 / 9
console.log(resto)

//! 1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
let p = 10
let j = 5
let o = p + j

console.log(o)

//! 1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.
let c = 10
let m = 5
let i = c * m

console.log(i)

//?----------- Iteración #4: Arrays

//! 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avenger = avengers[0]
console.log(avenger)

//! 1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = "IRONMAN"
console.log(avengers)

//! 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers3.length)

//! 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
const rickTwo = rickAndMortyCharacters.push('Morty', 'Summer')
const rickLast = rickAndMortyCharacters.pop()
console.log(rickLast)

//! 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.----->?
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const rickLess = rickAndMortyCharacters1.pop()
const rickFirst = rickAndMortyCharacters1.shift()
console.log(rickFirst, rickLast)

//! 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.splice(1,1)
console.log(rickAndMortyCharacters2)

//?----------- Iteración #5: Arrays
//! En base al código siguiente, muestra los mensajes correctos por consola.
const number1 = 10;
const number2 = 20;
const number3 = 2;
/*
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 /= number1 === 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 === number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 * 2 == number1 || number1 / 5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}*/

//?----------- Iteración #6: Bucles
/*


1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.
*/
//! 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
let number = 0
for (let number = 0; number <= 9; number++){
	console.log(number);
}

//! 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
let bucle = 0
for (let bucle = 0; bucle <=9; bucle++){
	if(bucle % 2 === 0){
		console.log(bucle)
	}
}


//! 1.3 Crea un bucle para conseguir dormir contando ovejas
const ovejas = 0
while (ovejas < 9) {
	console.log('Intentando dormir');
	ovejas == ovejas + 1;
	break;
}
console.log('Dormido')

/*
const ovejas = 10
switch (ovejas) {
	case 1:
		console.log('Intentando dormir');
		break;
	case 2:
		console.log('Intentando dormir');
		break;
	default:
		console.log('Dormido');
		break;
}*/

/*if (ovejas === 1){
	console.log('Intentando dormir 🐑');
} else if (ovejas === 2){
	console.log('Intentando dormir 🐑');
} else if (ovejas === 3){
	console.log('Intentando dormir 🐑');
} else if (ovejas === 4){
	console.log('Intentando dormir 🐑');
} else if (ovejas === 5){
	console.log('Intentando dormir 🐑');
} else if (ovejas === 6){
	console.log('Intentando dormir 🐑');
} else if (ovejas === 7){
	console.log('Intentando dormir 🐑');
} else if (ovejas === 8){
	console.log('Intentando dormir 🐑');
} else if (ovejas === 9){
	console.log('Intentando dormir 🐑');
} else {
	console.log('Dormido!');
}*/



//node neoland-basic-algorithms