const router = require("express").Router();
const WestaArticle = require("../models/WasteArticle");
const verifyToken = require("./verifyToken");

router.get("/westaArticle", (req, res) => {
  return WestaArticle.find({})
    .then((date) => {
      res.status(200).send(date);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

router.post("/westaArticle", verifyToken, async (req, res, next) => {
  token = req.get("x-access-token");
  const { header, imgPath, content, subHeader } = req.body;
  const obj = new WestaArticle({
    header,
    imgPath,
    content,
    subHeader,
    createDate: Date.now(),
    modifideDate: Date.now(),
  });
  obj.save();
  res.status(201).send(obj);
});

router.put("/westaArticle/:id", verifyToken, (req, res) => {
  token = req.get("x-access-token");

  const updateData = {
    header: req.body.header,
    imgPath: req.body.imgPath,
    content: req.body.content,
    subHeader: req.body.subHeader,
    createDate: req.body.createDate,
    modifideDate: Date.now(),
  };
  console.log(updateData);

  WestaArticle.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true },
    function (err, result) {
      res.send(result);
    }
  );
});

router.delete("/westaArticle/:id", verifyToken, (req, res) => {
  token = req.get("x-access-token");
  const id = req.params.id;
  WestaArticle.findByIdAndRemove({ _id: id })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
