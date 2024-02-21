import { APIPokemon } from "./pokemonApi.config";

export const getById = async (id) => {
  return APIPokemon.get(`pokemon/${id}`) //*---> retornamos el endpoint
    .then((res) => res) //*----> usamos promesas mediante el .then()
    .catch((error) => error);
};
