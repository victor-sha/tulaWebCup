const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const favicon = require("express-favicon");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;
const build_path = "/frontend/build";
const keys = require("./config/keys");

require("./models/Picture");
require("./models/User");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(favicon(__dirname + `${build_path}/favicon.ico`));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, build_path)));

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
});

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

require("./routes/pictureRoutes")(app);

app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, build_path, "index.html"));
});

app.listen(port, () => console.log("server is running on port " + port));
