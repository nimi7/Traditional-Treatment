const app = require("./app");
require("./database");

const PORT = process.env.PORT || 5000;
const HOST = "localhost" || "185.163.150.68/32";
const bodyParser = require("body-parser");
const path = require("path");
console.log(process.env.PORT);
// connectDB();

//DEPLOYMENT
if (process.env.NODE_ENV === "production") {
  const root = path.join(__dirname, "..", "client", "build");
  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });
};

app.listen(PORT, () => {
  console.log(`shut up start on port: ${PORT}`);
});
