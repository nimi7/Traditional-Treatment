const { Schema, model } = require("mongoose");

const WasteStaticData = new Schema({
  name: String,
  content: String,
  img: String,
  lastUpDate: Date
});

module.exports = model("WasteStaticData", WasteStaticData);
