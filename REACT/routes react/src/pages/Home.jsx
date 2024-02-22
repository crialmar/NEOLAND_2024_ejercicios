import { Link } from "react-router-dom";
//*-----> LINK: permite navegar a otra parte de la app (entre páginas)

export const Home = () => {
    return (
        <>
          <h2>Home Page</h2>
    
          <p>App ejemplo sobre React Router</p>
    
          <ul>
            <li>
              <p>
                <span>Visita la página de héroes 🦸‍♀️:</span>
                <Link to="heroes">Heroes</Link>
              </p>
            </li>
          </ul>
        </>
      );
  };
  