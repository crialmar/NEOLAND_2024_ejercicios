//!----------USESTATE 2---------- 
//?----- GESTIÓN DE ESTADOS -----

import { useState } from "react";

/** 
 * En el estado introducimos como valor único un objeto compuesto de nombre y apellido
 * Mediante spread operator recuperamos las propiedades del objeto y se modificarán aquellas que hemos especificado
 * Volvemos a usar los inputs antiguos ya que estamos siguiendo la guía
 * 
*/

export const ObjectState = () => {
    const [characterInfo, setCharacterInfo] = useState({ 
        name: "Heather",
        lastName: "Chandler",
      });
    
      return (
        <>
          <h4>
            {characterInfo.name} | {characterInfo.lastName}
          </h4>
    
          <input
            type="text"
            value={characterInfo.name}
            onChange={(e) =>
              setCharacterInfo({
                ...characterInfo,
                name: e.target.value,
              })
            }
          />
          <input
            type="text"
            value={characterInfo.lastName}
            onChange={(e) =>
              setCharacterInfo({
                ...characterInfo,
                lastName: e.target.value,
              })
            }
          />
        </>
    )
}

