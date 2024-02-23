const bcrypt = require("bcrypt"); //*----> para encriptar informacion
const validator = require("validator"); //*-----> nos sirve para validar info
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(  //*-----> la primera siempre en mayúscula
    //! vamos a tener la definicion de datos
    {
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: [validator.isEmail, "Email not valid"], //*----> en caso de no ser un email valido lanza el error ----> 'Email not valid'
      },
      name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        trim: true,
        validate: [validator.isStrongPassword], //* ------>minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
      },
      gender: {
        type: String,
        enum: ["hombre", "mujer", "otros"],
        required: true,
      },
      rol: {
        type: String,
        enum: ["admin", "user", "superadmin"],
        default: "user",
      },
      confirmationCode: {
        type: Number,
        required: true,
      },
      check: {
        type: Boolean,
        default: false,
      },
      image: {
        type: String,
      },
      musicalFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "Musical" }],
      actorFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actores" }],
      followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      followed: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
      banned: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      blockedByApp: { type: Boolean, default: false },
      commentsPublicByOther: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
      ],
      postedMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
      //! cuando relacionamos un modelo de con otro lo hacemos con populate y el ref a otro modelo
    },
    {
      timestamps: true,
    }
  );

  UserSchema.pre("save", async function (next) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
      //* -----> el next puede lanzar al log o puede decir que continuemos
    } catch (error) {
      next("Error hashing password", error);
    }
  });
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;