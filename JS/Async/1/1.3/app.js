//! 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento por cada petición
//! a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
//! EJ: El nombre Pepe tiene un 22 porciento de ser de ET.

const baseUrl = "https://api.nationalize.io";

const fetchName = (name) => {
  const url = `${baseUrl}/?name[]=${name}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showCountry(data); //*----> llamamos a esta función con los datos obtenidos
    })
    .catch((err) => {
      console.error(err);
    });
};

const fraseRes = (name, probability, countryId) => {
  //*----> creamos la frase dinámicamente
  const probabilityPerCent = (probability * 100).toFixed(2);
  return `El nombre ${name} tiene un ${probability} de ser de ${countryId}`;
};

const showCountry = (data) => {
  data.forEach((element) => {
    element.country.forEach((country) => {
      const p = document.createElement("p");
      //*-----> llamamos a fraseRes para conseguir los datos formateados
      p.textContent = fraseRes(
        element.name,
        country.probability,
        country.country_id,
      );
      document.body.appendChild(p);
    });
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
