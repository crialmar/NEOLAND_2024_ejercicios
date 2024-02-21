//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import buika from "https://res.cloudinary.com/dm8swv5zy/image/upload/v1708371074/dhico5kggdhwury93anb.jpg"
import SubTitle from './components/H2/H2';
import Paragraph from './components/Paragraph/Paragraph';
import Image from './components/Img/Img';
import H1 from './components/H1/H1';


function App() {
  //const [count, setCount] = useState(0);
  //const control = () => console.log("todo va ok");

  return (
    <>
      <div>
      <H1>EJERCICIO 3</H1>
      <SubTitle>A ver si este sale bien</SubTitle>
      <Paragraph>
        Por santa Buika que lo conseguimos
      </Paragraph>
        <Image href="https://res.cloudinary.com/dm8swv5zy/image/upload/v1708371074/dhico5kggdhwury93anb.jpg" 
          src={buika}  alt="buika qr" >
          {/** usamos como referencia el propio código original */}
        </Image>
      </div>
      
    </>
  )
}

export default App
