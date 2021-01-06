const express = require("express");
const app = express();
const path = require("path");
const uploadDestination = "uploadDestination";
app.use(express.static(__dirname + "/public"));

// require("router");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, uploadDestination)));

app.use(require("./controllers/authController"));
app.use(require("./controllers/westaGalleryController"));
app.use(require("./controllers/westaArticleController"));
app.use(require("./controllers/westaNewsLetterController"));
app.use(require("./controllers/authController"));
app.use(require("./controllers/westaContactUs"));

module.exports = app;

