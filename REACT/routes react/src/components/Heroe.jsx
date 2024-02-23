import { useNavigate, useParams } from "react-router-dom";
import { deleteHeroe, getHeroe } from "../data/data";
import { HeroeDetail } from "./HeroeDetail";

export const Heroe = () => {
    const params = useParams();
    const navigate = useNavigate();
    const heroe = getHeroe(params.id);//*-----> aquí usamos el getById de data
  
    if (!heroe) return <p>No existe el héroe que buscas 😭</p>;
  
    return (
      <div>
        <h1>My heroes 🦸‍♂️🦸‍♀️</h1>
        <HeroeDetail heroe={heroe} />
        <button
          onClick={() => {
            deleteHeroe(heroe.id).then(() => {  {/**aquí se usa el delete de data */}
              navigate('/heroes');
            });
          }}
        >
          Borrar a {heroe.name}
        </button>
      </div>
    );
  }