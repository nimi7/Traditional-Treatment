const router = require("express").Router();

const verifyToken = require("./verifyToken");
const generateJWT = require("../utils/auth");

const User = require("../models/User");

//Login
router.post("/register", async (req, res, next) => {
  const { name, email, password } = req.body;

  console.log(req.body)
  const user = new User({
    name,
    email,
    password,
  });

  User.findOne({
    email: req.body.email,
  })
    .then(async (userData) => {
      if (!userData) {
        user.password = await user.encryptPassword(user.password);
        await user.save();

        const token = await generateJWT(user);
        reד.status(200).json({ auth: true, token });
        console.log("true");
      } else {
        res.status(404).json({ error: "User already exist" });
      }
    })
    .catch((err) => {
      res.status(500).send("error:" + err);
    });
});

router.get("/me", verifyToken, async (req, res, next) => {
  const user = await User.findById(req.userId, { password: 0 });
  token = req.get("x-access-token");
  if (!user) {
    return res.status(404).send("No user found");
  }
  res.json(user);
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body)

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).send("The email no exists");
  }

  const passwordIsValid = await user.validatePassword(password);

  if (!passwordIsValid) {
    res.status(401).json({ auth: false, token: null });
  }

  const token = await generateJWT(user);

  res.json({ auth: true, token });
});

module.exports = router;
