import "./Title.css"


export const H1 = ({text}) => {
    return <h1>{text}</h1>;
  };



//! LO DE AQUÍ ABAJO ESTÁ MAL---> en el prop hay que hacer un destructuring del mismo con lo que queremos mostrar
//! y dentro del <h1> debemos meter el mismo destructuring para que, en App.jsx, podamos introducir el texto que queramos
/**
 * const H1 = (props) => {
    return <h1>{props.text}</h1>;
  };
 */