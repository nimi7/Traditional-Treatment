const { Schema, model } = require("mongoose");

const WestaNewsLetterSchema = new Schema({
  firstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  createDate: Date,
});
module.exports = model("newsLetter", WestaNewsLetterSchema);
