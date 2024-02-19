const Image = (referen, source, alt) => {
    return (
      <image href={referen} src={source} alt={alt}
      />
    );
  };
  
  export default Image;


  /**recibimos src y alt como props */