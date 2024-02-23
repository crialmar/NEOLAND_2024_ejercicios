import { useState } from "react";


export const MyState = () => {
    const [myName, setMyName] = useState("Heather Chandler"); //*----> establecemos un nuevo estado
    return (
      <>
        <h4>{myName}</h4>
        <input
          type="text"
          value={myName}
          onChange={(e) => setMyName(e.target.value)} 
        />
      </>
    )
  }
  //*-----> esta es la forma menos correcta de hacer el input. La forma correcta sería:
  /**<input [...} 
        ref={referencia} 
        onChange{(e)=> console.log("valor del input", referencia.current.value}
    /> */