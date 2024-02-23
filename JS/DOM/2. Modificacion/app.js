//? 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement("div")
document.body.appendChild(newDiv)

//? 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const template = () =>
		<div>
		<p>Este es un segundo párrafo dentro del div</p>
		</div> 

		document.body.innerHTML += template()

//? 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divWidth = document.createElement("div")

		for (let i = 0; i < 6; i++) {
				const nuevoParrafo = document.createElement("p")
				nuevoParrafo.text.content = `Este es el párrafo ${i + 1}`
				
				divWidht.appendChild(nuevoParrafo)
		}

		document.body.appendChild(divWidht)

//? 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

document.body.innerHTML += `<p>Soy dinámico en un template</p>`

//? 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2InsertHere = document.querySelector(".fn-insert-here")
h2InsertHere.texContent = 'Wubba Lubba dub dub'

//? 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
apps.forEach((app) => {
    const template = () => `<li>${app}</li>`
    ulList.innerHTML += template()
})

document.body.appendChild(ulList)

//? 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const allRemoveMe = document.querySelectorAll(".fn-remove-me")

allRemoveMe.forEach((element) => {
        element.remove()
})

//? 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const pJueves = document.createElement("p")
pJueves.textContent = "Voy en medio"

const divEscogidos = document.querySelectorAll("div.fn-insert-here")

const secondDiv = divEscogidos[2]

document.body.insertBefore(pJueves, secondDiv)

//? 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertDiv = document.querySelectorAll("div.fn-insert-here");

const templateDivNew = () => `<p>Voy dentro</p>`

insertDiv.forEach((div) => div.innerHTML = templateDivNew())