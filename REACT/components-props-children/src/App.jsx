//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer, H1, H2, Header, Image, Main } from './components'
import Paragraph from './components/Paragraph'



function App() {
 //const texto = "soy una prueba"
  return (
    <>
    <Header>
        <H2 text= "Welcome to my Candy Store"></H2>
        <div>
          <a href="https://vitejs.dev" >
              <Image src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
      </Header>
      <Main> 
        <H1 text= "SOY UNA LINDO TITULO"/> {/** EL TEXTO FORMARA PARTE DE UNA VARIBLE IRÍA ENTRE CORCHETES, PERO COMO NO ES EL CASO VA CON COMILLAS*/}
        <H2 text= "Este es el subtitulo"/>
        <Paragraph text= "Con esto y un bizcocho tenemos un lindo párrafo"/>
      </Main>
      <Footer>
        <H2 text= "ESTO ES EL FOOTER"/>
      </Footer>
    </>
  )
}

export default App
