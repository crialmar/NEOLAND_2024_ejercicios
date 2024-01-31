//? CONEXION CON MONGO DB

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose")

const MONGO_URI = process.env.MONGO_URI

const connect = async () => {
    try {
        const db = await mongoose.connect(MONGO_URI, { 
            useNewUrlParser: true, //*----> para que la URL MONGO se parsee
            useUnifiedTopology: true, //*----> para convertir los caraceteres especiales
        });
        //* traemos el host y el name de la db
        const {name, host} = db.connection;

        console.log(`Conectada con DB en el host: ${host} con el nombre: ${name} 😁`);

    } catch (error){
        console.log(`No se ha detectado la db 😒`, error.message);
    }
};

module.exports = {connect}
