import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import { horasSaludo } from './components/Horas/Horas'


function App() {
  const [render, setRender] = useState(true)

  const numAsignado = 17
  /**
   * Doy por supuesto que hay que dar un valor cualquiera para que funcione
   */
  const frases = ["despierta", "a comer!"]
  /** 
   * Este es un array de tres frases cualquiera para poder mapearlo
  */
  /**
   * Hay que crear un condicional (al hacerlo dentro del return será un ternario) que nos permita establecer 
   * las franjas de números y cada texto a reproducir
   * 
   * Después, mapearemos las frases para que con un botón podamos cambiar las frases
   */

  const handleClick = () => setRender(!render)
  /**
   * El valor de setRender ha de ser lo contrario de userState para que el botón funcione
   */

  return (
    <>
      <div>
        {
        numAsignado >= 6 && numAsignado <= 12 ? (<p>Buenos días</p>) :
         numAsignado >= 13 && numAsignado <= 19 ? (<p>Buenas tardes</p>) :
         (<p>Buenas noches</p>)
        } 

        {frases.map((frase, index) => 
          <p key={index}>{frase} </p>
        )}
        {
          render ? <p>{frases[0]}</p> : <p>{frases[1]}</p> 
        }
        <button onClick={() => handleClick()}>Dale duro al boton
          </button>
        
      </div>
    </>
  )
}

export default App
