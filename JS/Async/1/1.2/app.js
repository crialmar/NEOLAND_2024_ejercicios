//! 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
//! fetch() para hacer una consulta a la api cuando se haga click en el botón,
//! pasando como parametro de la api, el valor del input.

const baseUrl = "https://api.nationalize.io";

const fetchName = (name) => {
  //----> creamos una url dinámica
  const url = `${baseUrl}/?name[]=${name}`;

  //----> estructura básica de fetch
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

//-----> para que funcione debemos meter los eventos en el botón y sacar el valor del input del evento
const eventButton = () => {
  const btn = document.querySelector('button'); 
  const input = document.querySelector('input');
  btn.addEventListener('click', () => {
    fetchName(input.value);
  });
};

eventButton();






