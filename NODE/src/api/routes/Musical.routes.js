const { upload } = require("../../middleware/files.middleware");
const { createMusical, toggleActores, getById, getAll, getByTitle, deleteMusical } = require("../controllers/Musical.controllers");

const MusicalRoutes = require("express").Router();

MusicalRoutes.post("/", upload.single("image"), createMusical); //*------> la / vacía es porque no hemos creado un middleware 
MusicalRoutes.get("/:id", getById);
MusicalRoutes.get("/", getAll);
MusicalRoutes.get("/byTitle/:title", getByTitle);
MusicalRoutes.delete("/:id", deleteMusical);
MusicalRoutes.patch("/add/:id", toggleActores);

module.exports = MusicalRoutes;

//?-----> hay que requerirlas en index.js
