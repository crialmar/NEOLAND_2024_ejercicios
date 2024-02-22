import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//!------------- ROUTER DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//!------------- PAGES
import { Heroe } from './pages/Heroe.jsx'
import { HeroesDC } from './pages/HeroesDC.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'

//!----------------------------------
ReactDOM.createRoot(document.getElementById('root')).render( //*----> definiremos BrowesRouter para crear el mapa de rutas de aplicación
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
        <Route index element={<Home />} /> {/**Las rutas con index se renderizarán sobre el Outlet*/}
          <Route path="heroes" element={<HeroesDC />} /> 
          <Route path='/heroe/:id' element={<Heroe />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <main>
                <p>404 - No existe la ruta!</p>
              </main>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
)
