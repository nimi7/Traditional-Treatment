const router = require("express").Router();
const WestaNewsLetter = require("../models/WestaNewsLetter");
const verifyToken = require("./verifyToken");
const nodemailer = require("nodemailer");

router.post("/westaNewsLetter", (req, res, next) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "wustetsegacenter@gmail.com",
      pass: "rbsiicpjwzvmhzsc",
    },
  });

  let mailOptions = {
    from: "wustetsegacenter@gmail.com",
    to: data.email,
    subject: `Message from ${data.firstName}`,

    html: `
      <h2>היי ${data.firstName},
      תודה שנרשמת לניוזילטר שלנו</h2>
      `,
  };
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function (err, response) {

    console.log(mailOptions);
    console.log(mailOptions.from);
    response.envelope.from = mailOptions.from;

    if (response) {
      console.log(response, "res");
      console.log("-----------------------------------------------------");
      res.json({
        message: response,
        status: 200,
      });
     // const { firsName, lastName, email } = req.body;
      const newsLetter = new WestaNewsLetter({
        firsName,
        lastName,
        email,
      });

      WestaNewsLetter.findOne({
        email: data.email,
      })
        .then(async (userData) => {
          if (!userData) {
            await newsLetter.save();
            res.status(201).send(newsLetter);
          } else {
            res.status(404).json({ error: "user already exist" });
          }
        })
        .catch((err) => {
          res.status(500).send("error:" + err);
        });
    } else {
      console.log(err, "Error");
    }
  });
  smtpTransport.close();
});

router.post("/westaNewsLetter", async (req, res, next) => {});

router.get("/westaNewsLetter", (req, res) => {
  return WestaNewsLetter.find({})
    .then((date) => {
      res.status(200).send(date);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

module.exports = router;
