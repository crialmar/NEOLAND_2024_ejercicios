import { useFetching } from "../hooks/useFetching";
import { getById } from "../services";

export const dataPokemon = async () => {
  const dataApi = [];//*----> array vacío para pushear los pokemones

  for (let i = 1; i < 41; i++) {
    const { dataFetch, state, isLoading, hasError, data } = useFetching(
      getById,
      i
    );

    dataApi.push(data);
  }

  console.log(dataApi);

  return dataApi;
};

const mappeoData = (data) => {};
