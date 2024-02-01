const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");


const app = express(); //*---> creamos el servidor web

dotenv.config(); //*---> conficuramos dotenv para poder utilizar las variables de entorno del .env


//? CONECTAR CON BASE DATOS
connect();

//? CONECTAMOS CLOUDINARY
const { configCloudinary } = require("./src/middleware/files.middleware");

configCloudinary();

//? VARIABLES CONSTANTES --> PORT
const PORT = process.env.PORT;

//? CORS
const cors = require("cors");
app.use(cors());

//? Limitaciones de cantidad en el back end
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));
 
//? RUTAS
const UserRoutes = require("./src/api/routes/User.routes");
app.use("/api/v1/users/", UserRoutes);


//? Generamos un error de cuando no se encuentre la ruta (404)
app.use("*", (req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    return next(error);
  });
  
//? cuando el servidor crachea metemos un 500 
app.use((error, req, res) => {
return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

//? ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB

// esto de aqui  nos revela con que tecnologia esta hecho nuestro back
app.disable("x-powered-by");
app.listen(PORT, () =>
    console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);