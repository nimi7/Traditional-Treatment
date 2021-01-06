const mongoose = require("mongoose");
require("dotenv").config();

//! connect to db
mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("Connected to the DB");
  })

  .catch((err) => console.log("Problem to connect to the db"));

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});