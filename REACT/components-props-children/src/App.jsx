//import { useState } from 'react'
//import reactLogo from './assets/react.svg'

import './App.css'
import {  H1, H2, Header, Image, Main } from './components'
import Paragraph from './components/Paragraph'
import { Footer } from './components/Footer'


function App() {
 //const texto = "soy una prueba"
  return (
    <>
    <Header>
        <H2 text= "Welcome to my Candy Store🍬🦗"/>
      </Header>
      <Main> 
        <H1 text= "SOY UN LINDO TITULO"/> {/** EL TEXTO QUE FORMA PARTE DE UNA VARIBLE IRÍA ENTRE CORCHETES, PERO COMO NO ES EL CASO VA CON COMILLAS*/}
        <H2 text= "Este es el subtitulo"/>
        <Paragraph text= "Con esto y un bizcocho tenemos un lindo párrafo"/>
        <Image source={"https://ih1.redbubble.net/image.5393708732.9759/st,small,507x507-pad,600x600,f8f8f8.jpg"} classita="logo" alterna="Vite logo" />
      </Main>
      <Footer>
        <H2 text= "ESTO ES EL FOOTER"/>
      </Footer>
    </>
  )
}

export default App
