//?----------- Iteración #1: Mix for e includes
//! Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e 
//! imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. 
//! Para filtrar las categorías puedes ayudarte de la función .includes()

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
    ]//*------------> categorías son comedia, aventura, accion, thriller y animación

let categoriaLista = []

for (let movie of movies) {//*-------> Primer paso: entrar en el array. Buscamos las películas dentro de Movies
    for(let category of movie.categories){//*---------> Segundo paso: entrar en el objeto. Buscamos la categoría dentro de cada movie
        if(!categoriaLista.includes(category)) { //*---------> Tercer paso: hay que meter las categorías sin repetir dentro de categoriaLista. Para ello, empezamos 
        categoriaLista.push(category)//*---------------------> negando el if para qu entienda que si NO hay esa categoría la lance dentro del array vacío
    }
    }
}

console.log("🚀 ~ categoriaLista:", categoriaLista)


//?----------- Iteración #2: Mix Fors
//! Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
    {name: 'Manolo el del bombo',
    favoritesSounds: {
    waves: {format: 'mp3', volume: 50},
    rain: {format: 'ogg', volume: 60},
    firecamp: {format: 'mp3', volume: 80},
    }
    },
    {name: 'Mortadelo',
    favoritesSounds: {
    waves: {format: 'mp3', volume: 30},
    shower: {format: 'ogg', volume: 55},
    train: {format: 'mp3', volume: 60},
    }
    },
    {name: 'Super Lopez',
    favoritesSounds: {
    shower: {format: 'mp3', volume: 50},
    train: {format: 'ogg', volume: 60},
    firecamp: {format: 'mp3', volume: 80},
    }
    },
    {name: 'El culebra',
    favoritesSounds: {
    waves: {format: 'mp3', volume: 67},
    wind: {format: 'ogg', volume: 35},
    firecamp: {format: 'mp3', volume: 60},
    }
    },
    ]

/*let usuarios = []
    
for (let user of users){
    if(!usuarios.includes(user)){
    usuarios.push(user)
    }

}//*--------------------------> tienes un array con la información sobre los usuarios de la cual no puedes acceder a los sonidos
console.log("🚀 ~ usuarios:", usuarios)
//*---------------------------> el siguiente paso es acceder a sus sonidos favoritos
let sonidosFavoritos = []

for (let favoritesSounds of usuarios){
    if(!sonidosFavoritos.includes(usuarios.favoritesSounds)){
        sonidosFavoritos.push(usuarios.favoritesSounds)
    }

}
console.log("🚀 ~ sonidosFavoritos:", sonidosFavoritos)


    //console.log("🚀 ~ claveSonido:", claveSonido)*/

                            //?---------- NECESITAS HACERLO ANIDADO PARA QUE FUNCIONE

let totalSonido = []
let totalVolumen = []

for (let user of users){                                            //* accedes a los usuarios de users
    for(let sound in user.favoritesSounds){                         //* accedes a los sonidos dentro de favoritesSounds
    let volume = user.favoritesSounds[sound].volume                 //* obtienes el volumen
    totalVolumen += volume                                          //* sumas el volumen al total de volumenes dentro de totalVolumen
    totalSonido ++;                                                 //* aumentas en 1 el contador de sonidos
    }
}

let mediaVolumen = totalVolumen / totalSonido                      

console.log(`La media es ${mediaVolumen}`)
    // For in para sacar las claves, For of para los valores


//?----------- Iteración #3: Mix Fors
//! Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. 
//! Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//! Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

const users2 = [
    {name: 'Manolo el del bombo',
    favoritesSounds: {
    waves: {format: 'mp3', volume: 50},
    rain: {format: 'ogg', volume: 60},
    firecamp: {format: 'mp3', volume: 80},
    }
    },
    {name: 'Mortadelo',
    favoritesSounds: {
    waves: {format: 'mp3', volume: 30},
    shower: {format: 'ogg', volume: 55},
    train: {format: 'mp3', volume: 60},
    }
    },
    {name: 'Super Lopez',
    favoritesSounds: {
    shower: {format: 'mp3', volume: 50},
    train: {format: 'ogg', volume: 60},
    firecamp: {format: 'mp3', volume: 80},
    }
    },
    {name: 'El culebra',
    favoritesSounds: {
    waves: {format: 'mp3', volume: 67},
    wind: {format: 'ogg', volume: 35},
    firecamp: {format: 'mp3', volume: 60},
    }
    },
    ]
//----------------------- Waves: 3, rain: 1, firecamp: 3, shower: 2, train: 2, wind: 1
let usuarios2 = []

let sound = []
   
    
for (let user of users2){
    for (let sound in users2.favoritesSounds){
        /*let sonido = user.favoritesSounds.sound
        sound += sonido
        usuarios2++*/
        console.log(`${sound}: ${users2.favoritesSounds[sound]}`)
    }
}//-------------------------------> se han extraido los usuarios

console.log("🚀 ~ usuarios2:", usuarios2)

console.log("🚀 ~ sound:", sound)
/*
for (let sound in usuarios2){
    acc = 0
    if (!accSound.includes(sound)){
         acc++
        accSound.push(sound)
       
    }
}
console.log("🚀 ~ accSound:", accSound)*/

//?----------- Iteración #4: Métodos findArrayIndex
//! Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando 
//! el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

let arrAnimales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'] //----- usar indexOf()
console.log(arrAnimales.indexOf('Caracol'))

function findArrayIndex(array, text){
    let index = array.indexOf(text)
    return index;
}

let indexPalabra = findArrayIndex(arrAnimales, 'Mosquito')//-----------> resultado = 1
console.log("🚀 ~ indexPalabra:", indexPalabra)

let indexPalabra2 = findArrayIndex(arrAnimales, 'Perro')//-----------> resultado = -1----- esa palabra no existe
console.log("🚀 ~ indexPalabra2:", indexPalabra2)

let indexPalabra3 = findArrayIndex(arrAnimales, 'Ajolote')//-----------> resultado = 3
console.log("🚀 ~ indexPalabra3:", indexPalabra3)


//?----------- Iteración #5: Función rollDice
//! Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar 
//! el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. 
//! Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript Math.random();

/** Math.random():
 * Si no se le da parámetros hará un número decimal random entre 0 y 1
 * Para que sea un número entero se puede usar Math.floor() que redondea a la alza pero empieza a contar desde 0. Habría que poner +1 para que empiece a contar desde 1
 * Entonces habría que usar Math.ceil() que empieza desde el 1
 */

let rollDice = () => {
    return Math.ceil(Math.random() * 6) //*-----------> EJEMPLO CON Math.ceil()
}

let tirada = rollDice()
console.log("🚀 ~ tirada:", tirada)

let rollDice2 = () => {
   return Math.floor(Math.random() * 6) + 1 //*-----------> EJEMPLO CON Math.ceil()
}

let tirada2 = rollDice2()
console.log("🚀 ~ tirada2:", tirada2)

//?----------- Iteración #6: Función swap
//! Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar 
//! la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

let nombresGraciosos = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

let swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]//*-----> hecho mediante destructuring
}

/*let swap = (arr, index1, index2) => { //*--------> otro método
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
}*/

let cambioIndex = swap(nombresGraciosos, 0, 3)
console.log("🚀 ~ nombresGraciosos:", nombresGraciosos)//*------> console.log del array para ver el cambio, si lo haces de cambioIndex sale undefined

