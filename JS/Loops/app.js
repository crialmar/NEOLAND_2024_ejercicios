//?----------- Iteración #1: Usa includes
//! Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//! Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

 for (let i = 0; i < products.length; i++) {
    if (products[i].includes('Camiseta')) {
      console.log(products[i]);
    }
  } //*-------------------------------------> con este aparece pero editas el array original. Probar de otra forma si tienes tiempo

/*let productsFiltred = []
for (let i = 0; i < products.length; i++) {
    let sinCamiseta = products[i].includes('Camiseta'); 
    productsFiltred.push(sinCamiseta)
    
  }*/
  

//console.log(productsFiltred)

//?----------- Iteración #2: Condicionales especiales
//!Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
//!Una vez lo tengas compruébalo con un console.log.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
    ]

let alumnosAprobados = []

for (let alumn of alumns) {
  if(alumn.T1 === true || alumn.T2 === true || alumn.T3 === true) {
    alumn.isApproved = true
  } else {
  alumn.isApproved = false
  } 
  alumnosAprobados.push(alumn)
}

console.log("🚀 ~ alumnosAprobados:", alumnosAprobados)
//console.log("🚀 ~ alumns:", alumns)    


//?----------- Iteración #3: Probando For...of
//! Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let lugares of placesToTravel) {
    console.log("🚀 ~ lugares:", lugares)
    
  }

//?----------- Iteración #4: Probando For...in
//! Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

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

for (let i = placesToTravel2.length - 1; i >= 0; i--) {
  if (placesToTravel2[i].id === 11 || placesToTravel2[i].id === 40) {
      placesToTravel2.splice(i, 1);
      
  }
}

console.log("🚀 ~ placesToTravel2:", placesToTravel2)  //*probar otra opción con delete si tienes tiempo
  


//?----------- Iteración #6: Mixed For...of e includes
//! Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
//! Recuerda que puedes usar la función .includes() para comprobarlo

const toys = [
  {id: 5, name: 'Buzz MyYear'},
  {id: 11, name: 'Action Woman'},
  {id: 23, name: 'Barbie Man'},
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]

const toysFilter = []

for (let clave of toys) {
  if (!clave.name.includes("gato")) { //------------------- al poner ! delante de clave.name.includes() haces que signifique "si NO incluye gato en name..."
    toysFilter.push(clave)
  }
}

console.log("🚀 ~ toysFilter:", toysFilter)



//?----------- Iteración #7: For...of avanzado
//! Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) 
//! al array popularToys. Imprimelo por consola...

const popularToys = [];
const toys2 = [
{id: 5, name: 'Buzz MyYear', sellCount: 10},
{id: 11, name: 'Action Woman', sellCount: 24},
{id: 23, name: 'Barbie Man', sellCount: 15},
{id: 40, name: 'El gato con Guantes', sellCount: 8},
{id: 40, name: 'El gato felix', sellCount: 35}
]

for (let dinero of toys2) {
  if(dinero.sellCount > 15){
    popularToys.push(dinero)
    
  }
}

console.log("🚀 ~ popularToys:", popularToys)