import { NavLink, Outlet } from 'react-router-dom'
//*-----> NAVLINK: es un tipo de link especial para navegación que da la clase active
//*-----> CLASE ACTIVE: marca en qué página se encuentra el usuario y reproduce la página correspondiente

import './App.css'


function App() {
 //const texto = "soy una prueba"
  return (
    <div className="App">
      <header className="header">
        <h1>Ejercicio Routes 🦖</h1>
      </header>
      <div>
        <nav>
          <NavLink to="">Home</NavLink>
          <NavLink to="heroes">Heroes</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
