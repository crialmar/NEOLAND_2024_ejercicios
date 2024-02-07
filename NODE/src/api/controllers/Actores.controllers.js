//const enumOk = require("../../utils/enumOk");
const Actores = require("../models/Actores.model");
const Musical = require("../models/Musical.model");
const User = require("../models/User.model");

//const Musical = require("../models/Musical.model");
//const User = require("../models/User.model");


//! ---------------------------------------------------------------------
//? -------------------------------POST create --------------------------
//! ---------------------------------------------------------------------
//*-------> CRUD

const createActores = async (req, res, next) => {
  //? vamos a capturar la url de la imagen que se sube a cloudinary
  /* lo hacemos porque si hay en error como la imagen se sube antes de meternos al controlador.
    Si hay un error en el controlador, una vez dentro, el elemento no se crea y por ende
    tenmos que borrar la imagen en cloudinary */

  let catchImg = req.file?.path; //* el optional se escribe porque la img no es obligatoria, puede que no haya req.file.path

  try { //!-------> vamos a actualizar los indexes
    //** Los indexes se forman cuando una clave del objeto es unique
    /**Esto es importante porque puede que haya modificado el modelo posteriormente a la
     * creacion del controlador
     */

    await Actores.syncIndexes(); //! ------> INSTANCIAR UN NUEVO CHARACTER
    
    const newActores = new Actores(req.body); //*-----> creamos una nueva instancia y lo usamos como info inicial de lo que recibimo sdel req.body

    if (req.file) { //! -------> VALORAR SI HEMOS RECIBIDO UNA IMAGEN O NO
      newActores.image = catchImg; //*----> si la recibimos metemos en el objeto la url con la nueva instancia de Actores
    } else { //*-----> si no hay img usamos una predeterminada
      newActores.image =
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
    }

    try { //! ------------> VAMOS A GUARDAR LA INSTANCIA DEL NUEVO CHARACTER
      const saveActores = await newActores.save();
      if (saveActores) {

        return res.status(200).json(saveActores);//*----> si existe mandamos el 200 a modo de que todo va bien y enviamos el objeto mediante json
      } else {
        return res
          .status(404)
          .json("No se ha podido guardar el elemento en la DB ❌");//*----> si no, mandamos el 400 con el mensaje de error
      }
    } catch (error) {
      return res.status(404).json("error general saved character");
    }
  } catch (error) { //! -----> solo entramos aqui en el catch cuando ha habido un error

    req.file?.path && deleteImgCloudinary(catchImg); //*----> si hay error borramos la img del cloud ya que se sube antes de que nos metamos en el controlador---->
      //*-----> deleteImgCloudinary recuerda que es un middleware ------> ir a files.middleware.js

    return (
      res.status(404).json({
        message: "error en el creado del elemento",
        error: error,
      }) && next(error) //*-----> para mandar el error a log
    );
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------get by id --------------------------
//! ---------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ActoresById = await Actores.findById(id);
    if (ActoresById) {
      return res.status(200).json(ActoresById);
    } else {
      return res.status(404).json("no se ha encontrado el character");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------get all ------------------------------
//! ---------------------------------------------------------------------

const getAll = async (req, res, next) => {
  try {
    const allActores = await Actores.find().populate("musical");//* el find nos devuelve un array 
    
    if (allActores.length > 0) {
      return res.status(200).json(allActores);
    } else {
      return res.status(404).json("no se han encontrado actores");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar - lanzado en el catch",
      message: error.message,
    });
  }
};


//! ---------------------------------------------------------------------
//? -------------------------------get by name --------------------------
//! ---------------------------------------------------------------------
const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    /// nos devuelve un array de elementos
    const ActoresByName = await Actores.find({ name });
    if (ActoresByName.length > 0) {
      return res.status(200).json(ActoresByName);
    } else {
      return res.status(404).json("No se ha encontrado");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar por nombre capturado en el catch",
      message: error.message,
    });
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------DELETE -------------------------------
//! ---------------------------------------------------------------------

const deleteActores = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Actores = await Actores.findByIdAndDelete(id);
    if (Actores) {
      // lo buscamos para vr si sigue existiendo o no
      const finByIdActores = await Actores.findById(id);

      try {
        const test = await Musical.updateMany(
          { Actores: id },
          { $pull: { Actores: id } }
        );
        console.log(test);

        try {
          await User.updateMany(
            { ActoresFav: id },
            { $pull: { ActoresFav: id } }
          );

          return res.status(finByIdActores ? 404 : 200).json({
            deleteTest: finByIdActores ? false : true,
          });
        } catch (error) {
          return res.status(404).json({
            error: "error catch update User",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "error catch update Musical",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = { createActores, getById, getAll, getByName, deleteActores };
