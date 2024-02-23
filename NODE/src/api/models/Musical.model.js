const mongoose = require("mongoose");

const MusicalSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    type: {
      type: String,
      enum: ["movie musical", "theater musical"],
      required: true,
    },
    actores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actores" }],//--------> cambie la mayuscula
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    //owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true,
  }
);

const Musical = mongoose.model("Musical", MusicalSchema);

module.exports = Musical;
