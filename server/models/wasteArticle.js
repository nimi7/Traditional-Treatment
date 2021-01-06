const { Schema, model } = require("mongoose");

// Schema For Article

const WestaArticle = new Schema({
  header: String,
  imgPath: String,
  content: String,
  subHeader: String,
  createDate: Date,
  modifideDate: Date
});

module.exports = model("WestaArticle", WestaArticle);
