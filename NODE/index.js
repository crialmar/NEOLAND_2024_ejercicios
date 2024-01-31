const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");

const app = express(); //*---> creamos el servidor web

dotenv.config(); //*---> conficuramos dotenv para poder utilizar las variables de entorno del .env


//? CONECTAR CON BASE DATOS
connect();