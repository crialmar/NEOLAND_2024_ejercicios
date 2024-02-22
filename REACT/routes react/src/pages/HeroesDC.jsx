import { Link, Outlet } from "react-router-dom";
import { HeroeDetail } from "../components/HeroeDetail";
import { getHeroes } from "../data/data";

//*-----> EN ESTA PÁGINA SE NOS MOSTRARÁN TODOS LOS HÉROES

export const HeroesDC = () => { //*-----> aquí usamos el getAll de data
  const heroes = getHeroes();
  return (
    <>

      <div>
        <h1>Toditos los heroes 🦸‍♂️🦸‍♀️</h1>
        <ul>
          {heroes.map((heroe) => (
            <li key={heroe.id}>
              <Link to={`/heroes/${heroe.id}`}>
                <HeroeDetail heroe={heroe} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  )
  };
  