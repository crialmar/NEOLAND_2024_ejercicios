const { upload } = require("../../middleware/files.middleware");
const { createActores, getById, getAll, getByName, deleteActores, toggleMusical } = require("../controllers/Actores.controllers");

const ActoresRoutes = require("express").Router();

ActoresRoutes.post("/", upload.single("image"), createActores);
ActoresRoutes.get("/:id", getById);
ActoresRoutes.get("/", getAll);
ActoresRoutes.get("/byName/:name", getByName);
ActoresRoutes.delete("/:id", deleteActores);
ActoresRoutes.patch("/add/:id", toggleMusical);


module.exports = ActoresRoutes;