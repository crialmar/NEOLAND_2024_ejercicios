//?----------- Iteración #1: Buscar el máximo
//! Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else {
    return numberTwo
  }
}
let mayorNum = sum(8,1);
console.log(mayorNum)

//?----------- Iteración #2: Buscar la palabra más larga
//!Completa la función que tomando un array de strings como argumento devuelva el más largo,
//!en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(palabra) {


}

//?----------- Iteración #3: Calcular la suma
//! Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//! Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sumNumbers)

//?----------- Iteración #4: Calcular el promedio
//! Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers1 = [12, 21, 38, 5, 45, 37, 6];

const promNumbers = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue) / numbers1.length;

console.log("🚀 ~ promNumbers:", promNumbers)

//?----------- Iteración #5: Calcular el promedio
//! Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario 
//! cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

//?----------- Iteración #6: Valores únicos
//! Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//! en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
  ];
  function removeDuplicates(param) {
  // insert code
  }


  
//?----------- Iteración #7: Buscador de números
//! Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, 
//! en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
  ];
  /*function finderName(param) {
  // insert code
  }*/

  const finderNames = (name) => {     // fail: no es lo que andas buscando
    if (name = finder.name) {
      nameFinder = true 
    } else {
      nameFinder = false 
    
    }
  };

  console.log("🚀 ~ finderName ~ nameFinder:", nameFinder)

  /*const finderName =(arrayName, index) => {         
                                                        
    for (let name of arrayName) {
     palabra.toLowerCase() === palabrasContar.toLowerCase() && acc++;
    }

    return acc;
  
  }

  const resultado = repeatCounter(counterWords, 'code')
  console.log("🚀 ~ resultado:", resultado)*/
  



  //?----------- Iteración #8: Contador de repeticiones
  //!Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
    ];
   
  
    
    /*const repeatCounter =(arrayPalabras, palabrasContar) => {          //----------- este sirve si das una palabra, pero no sale de forma automática
      let acc = 0                                                      //----------- revisar código
      for (let palabra of arrayPalabras) {
       palabra.toLowerCase() === palabrasContar.toLowerCase() && acc++;
      }

      return acc;
    
    }

    const resultado = repeatCounter(counterWords, 'code')
    console.log("🚀 ~ resultado:", resultado)*/
    
    
    