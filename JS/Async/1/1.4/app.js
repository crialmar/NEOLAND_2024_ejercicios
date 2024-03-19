//! 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
//! de los p que hayas insertado y que si el usuario hace click en este botón eliminemos
//! el parrafo asociado.

const baseUrl = "https://api.nationalize.io";

const fetchName = (name) => {
  const url = `${baseUrl}/?name[]=${name}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showCountry(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const fraseRes = (name, probability, countryId) => {
  const probabilityPerCent = (probability * 100).toFixed(2);
  return `El nombre ${name} tiene un ${probability} de ser de ${countryId}`;
};

/**
 * Para crear los botones, primero necesitamos saber cuántas p hay-----> index de p
 * Creamos el evento del botón y marcamos los removes necesarios (depende del contenido de la p)
 * Unir el botón con su p
 */

const showCountry = (name, probability, countryId, index) => { //todo
  const p = document.createElement("p");
  p.textContent = fraseRes(name, probability, countryId);
  //*-----> el id de cada p es su posición (index)
  p.id = `p${index}`;

  document.body.appendChild(p);
};

const handleClick = (event) => {
  //*-----> marcamos que btnId contiende el id del evento target
  const btnId = event.target.id;

  //*-----> removes: id, string y number
  const removeStringId = btnId.replace("btn_", ""); //*----> reemplazamos el string por uno vacío
  const removeNumberId = Number.parseInt(removeStringId); //*----> convertimos a string y que haga el contenido de removeStringId
  const removeId = `p${removeNumberId}`; //*-----> marcamos que el id siga a removeNumberId

  //*-----> creamos const p para eliminar la p
  const pRemove = document.querySelector(`#${removeId}`);
  pRemove.remove();

  //*-----> hacemos lo mismo para eliminar el btn
  const btnRemove = document.querySelector(`#${btnId}`);
  btnRemove.remove();
};

//*-----> le damos texto al botón, un identificador único y la acción
const showRemove = (index) => {
  const btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.index = `btn_${index}`;
  btn.onclick = handleClick;

  document.body.appendChild(btn);
};

//*----> damos identificador único a la frase
const showRemoveCountry = (data) => {
  data.forEach((element) => {
    element.country.forEach((country, index) => {
      showCountry(element.name, country.probability, country.country_id, index);
    });
    showRemove(index);
  });
};

const eventButton = () => {
  const btn = document.querySelector("button");
  const input = document.querySelector("input");
  btn.addEventListener("click", () => {
    fetchName(input.value);
  });
};

eventButton();
