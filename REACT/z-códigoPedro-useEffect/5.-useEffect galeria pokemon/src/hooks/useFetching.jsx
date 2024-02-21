import { useEffect, useState } from "react";

//!------ CREAMOS UN CUSTOM HOOK
//*---> Suelen devolver variables de estados y funciones para poder gestionar o utilizarlo

export const useFetching = (service, paramDelEndPoint) => {
  console.log("entro en el fetching 🌱");
  const [state, setState] = useState({ //*---> estado inicial complejo (es un objeto)
    data: null,
    isLoading: null,
    hasError: null,
  });

  const dataFetch = async () => { //?-----> función fetch
    console.log("😊");
    setState({//*---------> marcamos el estado inicial del dataFech
      data: null,
      isLoading: null,
      hasError: null,
    });
    setState({ ...state, isLoading: true });//*---> al cargar (al llamar a la api) tenemos que cambiar el estado a true mediante destructurin

    switch (paramDelEndPoint) { //!----> vamos a evaluar paramDelEndPoint y si cumple uno de los dos casos el setState cambia
      case undefined:
        try {
          const res = await service();//*----> NO HAY PARÁMETRO

          res.status === 200 &&
            setState({
              ...state,
              data: res.data,
              isLoading: false,
              hasError: false,
            });
        } catch (error) {
          setState({
            ...state,
            data: null,
            isLoading: false,
            hasError: error,
          });
        }
        break;

      default:
        try {
          const res = await service(paramDelEndPoint);//*----> EL paramDelEndPoint ES EL PARÁMETRO

          res.status === 200 &&
            setState({
              ...state,
              data: res.data,
              isLoading: false,
              hasError: false,
            });
        } catch (error) {
          setState({
            ...state,
            data: null,
            isLoading: false,
            hasError: error,
          });
        }
        break;
    }
  };
  //! vamos a resetar el customHook para que cuando reciba un nuevo servicio se vuelva a resetar el estado y sus elementos 
  useEffect(() => {
    dataFetch();
  }, [service]);

  //? los customHook lo que suelen devolver son variables de estados y funciones para poder gestionar o utilizar el customHook
  return {
    dataFetch,
    state,
    isLoading: state.isLoading,
    hasError: state.hasError,
    data: state.data,
  };
};

//* Este customHook será usado por Home.jsx—→ importar Gallery.jsx