const Movie = require("../models/Musical.model");

//! ---------------------------------------------------------------------
//? -------------------------------POST create --------------------------
//! ---------------------------------------------------------------------
//*-------> CRUD

const createMusical = async (req, res, next) => {
  try {
    await Musical.syncIndexes(); //*------> sincronizamos los index
    const customBody = { //*------> hacemos una instancia del modelo  
      name: req.body?.name,
      year: req.body?.year,
    };
    const newMusical = new Musical(customBody);
    const savedMusical = await newMusical.save();
    return res //*-----> test en el runtime
      .status(savedMusical ? 200 : 404) //*------> lo hacemos mediante un ternario porque es más rápido
      //.json(savedMusical ? savedMusical : "error al crear la movie"); //*----> otra forma de hacerlo
  } catch (error) {
    return res.status(404).json({
      error: "error catch create movie",
      message: error.message,
    });
  }
};

module.exports = { createMusical };
