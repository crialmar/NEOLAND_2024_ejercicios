//! --------------------------middleware------------------------------------
const { deleteImgCloudinary } = require("../../middleware/files.middleware");

//! ---------------------------- modelos ----------------------------------
const User = require("../models/User.model");

//! ---------------------------- utils ----------------------------------
const randomCode = require("../../utils/randomCode");
const sendEmail = require("../../utils/sendEmail");
const { generateToken } = require("../../utils/token");
const enumOk = require("../../utils/enumOk");
const randomPassword = require("../../utils/randomPassword.JS");

//! ------------------------------librerias--------------------------------
const nodemailer = require("nodemailer");
const validator = require("validator");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken'); //*-----> la metemos aquí porque es una librería
const {
  setTestEmailSend,
  getTestEmailSend,
} = require("../../state/state.data");



dotenv.config();


//? ----------------------------REGISTER LARGO EN CODIGO ------------------------
//? .............................................................................

//* -------------------> CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar"

const registerLargo = async (req, res, next) => {
    //*------> lo primero que vamos hacer captura la imagen que previamente hemos subido en el middleaware
    let catchImg = req.file?.path; //* --------> el optional chaining es para que no rompa en caso de no haber path
    //*------> el path es la url de cloudinary
  
    try {
      /** hay que meter un try catch por cada asincronia de actualizacion que tengamos de actualizacion para poder
       * seleccionar los errores de forma separada e individualizada
       *
       * la asincronias de lectura no hace falta que tengan un try catch por cada una de ellas
       */
  
      //* ---------> sincronizamos los index de los elementos unique 
      await User.syncIndexes();
      let confirmationCode = randomCode();
      const { email, name } = req.body; //*----->  lo que enviamos por la parte del body de la request
  
      //* ------> vamos a buscar al usuario
      const userExist = await User.findOne(
        { email: req.body.email },
        { name: req.body.name }
      );
  
      if (!userExist) {
        //! -------------LO REGISTRAMOS PORQUE NO HAY COINCIDENCIAS CON UN USER INTERNO
        const newUser = new User({ ...req.body, confirmationCode });
  
        // EL USER HA METIDO IMAGEN ???
        if (req.file) {
          newUser.image = req.file.path;
        } else {
          newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
        }
  
        //! SI HAY UNA NUEVA ASINCRONIA DE CREAR O ACTUALIZAR HAY QUE METER OTRO TRY CATCH
        try {
          const userSave = await newUser.save();
          if (userSave) {
            //* ---------------------------> ENVIAR EL CODIGO CON NODEMAILER 
            const emailEnv = process.env.EMAIL;
            const password = process.env.PASSWORD;
  
            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: emailEnv,
                pass: password,
              },
            });

            const mailOptions = {
              from: emailEnv,
              to: email,
              subject: "Confirmation code",
              text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
            };
  
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
                return res.status(404).json({
                  user: userSave,
                  confirmationCode: "error, resend code",
                });
              }
              console.log("Email sent: " + info.response);
              return res.status(200).json({
                user: userSave,
                confirmationCode,
              });
            });
          }
        } catch (error) {
          return res.status(404).json({error: "soy el error", message: error.message})
        }
      } else {
        //! -------> cuando ya existe un usuario con ese email y ese name
        if (req.file) deleteImgCloudinary(catchImg);
        //*--------> como ha habido un error la imagen previamente subida se borra de cloudinary
        return res.status(409).json("this user already exist");
      }
    } catch (error) {
        if (req.file) deleteImgCloudinary(catchImg);
        return next(error.message);
    }
  };
  
  //module.exports = { registerLargo };


//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER CORTO EN CODIGO ------------------------
//! -----------------------------------------------------------------------------

const register = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await User.syncIndexes();
    let confirmationCode = randomCode();
    const { email, name } = req.body;

    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );
    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }

      try {
        const userSave = await newUser.save();

        if (userSave) {
          sendEmail(email, name, confirmationCode);
          setTimeout(() => {
            console.log("getTest", getTestEmailSend());
            if (getTestEmailSend()) {
              // el estado ya utilizado lo reinicializo a false
              setTestEmailSend(false);
              return res.status(200).json({
                user: userSave,
                confirmationCode,
              });
            } else {
              setTestEmailSend(false);
              return res.status(404).json({
                user: userSave,
                confirmationCode: "error, resend code",
              });
            }
          }, 1100);
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER CON REDIRECT----------------------------
//! -----------------------------------------------------------------------------
const registerWithRedirect = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await User.syncIndexes();
    let confirmationCode = randomCode();
    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );
    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }

      try {
        const userSave = await newUser.save();
        const PORT = process.env.PORT;
        if (userSave) {
          return res.redirect(
            307,
            `http://localhost:${PORT}/api/v1/users/register/sendMail/${userSave._id}`
          );
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    if (req.file) {
      deleteImgCloudinary(catchImg);
    }
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? ------------------CONTRALADORES QUE PUEDEN SER REDIRECT --------------------
//! ----------------------------------------------------------------------------

//? esto quiere decir que o bien tienen entidad propia porque se llaman por si mismos por parte del cliente
//? o bien son llamados por redirect es decir son controladores de funciones accesorias

const sendCode = async (req, res, next) => {
  try {
    /// sacamos el param que hemos recibido por la ruta
    /// recuerda la ruta: http://localhost:${PORT}/api/v1/users/register/sendMail/${userSave._id}
    const { id } = req.params;

    /// VAMOS A BUSCAR EL USER POR ID para tener el email y el codigo de confirmacion
    const userDB = await User.findById(id);

    /// ------------------> envio el codigo
    const emailEnv = process.env.EMAIL;
    const password = process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailEnv,
        pass: password,
      },
    });

    const mailOptions = {
      from: emailEnv,
      to: userDB.email,
      subject: "Confirmation code",
      text: `tu codigo es ${userDB.confirmationCode}, gracias por confiar en nosotros ${userDB.name}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(404).json({
          user: userDB,
          confirmationCode: "error, resend code",
        });
      }
      console.log("Email sent: " + info.response);
      return res.status(200).json({
        user: userDB,
        confirmationCode: userDB.confirmationCode,
      });
    });
  } catch (error) {
    return next(error);
  }
};

//module.exports = { registerLargo, register, sendCode, registerWithRedirect };

//! -----------------------------------------------------------------------------
//? -------------------------------LOGIN-----------------------------------------
//! -----------------------------------------------------------------------------

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userDB = await User.findOne({ email });

    if (userDB) {
			//*-----> comparamos la contrase del body con la del user de la DB
      if (bcrypt.compareSync(password, userDB.password)) {
				//*-----> si coinciden generamos el token
        const token = generateToken(userDB._id, email);
				//*-----> mandamos la respuesta con el token
        return res.status(200).json({
          user: userDB,
          token,
        });
      } else {
        return res.status(404).json('password dont match');
      }
    } else {
      return res.status(404).json('User no register');
    }
  } catch (error) {
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? ---------------------------AUTOLOGIN-----------------------------------------
//! -----------------------------------------------------------------------------

const autoLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userDB = await User.findOne({ email });

    if (userDB) { //*------> compara dos contraseñas encriptadas
      if ((password == userDB.password)) {
        const token = generateToken(userDB._id, email);
        return res.status(200).json({
          user: userDB,
          token,
        });
      } else {
        return res.status(404).json('password dont match');
      }
    } else {
      return res.status(404).json('User no register');
    }
  } catch (error) {
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? -----------------------------RESEND CODE-------------------------------------
//! -----------------------------------------------------------------------------

const resendCode = async (req, res, next) => {
  try {
    //*----> vamos a configurar nodemailer porque tenemos que enviar un codigo
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });

    //*----> hay que ver que el usuario exista porque si no existe no tiene sentido hacer ninguna verificacion
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: "Confirmation code",
        text: `tu codigo es ${userExists.confirmationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(404).json({
            resend: false,
          });
        } else {
          console.log("Email sent: " + info.response);
          return res.status(200).json({
            resend: true,
          });
        }
      });
    } else {
      return res.status(404).json("User not found");
    }
  } catch (error) {
    return next(setError(500, error.message || "Error general send code"));
  }
};


//! -----------------------------------------------------------------------------
//? ----------------------------CHECK CODE---------------------------------------
//! -----------------------------------------------------------------------------

const checkNewUser = async (req, res, next) => {
  try {
    //! nos traemos de la req.body el email y codigo de confirmation
    const { email, confirmationCode } = req.body;

    const userExists = await User.findOne({ email });

    if (!userExists) {
      //!No existe----> 404 de no se encuentra
      return res.status(404).json("User not found");
    } else {
      //*---> comparamos que el codigo que recibimos por la req.body y el del userExists es igual
      if (confirmationCode === userExists.confirmationCode) {
        try {
          await userExists.updateOne({ check: true });

          //*----> hacemos un testeo de que este user se ha actualizado correctamente con un findOne
          const updateUser = await User.findOne({ email });

          //*----> este finOne nos sirve para hacer un ternario que nos diga si la propiedad vale true o false
          return res.status(200).json({
            testCheckOk: updateUser.check == true ? true : false,
          });
        } catch (error) {
          return res.status(404).json(error.message);
        }
      } else { 
        try {
          //*---> En caso dec equivocarse con el codigo lo borramos de la base datos y lo mandamos al registro
          await User.findByIdAndDelete(userExists._id);
          /*const deleteUser = await User.findByIdAndDelete(userExists._id);*/ //?-------> Esta línea es del notion, que es distinta ya que no tenemos un try/catch (tener en cuenta también)

          //*---> borramos la imagen
          deleteImgCloudinary(userExists.image);

          //*----> devolvemos un 200 con el test de ver si el delete se ha hecho correctamente
          return res.status(200).json({
            userExists,
            check: false,

            //*---> test en el runtime sobre la eliminacion de este user
            delete: (await User.findById(userExists._id))
              ? "error delete user"
              : "ok delete user",
          });
        } catch (error) {
          return res
            .status(404)
            .json(error.message || "error general delete user");
        }
      }
    }
  } catch (error) {
    //*---> siempre en el catch devolvemos un 500 con el error general
    return next(setError(500, error.message || "General error check code")); //*----> el setError es del helper handler
  }
};

//?------> en Insomnia habrá que meter el email y el confirmationCode

//! ------------------------------------------------------------------------------
//? -------------------CAMBIO DE CONTRASEÑA ANTES DEL LOG-------------------------
//! ------------------------------------------------------------------------------

const changePassword = async (req, res, next) => {
  try {
    /** vamos a recibir por el body el email y vamos a comprobar que
     * este user existe en la base de datos
     */
    const { email } = req.body;
    console.log(req.body);
    const userDb = await User.findOne({ email });
    if (userDb) {
      /// si existe hacemos el redirect
      const PORT = process.env.PORT;
      return res.redirect(
        307,
        `http://localhost:${PORT}/api/v1/users/sendPassword/${userDb._id}`
      );
    } else {
      return res.status(404).json("User no register");
    }
  } catch (error) {
    return next(error);
  }
};

const sendPassword = async (req, res, next) => {
  try {
    //*-----> VAMOS A BUSCAR AL USER POR EL ID DEL PARAM 
    const { id } = req.params;
    const userDb = await User.findById(id);
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });
    let passwordSecure = randomPassword()
    console.log(passwordSecure);
    const mailOptions = {
      from: email,
      to: userDb.email,
      subject: "-----",
      text: `User: ${userDb.name}. Your new code login is ${passwordSecure} Hemos enviado esto porque tenemos una solicitud de cambio de contraseña, si no has sido ponte en contacto con nosotros, gracias.`,
    };
    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        // SI HAY UN ERROR MANDO UN 404
        console.log(error);
        return res.status(404).json("dont send email and dont update user");
      } else {
        // SI NO HAY NINGUN ERROR
        console.log("Email sent: " + info.response);
        //*-----> guardamos esta contraseña en mongo db

        const newPasswordBcrypt = bcrypt.hashSync(passwordSecure, 10); //*----> encriptamos la contraseña

        try {
          /** este metodo te lo busca por id y luego modifica las claves que le digas
           * en este caso le decimos que en la parte dde password queremos meter
           * la contraseña hasheada
           */
          await User.findByIdAndUpdate(id, { password: newPasswordBcrypt }); //*----> actualizamos la contraseña hasheada en el back

          //!------------------ test --------------------------------------------
          //* 1) vuelvo a buscar el user pero ya actualizado
          const userUpdatePassword = await User.findById(id);

          //* 2) hago un compare sync ----> comparo una contraseña no encriptada con una encrptada
          //* -----> userUpdatePassword.password ----> encriptada
          //* -----> passwordSecure -----> contraseña no encriptada
          if (bcrypt.compareSync(passwordSecure, userUpdatePassword.password)) { //? si son iguales quiere decir que el back se ha actualizado correctamente
            return res.status(200).json({
              updateUser: true,
              sendPassword: true,
            });
          } else { //? si no son iguales le diremos que hemos enviado el correo pero que no hemos actualizado el user del back en mongo db
            return res.status(404).json({
              updateUser: false,
              sendPassword: true,
            });
          }
        } catch (error) {
          return res.status(404).json(error.message);
        }
      }
    });
  } catch (error) {
    return next(error);
  }
};

//! ------------------------------------------------------------------------------
//? -------------------CAMBIO DE CONTRASEÑA TRAS DEL LOG--------------------------
//! ------------------------------------------------------------------------------

const modifyPassword = async (req, res, next) => {
  //* IMPORTANTE ---> REQ.USER ----> LO CREAR LOS AUTH MIDDLEWARE 
  console.log("req.user", req.user);

  try {
    const { password, newPassword } = req.body;
    const { _id } = req.user;
    
    if (bcrypt.compareSync(password, req.user.password)) { //*----> comparamos la contrasela vieja sin encriptar y la encriptada 
      const newPasswordHashed = bcrypt.hashSync(newPassword, 10); //*-----> encriptamos la contraseña para guardarla en el back Mongo DB

      //* vamos a actualizar la contraseña en mongo db */
      try {
        await User.findByIdAndUpdate(_id, { password: newPasswordHashed });

        /** TESTING EN TIEMPO REAL  */

        const userUpdate = await User.findById(_id);//*  1) Traemos el user actualizado

        
        if (bcrypt.compareSync(newPassword, userUpdate.password)) { //* 2) vamos a comparar la contraseña sin encriptar y la tenemos en el back que esta encriptada
          
          return res.status(200).json({ //*-----> SI SON IGUALES 200 ---> UPDATE OK
            updateUser: true,
          });
        } else {
          return res.status(404).json({ //*------> NO SON IGUALES -------> 404 no son iguales
            updateUser: false,
          });
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {

      return res.status(404).json("password dont match"); //*----> si las contraseñas no son iguales le mando un 404
    }
  } catch (error) {
    return next(error);
    /**
     * return next(
      setError(
        500,
        error.message || 'Error general to ChangePassword with AUTH'
      )
    );
     */ //*-----> esta es la forma correcta por buenas prácticas
  }
};

//! -----------------------------------------------------------------------------
//? ---------------------------------UPDATE--------------------------------------
//! -----------------------------------------------------------------------------

const update = async (req, res, next) => {
  let catchImg = req.file?.path; //*----> capturamos la imagen nueva subida a cloudinary

  try {
    await User.syncIndexes(); //*----> actualizamos los elementos unique del modelo

    const patchUser = new User(req.body); //*----> instanciamos un nuevo objeto del modelo de user con el req.body

    req.file && (patchUser.image = catchImg);//*---> si tenemos imagen metemos a la instancia del modelo esta imagen nuevo que es lo que capturamos en catchImg

    //** vamos a salvaguardar info que no quiero que el usuario pueda cambiarme aunque quiera cambiarlas, no lo haremos */
    // ciertas claves las cambiaremos mediante este controlador, otras se harán mediante uno específico como password o rol
    patchUser._id = req.user._id;
    patchUser.password = req.user.password;
    patchUser.rol = req.user.rol;
    patchUser.confirmationCode = req.user.confirmationCode;
    patchUser.email = req.user.email;
    patchUser.check = req.user.check;

    if (req.body?.gender) {//*---> lo comprobamos y lo metermos en patchUser con un ternario en caso de que sea true o false el resultado de la funcion
      const resultEnum = enumOk(req.body?.gender);
      patchUser.gender = resultEnum.check ? req.body?.gender : req.user.gender;
    }

    try {//*----> actualización-----> NO USAR SAVE
      //* le metemos en el primer valor el id de el objeto a actualizar y en el segundo valor le metemos la info que queremos actualizar
      await User.findByIdAndUpdate(req.user._id, patchUser);

      //* si nos ha metido una imagen nueva y ya la hemos actualizado pues tenemos que borrar la antigua
      //* la antigua imagen la tenemos guardada con el usuario autenticado --> req.user
      if (req.file) deleteImgCloudinary(req.user.image);

      //* ++++++++++++++++++++++ TEST RUNTIME+++++++++++++++++++++++++++++++++++++++
      //*----> siempre lo primero cuando testeamos es el elemento actualizado para comparar la info que viene del req.body
       
      const updateUser = await User.findById(req.user._id);

      
      const updateKeys = Object.keys(req.body);//*----> sacamos las claves del objeto del req.body para saber que info nos han pedido actualizar

      
      const testUpdate = [];//*----> creamos un array donde guardamos los test
      //* recorremos el array de la info que con el req.body nos dijeron de actualizar
      //** recordar este array lo sacamos con el Object.keys */

      //* updateKeys ES UN ARRAY CON LOS NOMBRES DE LAS CLAVES = ["name", "email", "rol"]

      //?----------------> para todo lo diferente de la imagen ----------------------------------
      updateKeys.forEach((item) => {
        if (updateUser[item] === req.body[item]) { //*----> vamos a comprobar que la info actualizada sea igual que lo que me mando por el body... 
          
          if (updateUser[item] != req.user[item]) {//*----> aparte vamos a comprobar que esta info sea diferente a lo que ya teniamos en mongo subido antes 
            //*-----> si es diferente a lo que ya teniamos----> lanzamos el nombre de la clave y su valor como true en un objeto
            //*----> este objeto se pushea en el array que creamos arriba que guarda todos los testing en el runtime
            testUpdate.push({
              [item]: true,
            });
          } else {
            //*----> si son igual lo que pushearemos sera el mismo objeto que arrriba pro diciendo que la info es igual
            testUpdate.push({
              [item]: "sameOldInfo",
            });
          }
        } else {
          testUpdate.push({
            [item]: false,
          });
        }
      });

      //? ---------------------- para la imagen ---------------------------------
      if (req.file) {
        /** si la imagen del user actualizado es estrictamente igual a la imagen nueva que la
         * guardamos en el catchImg, mandamos un objeto con la clave image y su valor en true
         * en caso contrario mandamos esta clave con su valor en false
         */
        updateUser.image === catchImg
          ? testUpdate.push({
              image: true,
            })
          : testUpdate.push({
              image: false,
            });
      }
       
      return res.status(200).json({ //* una vez finalizado el testing en el runtime vamos a mandar el usuario actualizado y el objeto con los test
        updateUser,
        testUpdate,
      });
    } catch (error) {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(404).json(error.message);
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};


//! -----------------------------------------------------------------------------
//? ---------------------------------DELETE--------------------------------------
//! -----------------------------------------------------------------------------

const deleteUser = async (req, res, next) => {
  try {
    const { _id, image } = req.user;
    await User.findByIdAndDelete(_id);
    if (await User.findById(_id)) { //*-----> si existe el usuario
      return res.status(404).json("not deleted"); 
    } else {
      deleteImgCloudinary(image); //*----> si no es así la elimina
      return res.status(200).json("ok delete");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { 
  registerLargo, 
  register, 
  sendCode, 
  registerWithRedirect, 
  login, 
  autoLogin, 
  resendCode, 
  checkNewUser,
  changePassword,
  sendPassword, 
  modifyPassword,
  update,
  deleteUser
};