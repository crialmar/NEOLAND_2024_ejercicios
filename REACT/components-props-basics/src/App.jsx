import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import buika from "https://res.cloudinary.com/dm8swv5zy/image/upload/v1708371074/dhico5kggdhwury93anb.jpg"

function App() {
  const [count, setCount] = useState(0);
  const control = () => console.log("todo va ok");

  return (
    <>
      <div>
        <a href="https://res.cloudinary.com/dm8swv5zy/image/upload/v1708371074/dhico5kggdhwury93anb.jpg" >
          <img src={buika}  alt="buika qr" />
          {/** usamos como referencia el propio código original */}
        </a>
      </div>
      <h1>EJERCICIO 3</h1>
      <h2>A ver si este sale bien</h2>
        <p>
          Por santa Buika que lo conseguimos
        </p>
    </>
  )
}

export default App
