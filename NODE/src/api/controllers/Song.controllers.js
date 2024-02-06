const Song = require("../models/Song.model");

//! ---------------------------------------------------------------------
//? -------------------------------POST create --------------------------
//! ---------------------------------------------------------------------
//*-------> CRUD

const createSong = async (req, res, next) => {
  try {
    await song.syncIndexes(); //*------> sincronizamos los index
    const customBody = { //*------> hacemos una instancia del modelo  
      title: req.body?.title,
      composer: req.body?.composer,
    };
    const newSong = new Song(customBody);
    const savedSong = await newSong.save();
    return res //*-----> test en el runtime
      .status(savedSong ? 200 : 404) //*------> lo hacemos mediante un ternario porque es más rápido
      //.json(savedMusical ? savedMusical : "error al crear la movie"); //*----> otra forma de hacerlo
  } catch (error) {
    return res.status(404).json({
      error: "error catch create movie",
      message: error.message,
    });
  }
};

module.exports = { createSong };
