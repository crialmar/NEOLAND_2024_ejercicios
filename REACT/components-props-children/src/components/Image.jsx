/** hay que meter en el div style con width y height */

export const Image = (
    source,
    alterna,
    classita
) => {
  return (
    <div style={{width: '100px', height: '100px' }}>
      <img src={source} className={classita} alt={alterna} />
    </div>
  )
}


