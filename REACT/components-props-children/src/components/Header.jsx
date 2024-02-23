import "./Header.css"

export const Header = ({children}) => {
  return <header>{children}</header>
  
}

//!------------FORMA DESACTUALIZADA------------
//*-----> FUNCIONAR FUNCIONA, PERO ESTÁ DESACTUALIZADA
/**export const Header = (props) => {
  const {children} = props  
  return <header>{children}</header>
  
}*/

