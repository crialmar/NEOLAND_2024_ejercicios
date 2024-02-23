//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { H1, H2, Image, Paragraph } from './components';


function App() {
  //const [count, setCount] = useState(0);
  //const control = () => console.log("todo va ok");

  return (
    <>
      <div>
      <H1 text= "EJERCICIO 3" />
      <H2 text= "A ver si este sale bien"/>
      <Paragraph text= "Por santa Buika que lo conseguimos" />
      <Image src={"https://media.revistavanityfair.es/photos/6571f01e309371b97509bd54/16:9/w_2560%2Cc_limit/buika.jpg"} className="imgBuika" alt="buika qr" />
      </div>
      
    </>
  )
}

export default App
