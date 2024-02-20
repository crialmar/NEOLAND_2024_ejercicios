import { useEffect, useState } from "react"; //*----> importamos useEffect
import { useFetching } from "../hooks/useFetching";
import { getById } from "../services";
import { dataPokemon } from "../utils"; //*----> traemos los pokemones
import { Card } from "./Card";

/**
 * No se puede hacer llamada a un hook dentro de un bucle, tras un return de un condicional, en un evento, 
 * en un componente de clase, ni dentro de useEffect, useMemo o userReducer
 */

export const Gallery = () => {
  const [dataPage, setDataPage] = useState(null); //*----> este estado está actualizado a null

  const data = (async () => await dataPokemon())().then((res) => res);

  useEffect(() => {}, []);

  return (
    <div id="galleryPokemon">
      {(async () => {
        try {
          const dataTwo = await data;
          dataTwo.map((item) => <Card data={item} key={item.id} />);
        } catch (error) {
         //-----> habría que poner un error pero solo te sale hacerlo como en el back
        }
      })()}
    </div>
  );
};
