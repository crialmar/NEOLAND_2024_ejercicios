import axios from "axios";

const apiHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const APIPokemon = axios.create({ //* creamos una llamada a la api
  baseURL: "https://pokeapi.co/api/v2/", //* local + port + general
  headers: apiHeaders,
  timeout: 6000000, //* marca el tiempo que tardará en salir un error de tiempo de carga
});
