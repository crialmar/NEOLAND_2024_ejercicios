const Actores = require("../models/Actores.model");
const Musical = require("../models/Musical.model");



//! ---------------------------------------------------------------------
//? -------------------------------POST create --------------------------
//! ---------------------------------------------------------------------
//*-------> CRUD

const createMusical = async (req, res, next) => {
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

    await Musical.syncIndexes(); //! ------> INSTANCIAR UN NUEVO ACTOR
    
    const newMusical = new Musical (req.body); //*-----> creamos una nueva instancia y lo usamos como info inicial de lo que recibimos del req.body

    if (req.file) { //! -------> VALORAR SI HEMOS RECIBIDO UNA IMAGEN O NO
      newMusical.image = catchImg; //*----> si la recibimos metemos en el objeto la url con la nueva instancia de Musical
    } else { //*-----> si no hay img usamos una predeterminada
      newMusical.image =
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
    }

    try { //! ------------> VAMOS A GUARDAR LA INSTANCIA DEL NUEVO ACTOR
      const saveMusical = await newMusical.save();
      if (saveMusical) {

        return res.status(200).json(saveMusical);//*----> si existe mandamos el 200 a modo de que todo va bien y enviamos el objeto mediante json
      } else {
        return res
          .status(404)
          .json("No se ha podido guardar el elemento en la DB ❌");//*----> si no, mandamos el 400 con el mensaje de error
      }
    } catch (error) {
      return res.status(404).json("error general saved actor");
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
//? -----------------Toggle add o delete de actores----------------------
//! ---------------------------------------------------------------------
/// aqui metemos los personajes en el array del modelo de movie
const toggleActores = async (req, res, next) => { //*------> aquí metemos los actores en el array del modelo de Musical
  try {
    const { id } = req.params; //*-----> id del musical que queremos actualizar
    const { Actores } = req.body; //* -----> idDeLosActores enviaremos esto por el req.body "12412242253,12535222232,12523266346"
  
    const musicalById = await Musical.findById(id); //*-----> buscar si existe el musical

    if (musicalById) { //*------> para ver si existe (hacer update), sino mandamos un 404
      /** cageemos el string que traemos del body y lo convertimos en un array
       * separando las posiciones donde en el string habia una coma
       * se hace mediante el metodo del split
       */
      const arrayIdActores = Actores.split(","); //*------> uso de split para convertir los sting en array

      /** recorremos este array que hemos creado y vemos si tenemos que:
       * 1) ----> sacar el actor si ya lo tenemos en el back
       * 2) ----> meterlo en caso de que no lo tengamos metido en el back
       */

      Promise.all(
        arrayIdActores.map(async (Actores, index) => {
          if (musicalById.Actores.includes(Actores)) { //!------> BORRAR DEL ARRAY DE ACTORES EL ACTOR/ACTRIZ DENTRO DEL MUSICAL
            
            try {
              await Musical.findByIdAndUpdate(id, { //*----> dentro de clave actores quiero sacar el id del elemento que recorro
                $pull: { Actores: Actores },
              });

              try {
                await Actores.findByIdAndUpdate(actores, { //!
                  $pull: { Musical: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update actor",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update musical",
                message: error.message,
              }) && next(error);
            }
          } else { //!------> METER EL ACTOR/ACTRIZ EN EL ARRAY DE ACTORES DE MUSICAL
            try {
              await Musical.findByIdAndUpdate(id, {
                $push: { Actores: Actores }, //*------> si no lo incluye lo echamos
              });
              try {
                await Actores.findByIdAndUpdate(id, {
                  $push: { Musical: Musical }, 
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update actor",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update musical",
                message: error.message,
              }) && next(error);
            }
          }
        })
      )
        .catch((error) => res.status(404).json(error.message))//*-------> es común encontrarse este .catch tras el .then
        .then(async () => { //!----------------------------------> los Promise.All se terminan con un .then
          return res.status(200).json({
            dataUpdate: await Musical.findById(id).populate("Actores"),
          });
        });
    } else {
      return res.status(404).json("este musical no existe");
    }
  } catch (error) {
    return (
      res.status(404).json({
        error: "error catch",
        message: error.message,
      }) && next(error)
    );
  }
};


//! ---------------------------------------------------------------------
//? -------------------------------get by id --------------------------
//! ---------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const musicalById = await Musical.findById(id);
    if (musicalById) {
      return res.status(200).json(musicalById);
    } else {
      return res.status(404).json("no se ha encontrado el musical");
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
    const allMusicales = await Musical.find().populate("Actores");//* el find nos devuelve un array 
    
    if (allMusicales.length > 0) {
      return res.status(200).json(allMusicales);
    } else {
      return res.status(404).json("no se han encontrado musicales");
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
const getByTitle = async (req, res, next) => { //*----> lo has cambiado por title, no tienes muy claro que vaya a funcionar
  try {
    const { title } = req.params;

    /// nos devuelve un array de elementos
    const MusicalesByTitle = await Musical.find({ title });
    if (MusicalesByTitle.length > 0) {
      return res.status(200).json(MusicalesByTitle);
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

const deleteMusical = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Musical = await Musical.findByIdAndDelete(id);
    if (Musical) {
      // lo buscamos para vr si sigue existiendo o no
      const finByIdMusical = await Musical.findById(id);

      try {
        const test = await Actores.updateMany(
          { Musical: id },
          { $pull: { Musical: id } }
        );
        console.log(test);

        try {
          await User.updateMany(
            { MusicalFav: id },
            { $pull: { MusicalFav: id } }
          );

          return res.status(finByIdMusical ? 404 : 200).json({
            deleteTest: finByIdMusical ? false : true,
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

module.exports = { 
  createMusical, 
  toggleActores, 
  getAll, 
  getById, 
  getByTitle,
  deleteMusical
};
