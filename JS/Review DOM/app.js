//? 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

countries.forEach((country) => {
    const template = `<li>${country}</li>`
    ulList.innerHTML += template()
})

//? 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeClass = app.querySelector(".fn-remove-me")
/*removeClass.forEach((element) => {
    element.remove()
 })*/ //*----> está bien pero es más simple

removeClass.remove()

//? 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divElement = document.querySelector('[data-function]') 
const carList = document.createElement('ul')

cars.forEach((car) => {
    const template = `<li>${car}</li>`
    ulList.innerHTML += template()
})

//divElement.appendChild(carList)

//? 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const newDiv = document.createElement("div")
newDiv.forEach((country) => {
    const { title, imgUrl } = country
    const template = `<div class='countryDiv'>
    <h4>${title}</h4>
    <img src='${imgUrl}' style='height:50px; width:50px' />
    </div>`
    countriesContainer.innerHTML += template 
})

document.body.appendChild(countriesContainer)

//? 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const deleteButton = document.createElement(".btn")
deleteButton.textContent = "Elimina el último"

const deleteLastWord = () => {
    const countryDivs = document.querySelectorAll('.countryDiv')
    countryDivs[countryDivs.length - 1].remove() //*----> de esta forma seleccionamos el último div y lo borramos
}

deleteButton.addEventListener('click', deleteLastCountry)

//? 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
//*------> tenemos que crear una función tomando un element por parámetro y borra a su element padre
//*------> lo que implica eliminar todo su contenido

const eliminarPais = (element) => { //*----> FUNCIÓN DE BORRADO
    element.parentElement.remove();
  };
  
const divs = document.querySelectorAll(".countryDiv");
  
divs.forEach((div, index) => {
    const botonEliminar = document.createElement("button");//*----> creamos un btn
    botonEliminar.textContent = "Eliminar";//*----> con este texto
    botonEliminar.addEventListener("click", () => eliminarPais(botonEliminar));
    //*----> para que mediante su evento click llame a la función de borrado

    div.appendChild(botonEliminar);//*----> añadimos un btn a cada div
});