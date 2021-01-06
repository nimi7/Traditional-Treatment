const router = require("express").Router();
const uploadDestination = "server/uploadDestination";
const path = require("path");
const express = require("express");
const multer = require("multer");
router.use(express.static(path.join(__dirname, uploadDestination)));
const WestaGallery = require("../models/WestaGallery");
const verifyToken = require("./verifyToken");

const storage = multer.diskStorage({
  destination: uploadDestination,
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
});

router.get("/westaGallery", (req, res) => {
  return WestaGallery.find({})
    .then((date) => {
      res.status(200).send(date);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.post(
  "/westaGallery",
  // verifyToken,
  upload.single("myImage"),
  (req, res) => {
    // token = req.post("x-access-token");

    const obj = new WestaGallery({
      imgPath: req.file.filename,
      createDate: Date.now(),
    });
    obj.save();
    res.status(201).send(obj);
  }
);

router.put("/westaGallery/:id", verifyToken, (req, res) => {
  token = req.put("x-access-token");

  const id = req.params.id;
  const updateData = {
    imgPath: req.body.imgPath,
    modifideDate: Date.now()
  };
  console.log(updateData);

  WestaGallery.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function (err, result) {
      res.send(result);
    }
  );
});

router.delete("/westaGallery/:id", verifyToken, (req, res) => {
  token = req.delete("x-access-token");

  const id = req.params.id;
  WestaGallery.findByIdAndRemove({ _id: id })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
