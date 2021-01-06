const { Schema, model } = require("mongoose");

const WestaGallery = new Schema({
  name: String,
  imgPath: String,
  createDate: Date,
  modifideDate: Date
});

module.exports = model("WestaGallery", WestaGallery);
