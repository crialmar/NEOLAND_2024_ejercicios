const horasSaludo = () => {
    if (horasSaludo >= 6 && horasSaludo <= 12){
      console.log("Buenos días")
    } if (horasSaludo >= 13 && horasSaludo <= 19 ){
      console.log("Buenas tardes");
    } else {
      console.log("Buenas noches")
    }
  }

export {horasSaludo};