//?----------- Iteración #1: Usa includes
//! Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//! Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++) {
    console.log(products[i].includes('Camiseta'));
  }

//?----------- Iteración #2: Condicionales especiales
//!Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
//!Una vez lo tengas compruébalo con un console.log.

/*const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
    ]

*/
//?----------- Iteración #3: Probando For...of
//! Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let lugares of placesToTravel) {
    console.log(lugares);
  }

//?----------- Iteración #4: Probando For...in
//!Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
name: 'Wormuck',
race: 'Cucusumusu',
planet: 'Eden',
weight: '259kg'
}

for (let property in alien){
    console.log(`${property} = ${alien[property]}`);
}

//?----------- Iteración #5: Probando For
//! Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
//! Imprime en un console log el array

const placesToTravel2 = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]

//for (let i = 0; )
