const enumTipos = (type) => {
    const enumType = ["movie musical", "theater musical"];
    if (enumType.includes(type)) {
      console.log("entro en el true");
      return { check: true, type };
    } else {
      return {
        check: false,
      };
    }
  };
  
  module.exports = enumTipos;
  