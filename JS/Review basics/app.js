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

for (let movie of movies) {//-------> Primer paso: entrar en el array. Buscamos las películas dentro de Movies
    for(let category of movie.categories){//---------> Segundo paso: entrar en el objeto. Buscamos la categoría dentro de cada movie
        if(!categoriaLista.includes(category)) { //---------> Tercer paso: hay que meter las categorías sin repetir dentro de categoriaLista. Para ello, empezamos 
        categoriaLista.push(category)//---------------------> negando el if para qu entienda que si NO hay esa categoría la lance dentro del array vacío
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

for (let user of users){                                            //* sacas los usuarios de users
    for(let sound in user.favoritesSounds){                         //* accedes a los sonidos dentro de favoritesSounds
    let volume = user.favoritesSounds[sound].volume                 //* estableces que volumen será el volumen de cada 
    totalVolumen += volume
    totalSonido ++;
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

let usuarios2 = []
    
for (let user of users2){
    if(!usuarios2.includes(user)){
    usuarios2.push(user)
    }
}//-------------------------------> se han extraido los usuarios

let accSound = []

for (let sound in user){
    acc = 0
    if (!accSound.includes(sound)){
         acc++
        accSound.push(sound)
       
    }
}
console.log("🚀 ~ accSound:", accSound)
