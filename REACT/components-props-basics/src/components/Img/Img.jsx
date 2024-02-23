export const Image = ({src, alt, className}) => {
    return (
      <div style={{width: '100px', height: '100px'}}>
      <img src={src} className={className} alt={alt} />
    </div>
    );
  };
  
  



  /**recibimos src y alt como props */