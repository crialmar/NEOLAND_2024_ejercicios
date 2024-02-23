/** hay que meter en el div style con width y height */

export const Image = ({source,//*----> ESTAMOS HACIENDO DESTRUCTUING DE ESTO
    alterna,
    classita}
) => {
  return (
    <div style={{width: '100px', height: '100px' }}>
      <img src={source} className={classita} alt={alterna} />
    </div>
  )
}

/** EN EL APP DEBEMOS ESCRIBIR SOURCE, CLASSITA Y ALTERNA */
//! CAMBIAR PARA PARECER MÁS PROFESIONAL


