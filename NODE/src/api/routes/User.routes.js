const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");//*-----> no sabes muy bien qué hacer con esto
const { upload } = require("../../middleware/files.middleware");
const {
  registerLargo,
  register,
  registerWithRedirect,
  sendCode,
  login,
  autoLogin,
  resendCode,
  checkNewUser,
  changePassword,
  sendPassword
} = require("../controllers/User.controllers");
const express = require("express");
const UserRoutes = express.Router();

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post("/registerUtil", upload.single("image"), register);
UserRoutes.get("/register", upload.single("image"), registerWithRedirect);

UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);

UserRoutes.post("/login", login);
UserRoutes.post("/login/autologin", autoLogin)

UserRoutes.patch("/forgotpassword", changePassword);
UserRoutes.patch("/sendPassword/:id", sendPassword); //?-----> con auth

//* ------------------> rutas que pueden ser redirect
UserRoutes.get("/register/sendMail/:id", sendCode); //* :id ---> es el nombre del param
  //? ----> con auth

module.exports = UserRoutes;


