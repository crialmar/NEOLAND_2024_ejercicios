import { useEffect } from "react";

export const H1 = (props) => {
  ///! ------------------------ QUE FORMA TIENE
  useEffect(
    () => {
      /// parte 1 --> es una callback

      return () => {
        /// part 2 ---> return de la callback inicial que contiene otra callback
      };
    },
    [
      /** parte 3 array de dependencias */
    ]
  );

  //! ----------------------------------------------------------------------------------------
  //? ---------------------------------------TIPOS DE USEEFECT--------------------------------
  //! --------------------------------------------------------------------------------------

  // TIPO 1) controla el montaje y el desmontaje del componente

  useEffect(() => {
    console.log("hola que tal soy el primer efecto");

    return () => {
      //console.log("me desmonto ❌");
    };
  }, []);

  // Tipo 2) se lanza siempre, cuando se monta, se desmonta o se actualiza NO LLEVA ARRAY DE DEPENDENCIAS
  useEffect(() => {
    //console.log("Me monto 👌");

    return () => {
      //console.log("me desmonto ❌");
    };
  });

  // Tipo 3) es el que tiene array de dependencias y tambien tiene una variable a la cual esta escuchando su cambio
  /// array de depedencias son variables que son escuchadas sus cambios, para en caso de tenerlos volver a lanzar el useEffect

  useEffect(() => {
    console.log("me monto o me actualizo 👌🌱");
    return () => {
      console.log("me desmonto por desaparecer o por actualizarme ❌🔍");
    };
  }, [props.stateReload]);

  return <h1>Soy un h1</h1>;
};
